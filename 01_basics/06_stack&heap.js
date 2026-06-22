//**********************Stack**********************//

let myYoutubename="skydotcom"

let anothername=myYoutubename

anothername="sonderdotcom"

console.log(myYoutubename); //skydotcom
console.log(anothername); //sonderdotcom

//**************Heap****************//

let userOne={
    email:"sky@gmail.com",
    upi:"user@ibl"
}
let userTwo= userOne
userTwo.email="sonder@gmail.com"
console.log(userOne.email); //sonder@gmail.com
console.log(userTwo.email); //sonder@gmail.com