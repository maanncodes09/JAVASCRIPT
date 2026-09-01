const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.map((num)=>num+10) // [11,12,13,14,15,16,17,18..]

const newNums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)  // [41,51,61,71...]
// pehla wale map pe jo method laga , phr dusra map --> chaining pehle 1*10 hoga uske bd 10+1 hoga nahee 1+1 , kyuki pehle map ka method lag gya
console.log(newNums);


