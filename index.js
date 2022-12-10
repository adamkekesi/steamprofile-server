const express = require("express")
var axios = require('axios');

const app = express();

app.get("/", (req, res, next) => {

    const steamId = req.query.steamId;
    const key = process.env.API_KEY;
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

app.listen(3000)