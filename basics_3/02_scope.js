// GLOABAL AND LOCAL SCOPES & MINI HOISITING 
var c = 351 
let d = 100
if(true)
{
    let a = 10 
    let d = 15
    const b = 20 
    var c = 30  // chahe kuch bhi matt likho tab bhi bahar chala jayega bkl 

    console.log("innner : ", d );  //inner : 15
}
console.log(d); // 100
// console.log(a);   // ! error -- a is not defined 
// console.log(b);   // ! error -- b is not defined 
console.log(c); // bkl var --> 30 print ho jayega

/***************************************************************************************** */

// nested function 

function one(){
    const username = "aryan"

    function two(){
        const website = "youtube.com"
        console.log(username);   // chota bachha badde se ice cream maang sakta hai 
    }
    // console.log(website);  -- > !error 
    two() // aryan   ( two yahaa se execute hoga )
}

one()

if(true)
{
    const username = "aryan nain"
    if(username === "aryan nain")
    {
        const website = "->youtube"
        console.log(username + website);  //aryan nain->youtube
    }
}

/*************************** INTERSETING ********************************************* */

console.log(addone(5));  // 6 koi error nahi aayega

function addone(num)
{
    return num + 1 ;
}


// addTwo(5)   // !ERROR cannot access addTwo before intialisationn 
const addTwo = function(num){ // function or expressions 
    return num+2
}
// addTwo(5) // ye toh koi error nahi dega 