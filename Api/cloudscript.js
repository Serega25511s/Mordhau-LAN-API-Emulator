const fs = require('fs');

function handleUpdateAccountInfo(entityId) {
  let userInfo = {};
  try {
    const rawData = fs.readFileSync('Users.json', 'utf8');
    if (rawData.length > 0) {
      userInfo = JSON.parse(rawData);
    }
  } catch (e) {
    userInfo = {};
  }
  if (!userInfo[entityId]) {
    return {
      code: 200,
      status: "OK",
      data: {
        FunctionName: "updateAccountInfo",
        Revision: 521,
        FunctionResult: {
          PlayFabId: "123457ASD",
          EntityId: "ASD123457",
          Platform: "Steam",
          PlatformAccountId: 1111,
          Type: "Server"
        },
        Logs: [],
        ExecutionTimeSeconds: 0.0862204,
        ProcessorTimeSeconds: 0.0021509,
        MemoryConsumedBytes: 22032,
        APIRequestsIssued: 4,
        HttpRequestsIssued: 0
      }
    };
  } else {
    return {
      code: 200,
      status: "OK",
      data: {
        FunctionName: "updateAccountInfo",
        Revision: 521,
        FunctionResult: {
          PlayFabId: entityId,
          EntityId: entityId,
          Platform: "Steam",
          PlatformAccountId: "76561198213050132",
          Name: userInfo[entityId],
          Type: "Player"
        },
        Logs: [{ Level: "Info", Message: "playerAccount" }],
        ExecutionTimeSeconds: 0.0862204,
        ProcessorTimeSeconds: 0.0021509,
        MemoryConsumedBytes: 22032,
        APIRequestsIssued: 4,
        HttpRequestsIssued: 0
      }
    };
  }
}

function handleStartMatch() {
  return {
    code: 200,
    status: "OK",
    data: {
      FunctionName: "startMatch",
      Revision: 521,
      Logs: [],
      ExecutionTimeSeconds: 0.0204083,
      ProcessorTimeSeconds: 0.000448,
      MemoryConsumedBytes: 7384,
      APIRequestsIssued: 1,
      HttpRequestsIssued: 0
    }
  };
}

function handleEndMatch() {
  return {
    code: 200,
    status: "OK",
    data: {
      FunctionName: "endMatch",
      Revision: 521,
      Logs: [],
      ExecutionTimeSeconds: 0.0268167,
      ProcessorTimeSeconds: 0.001112,
      MemoryConsumedBytes: 9512,
      APIRequestsIssued: 2,
      HttpRequestsIssued: 0
    }
  };
}

function handleGetMatchRewards(FunctionParameter) {
  const serverId = FunctionParameter?.ServerId;
  const matchId = FunctionParameter?.MatchId;
  return {
    code: 200,
    status: "OK",
    data: {
      FunctionName: "getMatchRewards",
      Revision: 521,
      FunctionResult: { Gold: 0, Xp: 0 },
      Logs: [{
        Level: "Info",
        Message: `Rewarded 0 Gold and 0 XP (Server: ${serverId}, Match: ${matchId})`
      }],
      ExecutionTimeSeconds: 0.1585883,
      ProcessorTimeSeconds: 0.00385,
      MemoryConsumedBytes: 0,
      APIRequestsIssued: 5,
      HttpRequestsIssued: 0
    }
  };
}

function handleDefault() {
  return {
    code: 200,
    status: "OK",
    data: {
      FunctionName: "updateEntitlements",
      Revision: 521,
      Logs: [],
      ExecutionTimeSeconds: 0.0862204,
      ProcessorTimeSeconds: 0.0021509,
      MemoryConsumedBytes: 0,
      APIRequestsIssued: 0,
      HttpRequestsIssued: 0
    }
  };
}

async function routes(fastify) {
  fastify.post("/CloudScript/ExecuteEntityCloudScript", async (request, reply) => {
    const { FunctionName, FunctionParameter, Entity } = request.body;
    const entityId = Entity?.Id;
    let data;
    switch (FunctionName) {
      case "updateAccountInfo":
        data = handleUpdateAccountInfo(entityId);
        break;
      case "startMatch":
        data = handleStartMatch();
        break;
      case "endMatch":
        data = handleEndMatch();
        break;
      case "getMatchRewards":
        data = handleGetMatchRewards(FunctionParameter);
        break;
      default:
        data = handleDefault();
    }
    return reply.send(data);
  });
}

module.exports = routes;
