const user={
    name:"gogo",
    price:479,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage() //gogo, welcome to website
// /*
// gogo, welcome to website
// {
//   name: 'gogo',
//   price: 479,
//   welcomeMessage: [Function: welcomeMessage]
// }
// */ 
// user.name="gigi"
// user.welcomeMessage() //gigi, welcome to website
// /*
// gigi, welcome to website
// {
//   name: 'gigi',
//   price: 479,
//   welcomeMessage: [Function: welcomeMessage]
// }
// */
//console.log(this); //{}, node environment ke andar hai hum, toh this ek empty object ko refer karega

// function coke(){
//     console.log(this)
// }
// coke() // printing lot's of global thingyy
// function dietcoke(){
//     username:"skyhigh"
//     console.log(this.username)  // username: "skyhigh" is not creating a variable or a property.


// }
// dietcoke() //undefined

const arowFun= ()=>{
    let username="mnijukook"
    console.log(this);
}
arowFun(); //{}

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//const addTwo=(num1,num2)=>  num1+num2 // implicit return
const addTwo=(num1,num2)=>  ({username:"mnijk"}) //{ username: 'mnijk' } // object ko return krne ke liye parantheses mei wrap krna h

console.log(addTwo(5,7)); //12