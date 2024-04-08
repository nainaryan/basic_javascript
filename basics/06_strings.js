const name = "aryan "
const repocount = 50 
// console.log( name + repocount + "value ");   // [ not recommended for concat. ]


// STRING INTERPOLATION ---> backticks(` ${}` ) // modern way 

console.log(`Hello my name is ${name}and my repo count is ${repocount} `);   

const gameName = new String ('aryan-nain')    // first alphabet capital 

console.log(gameName[0]);       //a 
console.log(gameName.length);       //10
console.log(gameName.toUpperCase()); // ARYANNAIN
console.log(gameName.charAt('2')); // y    indexOf('y') => 2

//*******************************substring() **************************************************************
const newString = gameName.substring(0,4);  // do not obey negative values 
console.log(newString); //arya [ last wala index include nahi hua ]

//*****************************slice() *********************
let str3 = "0abcdefghijk"
const anotherstring = str3.slice( -12 , 4 )   // you can use negative vlaues 
console.log(anotherstring); // arya 

//*******************************trim()********************************************************************
const newString1 = "   aryan   "
console.log(newString1);            //   aryan   .
console.log(newString1.trim());     //aryan. // it will remove unnecesaary space 

//**************** *****************replace() *************************************************************

const url = "https://aryan.com/aryan%20nain"
console.log(url.replace('%20' , '-'));    // https://aryan.com/aryan-nain

console.log(url.includes('aryan'))        // true , it will return whether a string contain this word or not


//**********************************split()*****************************************************************
const newString2 = "aryan-nain-21-modeltown"
const newarray = newString2.split('-')
console.log(newarray);  //[ 'aryan', 'nain', '21', 'modeltown' ] 