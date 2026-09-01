const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (accumulator,currentValue){
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator + currentValue
// },0)
// console.log(myTotal)
/*
accumulator: 0 and currentValue: 1
accumulator: 1 and currentValue: 2
accumulator: 3 and currentValue: 3
6
*/

const myTotal=myNums.reduce((acc, currV)=> acc+currV,0)
console.log(myTotal) // 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const pricetoPay=shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(pricetoPay)

