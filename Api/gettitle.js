async function routes(fastify) {
  //version
  fastify.post("/Client/GetTitleData", async (request, reply) => {
    let data = {
      code:200,
      status:"OK",
      data:{
        Data:{
          BlacklistedServers: "[\"68.103.185.74:7777\"]",
          DevelopmentIngameEvent: "None",
          DevelopmentNoviceThreshold: "100",
          DevelopmentQueues: "{\"Brawl\":\"Brawl\",\"Duel\":\"Duel\",\"Frontline48\":\"Frontline48\",\"Frontline64\":\"Frontline64\",\"Horde\":\"Horde\",\"Invasion48\":\"DevInvasion48\",\"Invasion64\":\"Invasion64\",\"Teamfight\":\"Teamfight\"}",
          GlobalBannedPlayers: "{}",
          GlobalMutedPlayers: "{}",
          IngameEvent: "None",
          NoviceThreshold: "100",
          OfficialBannedPlayers: "{}",
          OfficialMutedPlayers: "{}",
          ProfaneWords: "[\"fag\",\"nigg\",\"nıgg\",\"n i g g\",\"n!gg\",\"νigg\",\"gook\",\"fuck\",\"negro\",\"niglet\",\"chink\",\"dyke\",\"kike\",\"cunt\",\"dick\",\"bitch\",\"motherfuck\",\"slut\",\"whore\",\"skank\",\"n1g\",\"nlg\",\"retard\",\"cuck\",\"pussy\",\"shit\"]",
          Queues: "{\"Brawl\":\"Brawl\",\"Duel\":\"Duel\",\"Frontline48\":\"Frontline48\",\"Frontline64\":\"Frontline64\",\"Horde\":\"Horde\",\"Invasion48\":\"Invasion48\",\"Invasion64\":\"Invasion64\",\"Teamfight\":\"Teamfight\"}",
          RewardSettings: "{\"XpBaseValue\":1000,\"XpPlaytimeFactor\":0.8,\"XpAvgScoreFactor\":0.2,\"XpTopScoreFactor\":0.3,\"GoldBaseValue\":1400,\"GoldPlaytimeFactor\":0.5,\"GoldAvgScoreFactor\":0.5,\"GoldTopScoreFactor\":0.2,\"PlacementGoldFirst\":150,\"PlacementGoldSecond\":75,\"PlacementGoldScoreFactor\":5}",
          RewardSettingsChristmas: "{\"XpBaseValue\":2000,\"XpPlaytimeFactor\":0.8,\"XpAvgScoreFactor\":0.2,\"XpTopScoreFactor\":0.3,\"GoldBaseValue\":2800,\"GoldPlaytimeFactor\":0.5,\"GoldAvgScoreFactor\":0.5,\"GoldTopScoreFactor\":0.2,\"PlacementGoldFirst\":300,\"PlacementGoldSecond\":150,\"PlacementGoldScoreFactor\":10}",
          RewardSettings_default: "{\"XpBaseValue\":1000,\"XpPlaytimeFactor\":0.8,\"XpAvgScoreFactor\":0.2,\"XpTopScoreFactor\":0.3,\"GoldBaseValue\":1400,\"GoldPlaytimeFactor\":0.5,\"GoldAvgScoreFactor\":0.5,\"GoldTopScoreFactor\":0.2,\"PlacementGoldFirst\":150,\"PlacementGoldSecond\":75,\"PlacementGoldScoreFactor\":5}",
          RewardSettings_double: "{\"XpBaseValue\":2000,\"XpPlaytimeFactor\":0.8,\"XpAvgScoreFactor\":0.2,\"XpTopScoreFactor\":0.3,\"GoldBaseValue\":2800,\"GoldPlaytimeFactor\":0.5,\"GoldAvgScoreFactor\":0.5,\"GoldTopScoreFactor\":0.2,\"PlacementGoldFirst\":300,\"PlacementGoldSecond\":150,\"PlacementGoldScoreFactor\":10}"
        }
      }
    }
    reply.send(data);
  });
}

module.exports = routes;
