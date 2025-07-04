
async function routes(fastify) {
  fastify.post("/Client/GetTime", async (request, reply) => {
    let now = new Date();
    return reply.send({
      code:200,
      status:"OK",
      data:{Time:now}
    });
  });
}

module.exports = routes;
