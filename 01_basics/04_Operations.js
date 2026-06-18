let val=10
let negval=-val
console.log(negval);
let str1="Hello,"
let str2=" World!"
let str3=str1+str2
console.log(str3);
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32 
console.log(+true);
console.log(+"");
//************comparison******************

console.log(null>0); //false
console.log(null==0); //false this didn't
console.log(null>=0); //true
// >,<,>=,<= works differently they change null into 0 then compare
console.log("02">1); //true
console.log(undefined==0); //false
console.log(undefined>=0); //false
console.log(undefined<=0); //false

/* In JS equality check and comparison works differently
'===' it is a strict check, it not only check value , it also checks data types*/
console.log("2"==2); // true, because it only compares
console.log("2"===2); //false, it checks datatype also
