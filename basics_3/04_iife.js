// immediately invoked functino expression ( IIFE )

(function chai(){
    console.log(`DB CONNECT`);
})();
//use semicolon before using 2nd iife 
//iife in arrow function 
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('aryan nain')