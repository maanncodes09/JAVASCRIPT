const marvel_heroes=["ironman","thor","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // [ 'ironman', 'thor', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// arrays koe bhi data le lete h so they take another array also as a data
//1, 2 , 3 , 4 element in this array 
// we will get same output even after doing concatination

const allheroes= marvel_heroes.concat(dc_heroes)
console.log(allheroes); // [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread Operator
const allnheroes=[...marvel_heroes, ...dc_heroes]
console.log(allnheroes); // [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

const anoArray=[1,2,3,4,5, [4,5,6,7], 7, [8,9,6,1], [1,12,36, [47,87]]]
const realanoArray=anoArray.flat(2) // ??
console.log(realanoArray);

console.log(Array.isArray("zwischen")); //false
console.log(Array.from("zwischen")); 
/*
[
  'z', 'w', 'i',
  's', 'c', 'h',
  'e', 'n'
]*/
console.log(Array.from({name: "zwischen"}));  //[] an empty array, why? --> interview

let score1=100
let score2=200
let score3=300
let score4=400
let score5=500
console.log(Array.of(score1,score2,score3,score4,score5)); // [ 100, 200, 300, 400, 500 ]