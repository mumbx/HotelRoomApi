const e = require("express")

class RoomContext{
    constructor(bd){
        this.bd = bd
    }

    getAllRooms(){
        this.bd.all("select * from quartos", (err, rows)=>{
            return new Promise((reject, resolve)=>{

                if(err){
                    reject({error:err.message})
                }else{
                    resolve({results:rows})
                }                

            })


        })
    }    

}