async function routes(fastify) {
    fastify.post("/Group/CreateGroup", async (request, reply) => {
        let data = {"code":200,"status":"OK","data":{"GroupName":"Matchmaking_AAAAAAAAAAAAAAAA","Group":{"Id":"BBBBBBBBBBBBBBBB","Type":"group","TypeString":"group","IsTitle":false,"IsNamespace":false,"IsService":false,"IsMasterPlayer":false,"IsTitlePlayer":false},"MemberRoleId":"members","AdminRoleId":"admins","Roles":{"admins":"Administrators","members":"Members"},"Created":"2022-04-21T10:57:40.821Z","ProfileVersion":0}}
        return reply.send(data);
    });
}

module.exports = routes;