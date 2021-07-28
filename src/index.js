const express = require('express')
const app = express()
const bd = require('./bd/sqlite-db')
const roomRoutes = require('./controllers/roomController')
const cors = require('cors')
const porta = 3015

app.use(cors())

app.use(express.json())

roomRoutes(app, bd)

app.listen(process.env.PORT||porta, ()=>{

    console.log(`Servidor rodando na porta ${process.env.PORT||porta}`)

})