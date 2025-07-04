const fs = require("fs");

function makeid(length) {
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function makeids(length, small) {
    let result = '';
    let characters = small ? 'abcdefghijklmnopqrstuvwxyz0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

let currentServerData = {};

function checkServer(lobbyID) {
    let time = currentServerData[lobbyID]["nowTime"];
    const newInterval = setInterval(function () {
        let curTime = currentServerData[lobbyID]["nowTime"];
        if (curTime === time) {
            delete currentServerData[lobbyID];
            clearInterval(newInterval);
            return;
        }
        time = currentServerData[lobbyID]["nowTime"];
    }, 60 * 1000);
}

function handleImportInventory() {
    const catalogData = fs.readFileSync('Catalog.json', 'utf8');
    const catalog = JSON.parse(catalogData);
    const items = catalog["Inventory"];
    return {
        code: 200,
        status: "OK",
        data: {
            Inventory: items,
            VirtualCurrency: { GD: 500, XP: 500 },
            VirtualCurrencyRechargeTimes: {}
        }
    };
}

function handleAuthenticatePlayer() {
    return {
        code: 200,
        status: "OK",
        data: {
            FunctionName: "authenticatePlayer",
            Revision: 521,
            FunctionResult: {
                IsValid: true,
                IsExpired: false,
                AccountInfo: {
                    PlayFabId: `I6OLEESRTW0NWZB4`,
                    EntityId: `SPD0J3DQBWG7OZB4`,
                    Platform: "Steam",
                    PlatformAccountId: `76561198213050131`,
                    Name: `FreeTP.org`,
                    Type: "Player"
                }
            },
            Logs: [],
            ExecutionTimeSeconds: 0.0494505,
            ProcessorTimeSeconds: 0.001161,
            MemoryConsumedBytes: 5752,
            APIRequestsIssued: 2,
            HttpRequestsIssued: 0
        }
    };
}

function handleRegisterGameServer(req) {
    const lobby_id = makeid(20);
    const addres = req["ServerIPV4Address"];
    const port = req["ServerPort"];
    const serverName = req["ServerName"];
    const mapName = req["MapName"];
    const gameMode = req["GameMode"];
    const players = req["Players"];
    const maxPlayers = req["MaxPlayers"];
    const region = req["Region"];
    const beaconport = req["BeaconPort"];
    const allowjoin = req["AllowJoin"];
    const ispass = req["IsPasswordProtected"];
    const loc = req["Location"];
    const oc = req["OperatingSystem"];
    const pings = req["Pings"];
    const revSlot = req["ReservedSlots"];
    const version = req["Version"];
    const account_id = req["AccountId"];
    req["lobbyid"] = lobby_id;
    let now = new Date();
    currentServerData[lobby_id] = {
        BuildVersion: "dummy",
        GameMode: "dummy",
        GameServerState: 0,
        GameServerStateEnum: "Open",
        LastHeartbeat: "2022-06-17T09:59:18.216Z",
        LobbyID: lobby_id,
        PlayerUserIds: [],
        Region: "EUWest",
        RunTime: 0,
        ServerHostname: addres,
        ServerIPV4Address: addres,
        ServerPort: port,
        nowTime: now,
        Tags: {
            AccountID: account_id,
            AllowJoin: allowjoin,
            BeaconPort: beaconport,
            DockerHost: "imp_03005",
            DockerServer: "57",
            GameMode: gameMode,
            QueueName: "InvasionFrontline48",
            IsConsoleServer: "false",
            IsNoviceServer: "false",
            IsModded: "false",
            IsOfficial: "false",
            Visibility: "3",
            IsPasswordProtected: ispass,
            Location: loc,
            MapName: mapName,
            MaxPlayers: maxPlayers,
            OperatingSystem: oc,
            Pings: pings,
            Players: players,
            Region: region,
            ReservedSlots: revSlot,
            ServerName: serverName,
            Version: version,
            HostId: "imp_09002",
            InstanceId: "109002008"
        }
    };
    checkServer(lobby_id);
    return {
        code: 200,
        status: "OK",
        data: {
            FunctionName: "registerGameServer",
            Revision: 521,
            FunctionResult: {
                LobbyId: lobby_id,
                ServerToken: `${makeids(8, true)}-${makeids(4, true)}-${makeids(4, true)}-${makeids(4, true)}-${makeids(12, true)}`
            },
            Logs: [],
            ExecutionTimeSeconds: 0.1286295,
            ProcessorTimeSeconds: 0.002263,
            MemoryConsumedBytes: 40432,
            APIRequestsIssued: 4,
            HttpRequestsIssued: 0
        }
    };
}

function handleRefreshGameServer(req) {
    const lobbyid = req["LobbyId"];
    currentServerData[lobbyid]["nowTime"] = new Date();
    return {
        code: 200,
        status: "OK",
        data: {
            FunctionName: "refreshGameServer",
            Revision: 521,
            FunctionResult: {},
            Logs: [],
            ExecutionTimeSeconds: 0.0366089,
            ProcessorTimeSeconds: 0.001069,
            MemoryConsumedBytes: 6312,
            APIRequestsIssued: 3,
            HttpRequestsIssued: 0
        }
    };
}

function handleUpdateGameServer(req) {
    const lobbyid = req["LobbyId"];
    const mapname = req["MapName"];
    const gamemode = req["GameMode"];
    const players = req["Players"];
    const servername = req["ServerName"];
    currentServerData[lobbyid]["Tags"]["Players"] = players;
    currentServerData[lobbyid]["Tags"]["MapName"] = mapname;
    currentServerData[lobbyid]["Tags"]["GameMode"] = gamemode;
    currentServerData[lobbyid]["Tags"]["ServerName"] = servername;
    currentServerData[lobbyid]["nowTime"] = new Date();
    return {
        code: 200,
        status: "OK",
        data: {
            FunctionName: "updateGameServer",
            Revision: 521,
            FunctionResult: {},
            Logs: [],
            ExecutionTimeSeconds: 0.0357778,
            ProcessorTimeSeconds: 0.0016,
            MemoryConsumedBytes: 18144,
            APIRequestsIssued: 3,
            HttpRequestsIssued: 0
        }
    };
}

function handleUnlockItems() {
    return {
        code: 200,
        status: "OK"
    };
}

async function routes(fastify) {
    fastify.post("/Client/GetCurrentGames", async (request, reply) => {
        const result = Object.values(currentServerData) || [];
        const count = Object.keys(currentServerData).length;
        const data = {
            code: 200,
            status: "OK",
            data: {
                GameCount: count,
                Games: result,
                PlayerCount: 0
            }
        };
        return reply.send(data);
    });

    fastify.post("/Client/ExecuteCloudScript", async (request, reply) => {
        const funcname = request.body["FunctionName"];
        let data;
        switch (funcname) {
            case "importInventory":
                data = handleImportInventory();
                break;
            case "authenticatePlayer":
                data = handleAuthenticatePlayer();
                break;
            case "registerGameServer":
                data = handleRegisterGameServer(request.body["FunctionParameter"]);
                break;
            case "refreshGameServer":
                data = handleRefreshGameServer(request.body["FunctionParameter"]);
                break;
            case "updateGameServer":
                data = handleUpdateGameServer(request.body["FunctionParameter"]);
                break;
            case "unlockItems":
                data = handleUnlockItems();
                return reply.send(data);
            default:
                data = { code: 400, status: "Unknown FunctionName" };
        }
        reply.send(data);
    });
}

module.exports = routes;