var MusicController = require('../controllers/MusicController');
var readStatistic = require('../controllers/StatisticController').readStatistic;

module.exports = (app) => {

    // Rota de entrada
    app.get('/', function (req, res) {
        res.send('Olá, seja muito bem-vindo!');
    });

    // Rota para trazer os dados
    app.get('/cidade/:city', MusicController);

    // Rota para buscar as estatísticas
    app.get('/estatistica', readStatistic);
}


