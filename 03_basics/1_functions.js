function myName(){
    console.log("Sky")
}
//myName // reference
myName(); // execution  //Sky

function addTwo(number1, number2){ //parameters
    console.log(number1+number2);
}
addTwo(5,5); //10 //arguements

function addTwo(number1, number2){ 
    let result=number1+number2;
    return result;
    
}
const result=addTwo(5,5); 
console.log(result); //10

function loginUser(username){
    if(username===undefined){
        console.log("please enter username")
    }
    return `${username} has logged in`;
}
console.log(loginUser("skysohigh")); //skysohigh has logged in
console.log(loginUser("")); //  has logged in
console.log(loginUser()); //undefined has logged in ***interview***
// we can give a default value username ="foil", even if we don't pass the value , undefined will not come now



