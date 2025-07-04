
async function routes(fastify) {
    fastify.post("/Group/ListGroupMembers", async (request, reply) => {
        var data = {"code":200,
            "status":"OK",
            "data":{"Members":[
                {"RoleName":"Administrators",
                    "RoleId":"admins",
                    "Members":[
                        {"Key":{
                            "Id":"FE421B61DC4B8B28",
                                "Type":"title_player_account",
                                "TypeString":"title_player_account",
                                "IsTitle":false,"IsNamespace":false,
                                "IsService":false,
                                "IsMasterPlayer":false,
                                "IsTitlePlayer":true},
                            "Lineage":{
                            "master_player_account":{
                                "Id":"5601A518121A04BB",
                                "Type":"master_player_account",
                                "TypeString":"master_player_account",
                                "IsTitle":false,
                                "IsNamespace":false,
                                "IsService":false,
                                "IsMasterPlayer":true,
                                "IsTitlePlayer":false}
                        }}]
                },{
                "RoleName":"Members",
                        "RoleId":"members",
                        "Members":[]},
                    {"RoleName":"5a287172-3088-4515-a4d2-4d82cd0e2102",
                        "RoleId":"5a287172-3088-4515-a4d2-4d82cd0e2102",
                        "Members":[]}]}}
        reply.send(data);
    });
}

module.exports = routes;