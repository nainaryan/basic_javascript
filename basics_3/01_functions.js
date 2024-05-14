// function in javascript 
// code ko package mei band kardena


function sayMyName()
{
    console.log("C");
    console.log("A");
    console.log("T") ;
}
// sayMyName //--> reference of function 
// sayMyName()     // C           A           T

function addTwoNumbers(number1 , number2 )   // -- > parameters
{
    console.log(number1 + number2 ); 
}
const result1 = addTwoNumbers(5,"6")  // 56    --> arguments
addTwoNumbers(3,"a")  //3a 

console.log( " result1 : ",result1); // result1 : undefined

function add(number1 , number2)
{
    return number1 + number2
    console.log("aryan");  // unreachable quote ...
}
const result2= add(7,8)
console.log(" result2 : " , result2); //  result2 : 15 

function loginUserMessage(username)
{
    return `${username} just logged in `
}
loginUserMessage("aryan nain "); // kuch nahi hoga idhar 
console.log(loginUserMessage(" thala "));   //  thala  just logged in 

console.log(loginUserMessage());   // undefined just logged in      
// you can use if statement with strict equality condition within a function

// "", undefined , 0 , ... --> false in js 
