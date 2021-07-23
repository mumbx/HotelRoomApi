class Room{
    constructor(roomNumber, isOcupied, roomType){
        if(typeof roomNumber != 'number'){
            throw new Error('Room number must be a number')
        }else{
            this.roomNumber = roomNumber
        }

        if(typeof isOcupied != 'number'){
            throw new Error('Room number must be a number')
        }else{
            this.isOcupied = isOcupied
        }

        if(typeof roomType != 'string' && roomType.lentgh <= 3){
            throw new Error('Room Type must have more then 2 letters')
        }else{
            this.roomType = roomType
        }

    }

}