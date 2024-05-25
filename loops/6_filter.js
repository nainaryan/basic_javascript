// const coding = ["js", "ruby","java","python","cpp"]

// const values=coding.forEach( (item)=>{
//     return item 
// })
// console.log(values); // undefined  for each values return nahi karta 

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums1 = myNums.filter( (num)=> num>4 )
console.log(newNums1);
// output : [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (num)=> {
    return num>4
} )                   // {} : return use karn hoga 
console.log(newNums2);   
// output : [ 5, 6, 7, 8, 9, 10 ]

const newNums=[]
myNums.forEach( (num)=>{
    if( num>4){
        newNums.push(num)
    }
})
console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]

/************************************************************************************** */
// array of objects 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userBooks = books.filter( (bk) => ( bk.genre == 'History' ))  // implicit return 
console.log(userBooks);
/* OUTPUT 
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]*/


