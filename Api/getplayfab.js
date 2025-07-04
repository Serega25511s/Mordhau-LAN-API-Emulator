async function routes(fastify) {
    fastify.post("/Client/GetPlayFabIDsFromSteamIDs", async (request, reply) => {
        let data = {"code":200,"status":"OK",
            "data":{"Data":{
                "AccountInfo":{
                    "Value":"{\"PlayFabId\":\"888491A02918C7F0\",\"EntityId\":\"BD0C49CDF6FC457C\",\"Platform\":\"Steam\",\"PlatformAccountId\":\"\",\"Name\":\"Kaden Hane\",\"Type\":\"Player\"}","LastUpdated":"2022-05-21T10:57:35.443Z","Permission":"Public"}},"DataVersion":1}}
        reply.send(data);
    });
}

module.exports = routes;