// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

let typeOfCurrent=(x)=>{
    if (typeof(x) === 'string' && x.match(/[a-zA-Z]/)){
        return true
    }
    else {return false}
}
let isBothSrting = (x, y) =>{
    if (typeOfCurrent(x) ===true  && typeOfCurrent(y) === true){
        return true
    }
    else {return false}
}
let isUpperCase = (x) =>{
    if (x == x.toUpperCase()){
        return true
    }
    else {return false}
}
let isBothCase = (x,y)=>{
    if (isUpperCase(x) === isUpperCase(y) ){
        return true
    }
    else {return false}
}
let fn =(a, b)=>{
    if (isBothSrting(a,b) != true){return console.log('-1')}
    if(isBothSrting(a,b)===true && isBothCase(a,b)===true )
    {return console.log('1')}
    
    else{return console.log('0')}
}


