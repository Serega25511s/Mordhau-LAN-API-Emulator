const axios = require("axios");

const fs = require('fs');


function makeid(length, small) {
    let result           = '';
    let characters = ""
    if (small === true)
    {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }else{
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }

    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

async function routes(fastify) {

    fastify.post("/Lobby/CreateLobby", async (request, reply) => {
        const data = {
            "code": 200,
            "status": "OK",
            "data" : {"LobbyId": "b420e6a6-9592-49a4-8b9c-1b807d4cf841.r-20230509",
                "ConnectionString": "cv2:b420e6a6-9592-49a4-8b9c-1b807d4cf841.r-20230509|77142|kv1:Csr8bOnK4b8OcLm6pCZKcO3oTSpQ9bDhRQT2O+/K2Dw="
            }}
        return reply.send(data)
    });
    fastify.post("/Lobby/SubscribeToLobbyResource", async (request, reply) => {
        const data = {
            "code": 200,
            "status": "OK",
            "data": {
                "Topic": "1~lobby~LobbyInvite~title_player_account.FE421B61DC4B8B28"
            }}
        return reply.send(data)
    });
    fastify.post("/Lobby/GetLobby", async (request, reply) => {
        const data = {
            "code": 200,
            "status": "OK",
            "data" : {
                "Lobby": {
                    "LobbyId": "b420e6a6-9592-49a4-8b9c-1b807d4cf841.r-20230509",
                    "ChangeNumber": 1,
                    "MaxPlayers": 6,
                    "Owner": {
                        "Id": "FE421B61DC4B8B28",
                        "Type": "title_player_account",
                        "TypeString": "title_player_account"
                    },
                    "UseConnections": true,
                    "OwnerMigrationPolicy": "Automatic",
                    "AccessPolicy": "Private",
                    "MembershipLock": "Unlocked",
                    "ConnectionString": "cv2:b420e6a6-9592-49a4-8b9c-1b807d4cf841.r-20230509|77142|kv1:Csr8bOnK4b8OcLm6pCZKcO3oTSpQ9bDhRQT2O+/K2Dw=",
                    "LobbyData": {
                        "VERSION": "502613983"
                    },
                    "Members": [{
                        "MemberEntity": {
                            "Id": "FE421B61DC4B8B28",
                            "Type": "title_player_account",
                            "TypeString": "title_player_account"
                        },
                        "PubSubConnectionHandle": "1.Y2VudHJhbC11c35wdWJzdWItc2lnbmFsci1wcm9kLXdlc3R1czMtMDAyflJPNDhlazdVdDZmeFR1UW82SFdBQmdfQmpOcnc2MDI="
         }]}}}
        return reply.send(data)
    });
    fastify.post("/Lobby/UpdateLobby", async (request, reply) => {
        const data = {
            "code": 200,
            "status": "OK",
            "data" : {}}
        return reply.send(data)
    });
    fastify.post("/pubsub/negotiate", async (request, reply) => {
        const data = {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjY1MTcwMDYyIn0.eyJhc3JzLnMudWlkIjoidGl0bGVfcGxheWVyX2FjY291bnQ6RkU0MjFCNjFEQzRCOEIyOCIsInBmOnRpdGxlX2lkIjoiMTJENTYiLCJwZjplbnRpdHlfdHlwZSI6InRpdGxlX3BsYXllcl9hY2NvdW50IiwicGY6ZW50aXR5X2lkIjoiRkU0MjFCNjFEQzRCOEIyOCIsInBmOmNsb3VkX2lkIjoibWFpbiIsInBmOm5hbWVzcGFjZV9pZCI6IjQwMzZFRDcxOTgzODI2ODAiLCJwZjppZGVudGl0eV9wcm92aWRlciI6IlN0ZWFtIiwicGY6ZW50aXR5X3Rva2VuX2V4cGlyYXRpb25fZGF0ZXRpbWUiOiIyMDIzLTEwLTI1VDA3OjAxOjE0KzAwOjAwIiwibmJmIjoxNjk4MTMwODc1LCJleHAiOjE2OTgxMzQ0NzUsImlhdCI6MTY5ODEzMDg3NSwiYXVkIjoiaHR0cHM6Ly9wdWJzdWItc2lnbmFsci1wcm9kLXdlc3R1czMtMDAyLnNlcnZpY2Uuc2lnbmFsci5uZXQvY2xpZW50Lz9odWI9cHVic3ViaHViIn0.6TTUm94UlCCXHhmD_9xCFdNQv3iGwVqN2WakYruMTjw",
            "url": "https://pubsub-signalr-prod-westus3-002.service.signalr.net/client/?hub=pubsubhub"
        }
        return reply.send(data)
    });
    fastify.post("/client/negotiate", async (request, reply) => {
        const data = {
            "negotiateVersion": 0,
            "connectionId": "UZ20jZ9yjEwswdjgtU4L1QrIb5CA602",
            "availableTransports": [{
                "transport": "WebSockets",
                "transferFormats": ["Text", "Binary"]
            }, {
                "transport": "ServerSentEvents",
                "transferFormats": ["Text"]
            }, {
                "transport": "LongPolling",
                "transferFormats": ["Text", "Binary"]
            }]
        }
        return reply.send(data)
    });
}

module.exports = routes;