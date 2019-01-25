const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const validator = require("express-validator")


const routes = require("./api/routes.js")

const app = express()
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({
    type: 'application/json'
}));
app.use(validator())
app.use('/api', routes);


app.listen(port, () => {
    console.log("app listening at port" + port)
})