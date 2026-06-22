// const name="Sky"
// const repoCount=6
// console.log(name + repoCount + "Value"); //Sky6Value
// console.log(`Hi my name is ${name} and my repository count on github is ${repoCount}`);
//Hi my name is Sky and my repository count on github is 6

let gameName= new String ('skyHigh')
console.log(gameName);  
//String {'skyHigh'}0: "s"1: "k"2: "y"3: "H"4: "i"5: "g"6: "h"length: 7[[Prototype]]: String[[PrimitiveValue]]: "skyHigh"
//string is a object hair in key value pair
// console.log(gameName[0]); //s
// console.log(gameName.__proto__); //{}--> object (empty but we can check it in console)
// console.log(gameName.length); //7
// console.log(gameName.toUpperCase()); //SKYHIGH
// console.log(gameName.charAt(5)); //g
// console.log(gameName.indexOf('h')); //6
// const newString= gameName.substring(2,5);
// console.log(newString); //yHi

// const anoString= gameName.slice(-3,2) // can also use negative
// console.log(anoString);
// const aOne= "   SKY    "
// console.log(aOne); //    SKY   
// console.log(aOne.trim()); //SKY it removes the starting and ending space

const url='https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=12'
console.log(url.replace('2y', '5y'));
console.log(url.includes('watch')); //true
const GameName= new String ('Sky-High-20')
console.log(GameName.split('-')); //[ 'Sky', 'High', '20' ]