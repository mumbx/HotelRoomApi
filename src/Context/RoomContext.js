class RoomContext{
    constructor(bd){
        this.bd = bd
    }

    getAllRooms(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM QUARTOS', (err, rows)=>{   
                
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }                

            })
        })
        
    }

    getRoomById(id){
        return new Promise((resolve, reject)=>{
            let query = `SELECT * FROM QUARTOS WHERE ID = ${id}`
            this.bd.all(query, (err, rows)=>{   
                
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }                

            })
        })
        
    }

    createRoom(room){
        return new Promise((resolve, reject)=>{

            let query ='INSERT INTO QUARTOS(roomNumber, isOcupied, roomType) VALUES(?, ?, ?)'
            let obj = Object.values(room)
            this.bd.run(query, obj, err =>{   
                if(err){
                    reject(err)
                }else{
                    resolve({Message:"Room Created"})
                }                

            })
        })

    }

    deleteRoom(id){
        return new Promise((resolve, reject)=>{

            let query ='DELETE FROM QUARTOS WHERE ID = (?)'            
            this.bd.run(query, id, err =>{   
                if(err){
                    reject(err)
                }else{
                    resolve({Message:"Room Deleted"})
                }                

            })
        })

    }

    updateRoom(roomNumber, isOcupied, roomType, id){

        return new Promise((resolve, reject)=>{

            let params = [id]
            let query = 'UPDATE QUARTOS SET'      
            let data = []
            let changes = 0;
        
            if(roomNumber != null){      
              params.unshift(roomNumber)
              data.unshift(' roomNumber =?')
              ++changes  
            }
        
            if(isOcupied != null){
              params.unshift(isOcupied)
              data.unshift(' isOcupied =?')
              ++changes
            }
        
            if(roomType != null){
              params.unshift(roomType)
              data.unshift(' roomType =?')
              ++changes
            }
        
            query += data.join(',') + ' WHERE ID = ?' 

           this.bd.run(query, params, err => {
        
                if(err){
                reject(err)   
                }else{
                resolve({Changes:changes})            
                }
        
            }) 


        })

    }

}

module.exports = RoomContext;