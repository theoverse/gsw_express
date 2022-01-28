let express = require("express")
let server = express()

server.use(express.urlencoded({extended: false}))

server.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky?</p>
        <input name="color" autocomplete="off">
        <button>Submit</button>
    <form>
    `)
})

server.get('/answer', function(req, res) {
    res.send("Request error!")
})

server.post('/answer', function(req, res) {
    if (req.body.color.toLowerCase() == "grey") {
        res.send(`
        <p>Correct!</p>
        <a href="/">Homepage</a>
        `)
    } else {
        res.send(`
        <p>Incorrect!</p>
        <a href="/">Homepage</a>
        `)
    }
})

server.listen(3000)