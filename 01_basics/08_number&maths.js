//*************NUMBER***********//

const score=100
console.log(score); //100
const balance= new Number (550000)
console.log(balance); //[Number: 550000]
console.log(balance.toLocaleString()); //550,000 ( can know this by checking typeof) 
console.log(balance.toFixed(1)); //550000.0 ( precision value )
const onumber=25.65879
console.log(onumber.toFixed(3)); //25.659
console.log(onumber.toPrecision(4)); //string value will be return //25.66 (4 value focused)
const tnum=125.568
console.log(tnum.toPrecision(3)); //126 (3 value focused)
const vnum=10000000
console.log(vnum.toLocaleString()); //10,000,000 ( International Number System)
console.log(vnum.toLocaleString('en-IN'));  //1,00,00,000 (Indian Number System)

//***********************MATHS*************//

console.log(Math); //Object [Math] {}
console.log(Math.abs(-9)); //9
console.log(Math.round(9.5)); //10
console.log(Math.ceil(9.1)); //10
console.log(Math.floor(9.9)); //9
console.log(Math.min(9, 10, 24,65,78,3,1,0)); //0
console.log(Math.max(9, 10, 24,65,78,3,1,0)); //78
console.log(Math.random()); //0.0446369190488054 , val will always be between 0 to 1
console.log((Math.random()*10) +1); // this will make sure that minimum value will be 1
console.log(Math.floor((Math.random()*10)+1)); //8

//IMPORTANT FORMULA//
const min=5
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min); //11

