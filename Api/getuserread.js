
async function routes(fastify) {
    fastify.post("/Client/GetUserReadOnlyData", async (request, reply) => {
        let ip = request.ip
        let playfabid = "BD0C49CDF6FC457C"
        let entityid = "SPD0J3DQBWG7OZB4"
        let nickname = "[FREETP]LAN"
        let data = {"code":200,
            "status":"OK",
            "data":{
            "Data":{
                "AccountInfo":{
                    "Value":`{\"PlayFabId\":\"${playfabid}\",` +
                        `\"EntityId\":\"${entityid}\",` +
                        "\"Platform\":\"Steam\"," +
                        `\"PlatformAccountId\":\"76561198213050132\",` +
                        `\"Name\":\"${nickname}\",` +
                        "\"Type\":\"Player\"}",
                    "LastUpdated":"2023-05-21T10:57:35.443Z",
                    "Permission":"Public"},
                "ImportedInventory":{"Value":"true","LastUpdated":"2021-04-24T09:54:57.673Z","Permission":"Private"}},
                "DataVersion":2182}}
        reply.send(data);
    });
}

module.exports = routes;
