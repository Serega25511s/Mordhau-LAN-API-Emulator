const fs = require("fs");
async function routes(fastify) {
    fastify.post("/Profile/GetProfiles", async (request, reply) => {
        let userEntityId = request.body["Entities"]["Id"]
        const rawData = fs.readFileSync('Users.json', 'utf8')
        const userInfo = rawData.length === 0 ? {"a":"b"} : JSON.parse(rawData)
        let data = {
            "code": 200,
            "status": "OK",
            "data": {
                "Profiles": [{
                    "Entity": {
                        "Id": `${userEntityId}`,
                        "Type": "title_player_account",
                        "TypeString": "title_player_account"
                    },
                    "EntityChain": `title_player_account!4036ED7198382680/12D56/${userEntityId}/${userEntityId}/`,
                    "VersionNumber": 4,
                    "Objects": {
                        "AccountInfo": {
                            "DataObject": {
                                "PlayFabId": `${userEntityId}`,
                                "EntityId": `${userEntityId}`,
                                "Platform": "Steam",
                                "PlatformAccountId": `${userEntityId}`,
                                "Name": `${userInfo[userEntityId]}`,
                                "Type": "Player",
                                "LastIndexed": 1670246368
                            },
                            "ObjectName": "AccountInfo"
                        }
                    },
                    "Lineage": {
                        "NamespaceId": "4036ED7198382680",
                        "TitleId": "12D56",
                        "MasterPlayerAccountId": `${userEntityId}`,
                        "TitlePlayerAccountId": `${userEntityId}`
                    },
                    "Created": "2021-02-18T19:24:10.888Z"
                }]
            }
        }
        reply.send(data);
    });
}

module.exports = routes;