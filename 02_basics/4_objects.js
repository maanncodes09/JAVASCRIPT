const gitUser= new Object() //singleton object
const gitUser1={} // non singleton object
console.log(gitUser); // {}
console.log(gitUser1); // {}
gitUser1.name="sonder"
gitUser1.id="12344321"
gitUser1.LoggedIn=true
console.log(gitUser1); // { name: 'sonder', id: '12344321', LoggedIn: true }

const anoUser={
    email:"yareuhere@gmail.com",
    fullname:{
        userFullname:{
            firstname:"sky",
            lastname:"land"
        }
    }
}
console.log(anoUser.fullname); //{ userFullname: { firstname: 'sky', lastname: 'land' } }
console.log(anoUser.fullname.userFullname.firstname); // sky

const obj1= {1:"a", 2:"b"}
const obj2= {3:"c", 4:"d"}
const obj3={obj1,obj2}
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } object ke andar object, this is not merging

const obj4= Object.assign({},obj1,obj2) // {} optional, but good to use for ensurity, target and then obj1 and obj2 will source
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5={...obj1, ...obj2} // spread operator
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(gitUser1)); // [ 'name', 'id', 'LoggedIn' ] // array data type
console.log(Object.values(gitUser1)); // [ 'sonder', '12344321', true ]

console.log(Object.entries(gitUser1)); //[ [ 'name', 'sonder' ], [ 'id', '12344321' ], [ 'LoggedIn', true ] ]
// array ke andar array, har ek key value ko array mei kar dia jata hai
console.log(gitUser1.hasOwnProperty('LoggedIn')); // true


 
