
var c=300 // still 30
let a=300
if (true){
    let a=10;
    const b=20
    var c=30 // with or without var still 30 is printing
    console.log("inner:", a); //inner: 10
}
console.log(a); // a is not defined  // 300
console.log(b);  // b is not defined
console.log(c); //30

//*** Nested scope***//
function one(){
    const username="sky"

function two(){
    const website="zwischen"
    console.log(username);
}
//console.log(website); //website is not defined, iske bd two() kabhi execute nhi hua
two(); // sky
}
one();


function addOne(num){
    return num+1
}
console.log(addOne(9)); //10 // addone ko pehle declare kr skte thhe 

const addTwo=function(num){
    return num+2
}
console.log(addTwo(9)); // 11 // addTwo pehle declare nhi hoga kyuki woh ab ek variable hai