const fs = require('fs');

// Função que vai mantendo o arquivo com as estatísticas
const createStatistic = async (city, error) => {

    var content;

    // Verifica se o arquivo existe, para ir atualizando nele, senão cria o arquivo pela primeira vez
    if (fs.existsSync('logs/statistic.json')) {

        content = fs.readFileSync('logs/statistic.json', 'utf8');
        content = JSON.parse(content);

        content.total = content.total + 1;

        content.cities.map((el) => {

            if (el.name === city) {
                el.total = el.total + 1;
            }

            var newPercent = (100 * el.total) / content.total;

            el.percent = parseInt(newPercent)


            return el
        })

        var json = JSON.stringify(content);

        fs.writeFileSync('logs/statistic.json', json, 'utf8');


    } else {
        content = {
            cities: [{
                name: city,
                total: 1,
                percent: 100
            }],
            total: 1
        }

        var json = JSON.stringify(content);

        fs.writeFileSync('logs/statistic.json', json, 'utf8');

    }

}


// Leitura do arquivo para apresentação das estatísticas
const readStatistic = async (req, res) => {

    var content;

    // Verifica se existe o arquivo para apresentar as estatísticas, senão apresenta zerado
    if (fs.existsSync('logs/statistic.json')) {

        content = fs.readFileSync('logs/statistic.json', 'utf8');

    } else {

        content = {
            cities: [],
            total: 0
        }

    }

    content = JSON.parse(content)

    res.json(content)

}

module.exports = {
    createStatistic,
    readStatistic
};