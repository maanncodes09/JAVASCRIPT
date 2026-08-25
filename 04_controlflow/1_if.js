//if 
// if(true){
//     //if condition is true then it will execute the code
// }
// if(false){
//     //if condition is false then it will not execute the code
// }

// >, <, =>, <=, ==, !=, ===, !==


// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power:${power}`) //User power:fly
// }
// console.log(`User power:${power}`) //power is not defined
//it happens because of scope

// const balance=100000
// if(balance>50000) console.log("sufficient balance") //sufficient balance

//why there is no scope? there is a scope it's just implicit scope where we assume we have brackets
// if(balance>50000) console.log("sufficient balance"), console.log("i have so much money")
// like this we can write multiple lines, but this is immature code

const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard){
    console.log("allow to shop") //allow to shop
}
const loggedInfromGoogle=true
const loggedInfromEmail=false
if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User logged in") //User logged in
}