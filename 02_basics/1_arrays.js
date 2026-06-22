const myArray=[1,2,3,4,5,6,7,8,9]
const mynewArray= new Array(1,2,3,4,5)
console.log(myArray);
console.log(mynewArray);
mynewArray.push(14)
mynewArray.push(22)
mynewArray.pop(3)
console.log(mynewArray); //[ 1, 2, 3, 4, 5, 14 ]
mynewArray.unshift(9);
console.log(mynewArray); /*
[
  9, 1,  2, 3,
  4, 5, 14
] inserts at start */

console.log(myArray.includes(5)); //true
const newArr= myArray.join()
console.log(newArr); //1,2,3,4,5,6,7,8,9
console.log(typeof newArr); //string

console.log("A", myArray); 
/*
A [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
] */
const mn1=myArray.slice(1,7)
console.log(mn1); // [ 2, 3, 4, 5, 6, 7 ]
console.log("B",myArray);
/*
B [
  1, 2, 3, 4, 5,
  6, 7, 8, 9]*/

const mn2=myArray.splice(1,7)
console.log(mn2);
/*[
  2, 3, 4, 5,
  6, 7, 8
]*/
console.log("C",myArray); //C [ 1, 9 ]