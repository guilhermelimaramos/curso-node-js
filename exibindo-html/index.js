const express = require("express")
const app = express()

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/pagina-html/index.html")
})

app.get('/sobre', function(req, res) {
    res.send("Minha pagina sobre ")
})

app.get("/blog", function(req, res) {
    res.send("Bem-vindo ao meu blog")
})

app.get("/Ola/:nome/:cargo/:idade", function(req, res) {
    res.send(`<h1>Ola ${req.params.nome}, seu cargo eh ${req.params.cargo}</h1>`);
    res.send(`<h2>Sua idade: ${req.params.idade} anos</h2>`);
})

app.listen(8081, function() {

        console.log("Servidor rodando na url: https://localhost:8081")
    })
    //localhost:8081(porta)