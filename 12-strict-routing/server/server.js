const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const validator = require("express-validator")

const config = require("./config/config.json")
const routes = require("./api/routes.js")
const strictRoutes = require("./api/strict-routing")
const app = express()

app.set("port", config.development.port)
console.log(app.get("port"))
app.use("/strict", strictRoutes)
app.use(cors());
app.use(bodyParser.json({
    type: 'application/json'
}));
app.use(validator())
app.use('/api', routes);


app.listen(app.get('port'), () => {
    console.log("app listening at port" + app.get('port'))
})