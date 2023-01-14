const express = require("express")
var axios = require('axios');
var cors = require('cors')

const key = process.env.API_KEY;
const app = express();

app.use(cors())

app.get("/", (req, res, next) => {

    const steamId = req.query.steamId;
    const apiUrl = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/"
    const url = `${apiUrl}?key=${key}&steamids=${steamId}`;

    var config = {
        method: 'get',
        url: url,
        headers: {}
    };


    axios(config)
        .then(function (response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
            res.send("Hiba")
        });


});

app.get("/owned-games", (req, res, nex) => {
    const steamId = req.query.steamId;
    const apiUrl = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/"
    const url = `${apiUrl}?key=${key}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`;
    var config = {
        method: 'get',
        url: url,
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
            res.send("Hiba")
        });

})

app.listen(3000)