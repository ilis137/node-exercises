const express = require("express")
const ejs = require("ejs")



const app = express()
const port = 3000

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", { user: 'Great User', title: 'Homepage' })
})
app.listen(port, () => {
    console.log(`server is listening at ${port}`)
})