async function routes(fastify) {
  fastify.post("/Group/ListMembership", async (request, reply) => {
    let data = {"code":200,"status":"OK","data":{"Groups":[{"GroupName":"Matchmaking_AAAAAAAAAAAAAAAA","Group":{"Id":"BBBBBBBBBBBBBBBB","Type":"group","TypeString":"group","IsTitle":false,"IsNamespace":false,"IsService":false,"IsMasterPlayer":false,"IsTitlePlayer":false},"ProfileVersion":0,"Roles":[{"RoleName":"Administrators","RoleId":"admins"}]}]}}
    reply.send(data);
  });
}

module.exports = routes;
