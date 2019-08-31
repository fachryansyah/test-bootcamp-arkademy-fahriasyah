let app = require("./app")
const path = require('path');

let AuthController = require("./app/Http/Controllers/AuthController")
let UserController = require("./app/Http/Controllers/NameController")

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/auth', AuthController.index)

app.get("/get/user", UserController.getNames)

module.exports = app
