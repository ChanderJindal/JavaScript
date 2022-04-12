//Module Wrapper Function 
(function (exports, require, module, __filename, __dirname) {
    var a = 1;
    var b = 2;
    function log(a , b){
        console.log(a+b);
    }
    log(a,b);
    module.exports = log;
    //Possible
  //  module.exports.log = log;
  //  exports.log = log;

})

//exports, require, module, __filename, __dirname
//Export possible, The Require , The Module to be exported , FileName , Path to File 