const Room = require('../models/roomModel')
const RoomContext = require('../Context/RoomContext')

 module.exports = (app, bd)=>{

   let roomContext = new RoomContext(bd)

   app.get('/room', async (req, res)=>{ 

     try{
       let rooms = await roomContext.getAllRooms()       
       res.json({result:rooms})
     }
     catch(e){
       res.json({error:e.message})
     }      

   })
   
   app.get('/room/:id', async (req, res)=>{ 

    try{
      let room = await roomContext.getRoomById(req.params.id)      
      res.json({result:room})
    }
    catch(e){
      res.json({error:e.message})
    }      

  })
   
   app.post('/room/create', async (req, res)=>{ 

    try{
      const {roomNumber, isOcupied, roomType} = req.body      
      const room = new Room(roomNumber, isOcupied, roomType)
      let roomCreated = await roomContext.createRoom(room)
      res.json(roomCreated)
    }
    catch(e){
      res.json({error:e.message})
    }      

  })

  app.delete('/room/delete/:id', async (req, res)=>{ 

    try{
      let id = req.params.id
      let isDeleted = await roomContext.deleteRoom(id)
      res.json(isDeleted)
    }
    catch(e){
      res.json({error:e.message})
    }      

  })

  app.put('/room/update/:id', async (req, res)=>{ 

    try{
      let id = req.params.id
      let {roomNumber, isOcupied, roomType} = req.body
      let isUpdated = await roomContext.updateRoom(roomNumber, isOcupied, roomType, id)
      res.json(isUpdated)
    }
    catch(e){
      res.json({error:e.message})
    }      

  })
   
 }