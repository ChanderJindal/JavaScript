const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        console.log(message)

        this.emit("MessageLogged", {id : 1 , value : 10})
    }

    emitID(Name,Id){
        this.emit(Name,Id)
    }
    OnID(Name,Id,f){
        this.on(Name,Id,f())
    }
}

module.exports = Logger