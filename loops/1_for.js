// for loops basics
let myArray = ["flash","batman","thor"]
for( let i = 0 ; i <=myArray.length ; i++ ){
    console.log(myArray[i]);
}
/* output 
flash
batman
thor
undefined   // in case of outer bound .
*/

for( let i = 0 ; i < 20 ; i++ ){
    if( i== 5 ){
        console.log("5 toh nahi kar ra mei print");
        continue
    }
    else if( i== 7 ){
        console.log("THALA found");
        break;
    }
    console.log(i);
}
/* OUTPUT 
0
1
2
3
4
5 toh nahi kar ra mei print
6
THALA found
*/