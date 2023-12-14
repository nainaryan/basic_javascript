console.log(2>3 );
// comparison of different datatypes

console.log("2" > 1 );
console.log("02" > 1 );

// try to avoid following comparisons btw ...
console.log(null > 0 );     // false 
console.log(null == 0 );    // false 
console.log(null >= 0 );    // true

// equality check ( == ) and comparisons ( > , < , >= , <= ) works differently 
// comparisons convert null to a number treating it as 0 

// === ( strict check )  datatypes ko bhi check karega 
console.log("2"=== 2 );
