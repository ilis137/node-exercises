const http = require("http")
const fs = require("fs")

const port = 3000;
const hostname = "localhost"

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        let filepath = "." + req.url

        if (filepath == "./") {
            filepath = __dirname + "/public/index.html"
        }

        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.statusCode = 500
                res.setHeader("content-type", "text/plain")
                res.end("error getting file")
            } else {
                res.statusCode = 200
                res.setHeader("content-type", "text/html")
                res.end(`${data}\nYou sent a <em>${req.method}</em> request\n `)
            }
        })
    } else if (req.url == "/echo" && req.method == "POST") {
        let body = []
        req.on("data", (chunk) => {
            body.push(chunk)
        }).on("end", () => {
            body = Buffer.concat(body).toString()
            res.end(body)

        })
    } else if (req.method == "PUT" && req.url == "/echo") {

        let body = [{ key: "val" }]
        req.on("data", (chunk) => {
            body.push(chunk)
        }).on("end", () => {
            body = body.toString()
            res.end(body)
        })
    } else if (req.method == "DELETE" && req.url == "/echo/key1") {
        let params = { key1: "val1" }
        let body = [
            { key1: "val1" },
            { key2: "val2" }
        ]

        req.on("data", (chunk) => {
                body = body.filter(key => key != params)

            })
            .on("end", () => {
                res.end("successfully deleted")
            })
    } else {
        res.statusCode = 404;
        res.end();
    }
})
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})