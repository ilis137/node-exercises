const http = require("http")
const pug = require("pug")

const hostname = "localhost"
const port = 3000

const html = pug.renderFile("./index.pug")

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("content-type", "text/html")
    res.end(html)
})

server.listen(port, () => {
    console.log(`server is running at http://${hostname}:${port}`)
})