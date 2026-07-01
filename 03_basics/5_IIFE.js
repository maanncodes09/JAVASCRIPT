/* IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSIONS 
SYNTAX ()() , PEHLA FUNCTION KI DEFINITION, DUSRA EXECUTION
*/

// (function isConnect(){
//     console.log("DB Connected")
// })() // DB Connected
// (function andConnect(){
//     console.log("yes connected")
// })() // throws error
/*
it f=doesn't knwo where to stop context so end it by ; then next will run*/
(function isConnect(){
    // named IIFE == interview
    console.log("DB Connected")
})(); // DB Connected

(function andConnect(){
    console.log("yes connected")
})();  // yes connected

((name)=>{
    //unnamed IIFE
    console.log(`yes it works ${name}`)
})('Sky') //yes it works Sky