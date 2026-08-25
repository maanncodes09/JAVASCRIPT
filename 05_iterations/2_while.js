// while (index<=10){
//     console.log(`Value of index is ${index}`)
//     index=index+2
// }
let myArray=['flash','batman','superman']

let arr=0
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`); 
    arr=arr+1
}
//Value is flash
// Value is batman
// Value is superman

let score=11 
do{
    console.log(`score is ${score}`); //score is 11, aisa isiliye hua kyuki do while loop mei kaam pehle hota, condition bd mei check hoti hai
    score++
}
while(score<=10);
/*
score is 1
score is 2
score is 3
score is 4
score is 5
score is 6
score is 7
score is 8
score is 9
score is 10
*/