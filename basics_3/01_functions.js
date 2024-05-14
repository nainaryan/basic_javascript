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

//************************************************************************************************************************************ */
function calculateCardPrice(val1 , val2 , ...num1){   // rest operator 
    return num1
}
console.log(calculateCardPrice(200,300,400,600));  // [ 400 , 600 ]  // 200 -> val1 , 300 -> val2 

const user = {
    username : "aryan",
    price : 400
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username: "sam",
    price : 300
})


const myNewArray = [100,200,300,400]
function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));    // 200 
