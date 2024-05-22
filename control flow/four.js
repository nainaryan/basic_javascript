
// false==0 -> true
// false=='' -> true
// ''==0 -> true

// Nullish COALESCING OPERATOR ( ?? )

let val1 
val1 = 5??10 // 5
val1 = null ?? 10  // 10 
val1 = null ?? undefined // undefined
val1 = undefined ?? null  // null 
console.log(val1);

// Terninary operator  ( condition ) ? ():()

const iceTeaPrice = 100 

iceTeaPrice<=80 ? ( console.log("less than or equals to 80") ): ( console.log("more than 80 ") ) 

// more than 80 is printed 