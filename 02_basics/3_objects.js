// object by constructor
//Object.create

//object by literals
const mySym=Symbol("Key1")
const JsUser={
    name:"Sky",
    age:20,
    "sur name":"kim", //now there is now way we can access this by using .(dot) in it , only if it is written like this surname
    [mySym]:"myKey", // this is string data type now, not symbol data type, [] -> correct syntax
    location:"Pune",
    email:"sky@hotmail.com",
    loggedIn: false,
    lastLogindays:["monday","sunday"]
}
console.log(JsUser.email); //sky@hotmail.com

//console.log(JsUser[email]); //error will occur, because it cannot track it whether it number or string

console.log(JsUser["email"]); //sky@hotmail.com

console.log(JsUser["sur name"]);

console.log(JsUser[mySym]); //myKey
console.log(typeof JsUser[mySym]); // string, why? because the value is string
console.log(typeof mySym); //symbol

//value changing
JsUser.email = "skyyy@gmail.com"
console.log(JsUser.email); //skyyy@gmail.com

Object.freeze(JsUser) // this will freeze, and hence no more values we can change
JsUser.email = "skyy5y@gmail.com"
console.log(JsUser.email); //skyyy@gmail.com

console.log(JsUser);
/*
{
  name: 'Sky',
  age: 20,
  'sur name': 'kim',
  location: 'Pune',
  email: 'skyyy@gmail.com',
  loggedIn: false,
  lastLogindays: [ 'monday', 'sunday' ],
  Symbol(Key1): 'myKey'
}
*/ 

JsUser.greeting= function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Hello Js User //undefined ( because we didn't give it return statement ) 

JsUser.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`);
    return "done";
}
console.log(JsUser.greeting2()); //Hello Js User,Sky // return -> done



