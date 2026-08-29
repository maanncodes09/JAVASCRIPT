const myObj={
    js: 'Javascript',
    cpp: 'C++',
    rb: "ruby",
    mac:"MacOS"
}
for(const key in myObj){
    //console.log(key) // js cpp rb mac
    console.log(myObj[key])
    /*
    Javascript
    C++
    ruby
    MacOS
    */
}

const arr=['tom','zendaya','blake','kaili']
for(const key in arr){
    //console.log(key) // 0 1 2 3
    console.log(arr[key])
    /*
    tom
    zendaya
    blake
    kaili
    */
}

// Maps are not iteratable in for-in