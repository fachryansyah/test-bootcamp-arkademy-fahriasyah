require('dotenv').config()
let app = require("./app")
let routeApi = require("./web")

const port = process.env.APP_PORT

app.listen(port, () => console.log(`Backend started on port ${port}`))
