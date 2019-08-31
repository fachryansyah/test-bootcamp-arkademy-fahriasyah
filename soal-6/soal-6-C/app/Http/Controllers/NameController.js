let NameModel = require("../../Model/NameModel")

const UserController = {
    getNames: async function(req, res) {
        const names = await NameModel.query().joinEager({
            work: true,
            salary: true
        }).orderBy("id", "desc")
        res.json({
            "message" : "OKE!",
            "status" : 200,
            "data" : names
        })
    },
    insertNames: function(req, res){
        
    }
}

module.exports = UserController
