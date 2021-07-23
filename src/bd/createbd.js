const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const caminho = path.resolve(__dirname, '../', '../', 'database.db')
const bd = new sqlite3.Database(caminho);

const QUARTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "QUARTOS" (
    "Id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "RoomNumber" int,
    "IsOcupied" int,
    "RoomType" varchar(15)
  );`;

function creatTableQuartos(query){
    bd.run(query, (err)=>{
        if(err){
            console.log(err)
        }
    })
}

creatTableQuartos(QUARTOS_SCHEMA)


