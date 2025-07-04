const fs = require('fs');

async function routes(fastify) {
  fastify.post("/Client/GetCatalogItems", async (request, reply) => {
    const catalogData = fs.readFileSync('Catalog.json', 'utf8');
    const catalog = JSON.parse(catalogData)
    const items = catalog["Inventory"]

    var data = {
      code: 200,
      status: "OK",
      data: {Catalog: items}
    }
    reply.send(data);
  });
}

module.exports = routes;
