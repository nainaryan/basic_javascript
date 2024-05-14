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


