const coding = ['js','java', 'ruby', 'python', 'cpp']

coding.forEach( function (val){
    console.log(val);
})
/*
js
java
ruby
python
cpp
*/

coding.forEach( (item)=>{
    console.log(item);
}) // same output

function printMe(item){
    console.log(item);
}
coding.forEach(printMe) // same output

coding.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})
/*
js 0 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
java 1 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
ruby 2 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
python 3 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
cpp 4 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
*/

const myCoding=[
    {
        languageNmae: 'javascript',
        languageFileName: 'js'

    },
    {
        languageNmae: 'java',
        languageFileName: 'java',

    },
    {
        languageNmae: 'python',
        languageFileName: 'py'

    }
]
myCoding.forEach((item)=>{
    console.log(item.languageNmae)
})
/*
javascript
java
python
*/