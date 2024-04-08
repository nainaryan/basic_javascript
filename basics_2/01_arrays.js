const Arr = [0,1,2,3,4,"aryan",true ]
console.log(Arr[0]);
console.log(Arr);

const myArr = [0,1,2,3,4,5 ]
myArr.push(6)
console.log(myArr);  // [0,1,2,3,4,5]
myArr.unshift(-1);  
console.log(myArr); // [-1,0,1,2,3,4,5,6]
myArr.shift()
console.log(myArr); // [0,1,2,3,4,5,6]

console.log(myArr.includes(3));  // true 
console.log(myArr.indexOf(7));  //-1

const newArr = myArr.join()   // newArr is a string 
console.log(newArr);  // new = 0,1,2,3,4,5,6

// slice v splice 
const myArr2 =myArr.slice(1,3)   // range will not be included in slice does not manipulates the original array .
console.log(myArr2); //1,2
console.log("A " , myArr);   // A [0,1,2,3,4,5,6]

const myArr3 = myArr.splice(1,3)  // manipulates the original array and range included 
console.log(myArr3); //1,2,3
console.log("B " , myArr);  // B [1,4,5,6] 
