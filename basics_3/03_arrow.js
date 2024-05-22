// this and arrow function in javascript 
const user = {
    username : "aryan",
    price : 990 ,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website`); // this. current context 
        console.log(this);/*            
                            username: 'aryan',  --- > 'sam'
                            price: 990,
                            welcomeMessage: [Function: welcomeMessage]
                          */
    }
}

// user.welcomeMessage()  // aryan , welcome to website
// user.username = "sam"
// user.welcomeMessage() // sam , welcome to website

console.log(this); // {}  empty paranthesis

function chai1()
{
    let username = "aryan"
    console.log(this.username);  // undefined 

}

 chai1()   // bahut saari values aayegi 

// const chai = function(){
//     console.log(this.username); // undefined 
// }

/**************************** ARROW FUNCTION **************************** */
const chai = ()=>{
    let username = "aryan "
     console.log(this.username); // undefined
     console.log(this); //undefined 
}
chai ()

// ()=> {} // arrow function 

const addTwo = ( num1 , num2) => {
    return num1 + num2 
}
console.log( addTwo(3,4) ); // 7 

// implicit return :- 
// const addTwo = ( num1 , num2 )=> (num1 + num2 )
// agar {} use kiya toh return keyword use karna padega 

const addTwos = ( num1 , num2 )=> ({ username: "aryan"})

const myArray = [ 2 , 5 , 6 , 7 
]
