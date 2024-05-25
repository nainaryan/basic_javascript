const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map( (num)=> num+10 )
console.log(newNums);
/* OUTPUT : 
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] 
*/

// chaining
const newNums2 = myNums
        .map( (num)=> num*10)
        .map( (num)=> num+1 )
        .filter( (num)=>num>=40)
console.log(newNums2);
/* OUTPUT 
[
  41, 51,  61, 71,
  81, 91, 101
]
*/ 

