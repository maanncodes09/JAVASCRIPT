const userEmail="m@ansi.codes"
if(userEmail){
     console.log("got user email"); //got user email
}
else{
    console.log("don't have user email");
}
// agar empty string h toh false maan liya, agar empty array hai toh true maan liya

//falsy values
//false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy values
// "0", 'false' (kyuki string hai), " " ( space ke sath), [], {}, function(){}

// false == 0 // true
// false == "" // true
// 0 == "" //true

//Nullish Coalescing Operator (??): null undefined
let val1;
val1= 5 ?? 10
val2= null ?? 10
val3= undefined ?? 15
console.log(val1, val2) // 5 10
console.log(val3) // 15

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")
// more than 80 ( as the condition is false)
