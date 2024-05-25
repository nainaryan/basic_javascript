const myNums = [1,2,3 ]

const myTotal = myNums.reduce( function (acc , currval ){
    console.log(`accumulator= ${acc} and currval :${currval}`);
    return acc+currval 
},5 )   // 5 is intial value in accumulator :) bus ek hi baar dekhega intial value ko 

console.log(myTotal);  // 11 

/* output 
accumulator= 5 and currval :1
accumulator= 6 and currval :2
accumulator= 8 and currval :3
*/

const myTotal2 = myNums.reduce ( (acc,curr)=> (acc+curr) ,0 )
console.log(myTotal2);   // 6 

const shoppingCart = [
    {
    itemName:"js course",
    price: 2999 },
    {
        itemName:"py course",
        price: 1499
    },
    {
        itemName:"dsa course",
        price: 3999
    }
]
// using arrow function 
const priceToPay = shoppingCart.reduce( (acc , item )=> acc + item.price ,0)
console.log(priceToPay);  // 8497
