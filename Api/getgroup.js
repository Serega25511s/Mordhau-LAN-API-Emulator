async function routes(fastify) {
  fastify.post("/Group/GetGroup", async (request, reply) => {
    let data = {"code":400,"status":"BadRequest","error":"ProfileDoesNotExist","errorCode":1298,"errorMessage":"No group profile found with the name Matchmaking_AAAAAAAAAAAAAAAA"}
    reply.send(data);
  });
}

module.exports = routes;
