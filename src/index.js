const express = require('express')
const app = express()
const bd = require('./infra/sqlite-db')
const UserRoutes = require('./controllers/users-controller')
const cors = require('cors')

app.use(express())

app.use(cors())



app.listen(3030, ()=>{

    console.log("Servidor rodando na porta")

})