const EventEmitter = require('events')
// imported a module as a class 
//it works just like a function

const emitter = new EventEmitter()

//first get a listener, a.k.a. where the code/function will be executed

emitter.addListener('Example1',function(){
    console.log("this is first call")
})

emitter.on('Example1',function(){
    console.log("AddListener and On work the same.")
})

// now the speaker comes here

emitter.emit('Example1')

emitter.addListener('Example1',function(){
    console.log("Yeah, ones after the emitter get no response, unless called again.")
})

emitter.on('Example1',function(obj){
    console.log("Yeah so, the arguments are possible too. " + obj)
    console.log("Yeah so, the arguments are possible too. " , obj)
})

emitter.emit('Example1',{name:"abc" , number :10})