const axios = require("axios");
const fs = require('fs');

function makeid(length, useLowercase) {
    const characters = useLowercase
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

async function routes(fastify) {
    fastify.post("/Client/LoginWithSteam", async (request, reply) => {
        const { Username: username, ID: entityFabId } = request.body;
        const one = makeid(15, true);
        const two = makeid(43, true);
        const sessionTicket = `BD0C49CDF6FC457C--E524B3C4EA184B83-12D56-${one}-${two}=`;

        let users = {};
        try {
            const rawData = fs.readFileSync("Users.json", "utf-8");
            if (rawData.length > 0) {
                users = JSON.parse(rawData);
            }
        } catch (err) {
            users = {};
        }
        users[entityFabId] = username;
        fs.writeFileSync('Users.json', JSON.stringify(users));

        return reply.send({
            code: 200,
            status: "OK",
            data: {
                SessionTicket: sessionTicket,
                PlayFabId: entityFabId,
                NewlyCreated: false,
                SettingsForUser: {
                    NeedsAttribution: false,
                    GatherDeviceInfo: true,
                    GatherFocusInfo: true
                },
                LastLoginTime: "2022-05-22T17:04:47.416Z",
                EntityToken: {
                    EntityToken: "v9NkQoxkfZDv7DSszggpVvRe5pabynjuzsP9DmVEZnqhopRK5vUKrvsjeA4Yqfq5qxf7myicxnaNbdi7zcdckyAKUng2MrabwWWqpk4ik4iipzD4KNDkoTiwx9EvVT3f4rQVTy5EY5xYuPoNp4W7LtRquezMejdVreMrTQjuRZfemkAjzoevpjaXHTSvefa4WD7redA2yo3ShzHLPuHjMQt7aswiCQDnZbwYKvUPNuNKKp9XbNFzWUtJvdVzenoXEzwQ7yHZ3qSzmZ7YK5uxZjZTyjYAJpR3hNqrTprzmF2k2dbJF3gL4TukrakCHa4fXadYDSsn7P9Azn2NYDVjaar3uHqUv3ngdJqh5WH3ZJRYWzCku2iWPiwCVHdZEHELZMVWVcS7CAbMUiK3sjPh3Te5vhnnaDJ2eMd4umkLCQK9VZguM57L7NwRaKtY5zaATdDhgwHagXzTLDas7zeUcUuDe5Kzyeuf",
                    TokenExpiration: "2099-05-27T22:01:39.884Z",
                    Entity: {
                        Id: entityFabId,
                        Type: "title_player_account",
                        TypeString: "title_player_account",
                        IsTitle: false,
                        IsNamespace: false,
                        IsService: false,
                        IsMasterPlayer: false,
                        IsTitlePlayer: true
                    }
                },
                TreatmentAssignment: {
                    Variants: [],
                    Variables: []
                }
            }
        });
    });
}

module.exports = routes;