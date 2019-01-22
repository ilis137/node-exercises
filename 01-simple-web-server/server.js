const http = require('http')
const fs = require('fs')

const hostname = "localhost"
const port = 3000

const server = http.createServer((req, res) => {
    let filePath = req.url
    if (filePath == "/") {
        filePath = __dirname + "/public/index.html"
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status = 500
            res.setHeader("content-type", "text/plain")
            res.end("Error getting file")
        } else {
            res.status = 200
            res.setHeader("content-type", "text/html")
            res.end(data)
        }
    })
})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})