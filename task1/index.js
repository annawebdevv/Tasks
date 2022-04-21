// function dots(str){
//     return str
//   }
//   console.log(dots('... + ...'),'......')

let num1= 0;
let num2= 0;
let result = 0
let resInDots =''

let plus =()=>{
     result = num1+num2
     toNumb(result)
}
let minus =()=>{
    result = num1-num2
    toNumb(result)
}
let multiplication =()=>{
    result = num1*num2
    toNumb(result)
}
let division =()=>{
    result = num1/num2
    toNumb(result)
}

let toNumb = (res) =>{
    for (let i=1; i<= res; i++){
        resInDots += '.'
    }
    return resInDots
}

let dots = (str)=>{
    for( let i=0; i<str.length; i++){
        if (str[i] == '.'){
            num1++;
        }
        else break;
    }
   
    for( let i=str.length-1; i>0; i--){
        if (str[i] == '.'){
            num2++;
        }
        else break;
    }
    if (str.includes('+')){
        plus()
     }
     if (str.includes('-')){
        minus()
     }
     if (str.includes('*')){
        multiplication()
     }
     if (str.includes('/')){
        division()
     }
    console.log(resInDots)
}

dots('....+..')

