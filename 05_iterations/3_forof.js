//for of 

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5,]

// for (const num of arr) {
//     console.log(num); // 1 2 3 4 5
    
// }

// const greetings="Hello World!"
// for(const greet of greetings){ // yeh sirf object pe hee nahi string etc sab pe kaam karta hai, for of
//     console.log(greet);
    /*
H
e
l
l
o
 
W
o
r
l
d
!
*/
//}

//Maps --> object that holds key value pair
const map=new Map()
map.set("a",1);
map.set("b",2);
map.set("c",3);
console.log(map.get("a")); //1
console.log(map.size); //3
map.set("d",4);
map.set("e",5);
//map.delete("b");
console.log(map.size); //4
// for (const key of map) {
//     console.log(map)
    
// } 
// Map(5) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5 }
// Map(5) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5 }
// Map(5) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5 }
// Map(5) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5 }
// Map(5) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5 }

// for(const [key,value] of map){
//     console.log(key, value)
// }
/*
a 1
b 2
c 3
d 4
e 5
*/

// for(const key of map){
//     console.log(key)
// }
/*
[ 'a', 1 ]
[ 'b', 2 ]
[ 'c', 3 ]
[ 'd', 4 ]
[ 'e', 5 ]
 */ 

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
for(const [key,value] of myObject){
    console.log(key, value) // TypeError: myObject is not iterable
}