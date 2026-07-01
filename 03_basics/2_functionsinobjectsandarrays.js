function calculateCartPrice(number1){
    return number1;
}
console.log(calculateCartPrice(200)); //200


function CalculateCartPrice(...number1){
    return number1;
} 
console.log(CalculateCartPrice(500,700,17000,5400,1400)); //[ 500, 700, 17000, 5400, 1400 ]


const user= {
    name:"Sky",
    price: 4999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name}, price is ${anyObject.price}`)

}
handleObject(user) //Username is Sky, price is 4999
// if price got prices in object then it will be undefined
handleObject({
    name:"blue",
    price: 5599
}) //Username is blue, price is 5599

