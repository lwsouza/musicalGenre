const axios = require('axios');
var SpotifyWebApi = require('spotify-web-api-node');
const createStatistic = require('./StatisticController').createStatistic

// Seta as partes necessárias para a credencial
var spotifyApi = new SpotifyWebApi({
    clientId: 'b872d855cefa45479ab54aebabcf3056',
    clientSecret: 'a97eb48a475e436a9a208523981dee00'
});

// Realiza uma requisição para setar o token que será utilizado na aplicação
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
        console.log('Something went wrong!', err);
    }
);

// Função que realiza as requisiçoes na API de temperatura e após saber a temperatura pesquisar os gêneros da música
const musicGenre = async (req, res) => {

    var { city } = req.params;
    var genre;

    var hostname = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c53b41f32b731e7808ac5ea49eaf479`;

    var response = await axios.get(`${hostname}`);

    if (response.status !== 200) {
        res.send("API fora do ar ou não encontrou a cidade solicitada!")
    }

    // Atualiza as estatísticas
    createStatistic(city)

    // Faz a conversão da temperatura para Celsius
    var tempCelsius = parseInt(response.data.main.temp - 273.15);

    // Informa o tipo de música através da temperatura
    if (tempCelsius > 25) {
        genre = "pop";
    } else if ((tempCelsius >= 10) && (tempCelsius <= 25)) {
        genre = "rock";
    } else {
        genre = "classical"
    }

    // Busca a playlist, através da categoria informada
    spotifyApi.getPlaylistsForCategory(`${genre}`, {
        country: 'BR',
        limit: 1,
        offset: 0
    })
        .then(function (data) {

            // Busca os dados da playlist
            spotifyApi.getPlaylist(data.body.playlists.items[0].id)
                .then(function (data) {

                    // Apresenta somente as músicas
                    var response = data.body.tracks.items.map(function (t) {
                        return { name: t.track.name };
                    });

                    res.json(response)
                }, function (err) {
                    console.log('Something went wrong!', err);
                });

        }, function (err) {
            console.log("Something went wrong!", err);
        });

}

module.exports = musicGenre;