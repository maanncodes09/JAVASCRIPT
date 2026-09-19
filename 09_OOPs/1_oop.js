// Object Literal --> literally ek object banana

const user={
    username:'sky',
    loginCount:10,
    signedIn:true,

    getUserDetails: function(){
        console.log('got user details from database');
        console.log(`username:${this.username}`); // username:sky
        console.log(this)
    }
}
console.log(user.username);
console.log(user.getUserDetails); // [Function: getUserDetails]
console.log(user.getUserDetails()) 
console.log(this) // {} --> global context mei agar print karaya toh--> node environment , lekin agar browser mei karenge toh bahut kuch milega --> which is window object


/*
got user details from database
undefined
*/ 

/*
console.log(`username:${username}`); 
this line gives error --> username is not defined
why this comes? kyuki usse pata hee nahi hai ki aap kaunse username ki baat kar rahe ho, bahar se jab saman lena hota hai toh batao ki mera saman use this keyword
*/

/*
when we did this --> console.log(this) we got the output 
{
  username: 'sky',
  loginCount: 10,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
current context
*/



// CONSTRUCTOR FUNCTION
// a special member function of a class that is automatically called when an object of that class is created
// constructor new keyword--> a special type of method used to allocate memory and initialize the state of a newly created object

// const promiseOne=new Promise()
// const date=new Date()

function User(username,loginCount, isLoggedIn){
    this.username=username; // ab variable kaun h aur value kisme pass karenge how we will get to know that, so we should keep the variable name different but no we can also use this keyword
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this //?? --> why we write this and what will happen if we don't write it 
}
const userOne=User('skyyy',11,true)
const userTwo=User('zwischen',122,false)
/*
but now even if I'm only printing userone i'm getting usertwo details or values , usertwo kabhi print nhi karaya lekin usne apni sari values print kardi
and ofcourse it's a problematic thing and this is why we were using new keyword
so we will use new keyword before User and after userone 
*/
console.log(userOne)

// new keyword 
/*
1.jese hee new keyword use karenge sabse pehle ek empty object create hota hai jisse 'instance' kehte hai
2.constructor fn call hota hai new keyword ki vjh se, phr yeh sare arguemnts etc uske andar de deta hai
3.jo bhi arguements etc hamne likhe h 'this keyword' ke andar inject ho jata hai
*/

// if we do console.log(userOne.constructor) we will get the output [Function:User]

// instanceof??