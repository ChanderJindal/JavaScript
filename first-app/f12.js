const Logger = require('./f11.js')

const logger = new Logger()

logger.log("MY Message")

logger.OnID("Example1",1,function(){
    console.log("qwerty")
})

logger.emitID("Example1",1)
