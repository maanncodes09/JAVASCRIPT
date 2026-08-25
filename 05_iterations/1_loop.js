// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best number") // this will print after 4, then 5 6 7 8 9 10
    }
    console.log(element);
    
}
//console.log(element); if we did this then it will be element not defined, as it is out of scope

for(let i=1; i<=10;i++){
    console.log(`outer loop value: ${i}`);
    for(let j=0; j<=10;j++){
        console.log(i + '*' + j + '=' + i*j)
    }
}
/* outer loop value: 1
1*0=0
1*1=1
1*2=2
1*3=3
1*4=4
1*5=5
1*6=6
1*7=7
1*8=8
1*9=9
1*10=10
outer loop value: 2
2*0=0
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
2*6=12
2*7=14
2*8=16
2*9=18
2*10=20
outer loop value: 3
3*0=0
3*1=3
3*2=6
3*3=9
3*4=12
3*5=15
3*6=18
3*7=21
3*8=24
3*9=27
3*10=30
outer loop value: 4
4*0=0
4*1=4
4*2=8
4*3=12
4*4=16
4*5=20
4*6=24
4*7=28
4*8=32
4*9=36
4*10=40
outer loop value: 5
5*0=0
5*1=5
5*2=10
5*3=15
5*4=20
5*5=25
5*6=30
5*7=35
5*8=40
5*9=45
5*10=50
 */

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for(let index =0; index<myArray.length;index++){
    const element = myArray[index];
    console.log(element);
}

// break and continue

for(let index =1; index<=20; index++){
    if(index==5){
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${index}`);
/*Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
*/ 
}


