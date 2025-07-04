const path = require('path')
const fs = require("fs");
const {gen} = require("fastify-sslgen");
const fastify = require('fastify')({logger:true})


module.exports.Init = function (callback) {
    fastify.register(require("@fastify/cors"), {
        origin: "*",
        methods: ["GET"]
    });

    fs.readdirSync("./Api").forEach(file => {
        fastify.register(require("./Api/" + file));
    })

    fastify.listen(3333, "0.0.0.0", () => {
        callback();
    });


}