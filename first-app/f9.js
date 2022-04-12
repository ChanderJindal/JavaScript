const fs = require('fs')
// fs -> file system
/*
console.log(fs.Dir)
console.log(fs.Dirent)
console.log(fs.ReadStream)
console.log(fs.Stats)
console.log(fs.WriteStream)
*/
const Sfiles = fs.readdirSync('./')
console.log(Sfiles)
//Synchronous a.k.a. Serial / Blocking Code

const Afiles = fs.readdir('./',function(err,Afiles){
    if(err){
        console.log("Hello Error!")
        console.log("Error!",err)
    }else{
        console.log("Hello File",Afiles)
    }
})

