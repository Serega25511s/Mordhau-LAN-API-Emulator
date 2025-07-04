
const fs = require("fs");


async function routes(fastify) {
  fastify.post("/Client/GetUserInventory", async (request, reply) => {

    const catalogData = fs.readFileSync('Catalog.json', 'utf8');

    const catalog = JSON.parse(catalogData)
    const items = catalog["Inventory"]
    let data = {"code":200,"status":"OK","data":{
        "Inventory":items,
        "VirtualCurrency": { "GD":500000, "XP":500000 },
        "VirtualCurrencyRechargeTimes":{}}}
    reply.send(data);
  });
}

module.exports = routes;
