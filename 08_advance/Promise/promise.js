const promiseOne=new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        //resolve()
    },1000)
})
promiseOne.then(function(){ // then ka sidha connection resolve ke sath hota hai
    console.log('promise consumed');
})

//Async task is complete , promise consumed output mei kyu nahi aaya, abhi then aur resolve ko connect nahi kia

// resolve() karne ke baad 
/*
Async task is complete
promise consumed
*/ // yeh output aayega

// promise ko variable mei store karna zaruri nahi hai

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'sky',email:"sky@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user) // { username: 'sky', email: 'sky@example.com' }
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true 
        if(!error){
            resolve({username:'skyyy',email:'skyyyy@gmail.com'})
        }
        else{
            reject('error: something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{ // const username= karenge to error aayega
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('finally the promise is either resolved or rejected')
})
/*
error: something went wrong
Async task is complete
Async Task 2
Async 2 resolved
{ username: 'sky', email: 'sky@example.com' } --> why this output
 */

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'javascript',password:'12345'})
        }
        else{
            reject('error:JS went wrong')
        }

    },1000)
})
async function consumePromiseFive(){
    // const response=await promiseFive
    // console.log(response); will throw an error
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()
// promise ek object hai toh promiseFive() aise consume nahi karenge

// async function getAllusers() {
//  const response=  await fetch('https://jsonplaceholder.typicode.come/users')
//  const data=response.json()
//  console.log(data);    
// }
// getAllusers() // users toh print nahi hue

// async function getAllusers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("e:",error);
//     }
// }
// getAllusers() // Promise { <pending> }
// why? abhi bhi values kyu nahi aayi
//console data =response.json yeh convert hone mei time lega, toh await lagayenge and after that data prints


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log((error)))