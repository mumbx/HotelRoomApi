const express = require('express')
const app = express()
const bd = require('./bd/sqlite-db')
const roomRoutes = require('./controllers/roomController')

app.use(express.json())

roomRoutes(app, bd)

app.listen(3015, ()=>{

    console.log("Servidor rodando na porta 3015")

})