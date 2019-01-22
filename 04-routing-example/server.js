const express = require("express")
const bodyparser = require("body-parser")

const routes = require("./api/routes")

const app = express()
const PORT = process.env.port || 3000

app.use(bodyparser.json({
    type: 'application/json'
}));
app.use("/api", routes)
app.get("/", (req, res) => {

})
app.listen(PORT, () => {
    console.log(`listening at port${PORT}`)
})