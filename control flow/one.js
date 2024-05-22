// conditional state ment
/*  SYNTAX :- 
if( condition ){
    ...
}
*/
let paise = 100;
if (paise < 80) {
  console.log("less than 80 ");
} else if (paise < 120) {
  console.log("less than 120");
} else {
  console.log("greater or equals to 120");
}

const score = 200 ;
if( score > 150 ){
    const power = "fly";
    console.log(`user power : ${power}`);
}
//  console.log(`user power :${power}`);   //ERROR!!!
