const marvelHeroes = ["thor" , "ironMan" , "hulk" ]
const dcHeroes = ["superman","flash", "batman"]

marvelHeroes.push(dcHeroes)
console.log(marvelHeroes);  // [ 'thor', 'ironMan', 'hulk', [ 'superman', 'flash', 'batman' ] ] 
// array koi bhi data as an element le leta hai 

console.log(marvelHeroes[3][2]);  //batman
marvelHeroes.pop()
const newArr= marvelHeroes.concat(dcHeroes)  // it will merge in a new array 
console.log(marvelHeroes); // [ 'thor', 'ironMan', 'hulk' ]
console.log(newArr); // [ 'thor', 'ironMan', 'hulk', 'superman', 'flash', 'batman' ]

//spread ---> kaanch ka glass ( free fall )
allHeroes = [...dcHeroes , ...marvelHeroes ]
console.log( allHeroes); // [ 'superman', 'flash', 'batman', 'thor', 'ironMan', 'hulk' ]

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]] 
const realAnotherArray = anotherArray.flat(Infinity)  // depth deni hoti hai 
console.log(realAnotherArray); // [1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("aryan"));  // false

console.log(Array.from("aryan"));  //[ 'a', 'r', 'y', 'a', 'n' ]
console.log(Array.from({name: "aryan"}));  //[]  agar ye array nahi banaa pata toh empty array return kar dega 

let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1,score2,score3));  // [100,200,300]