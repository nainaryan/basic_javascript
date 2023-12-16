//Dates 

let myDate = new Date()
console.log(myDate.toString() );
console.log(myDate.toDateString());
console.log(myDate.toLocaleString() );    //we can customize local string 

console.log(typeof myDate);     //object 

let myCreatedDate = new Date( 2023 , 0 , 23 )  
console.log(myCreatedDate.toDateString() );     // mon jan 23 2023


// time stamps 

let myTimeStamp = Date.now();
console.log( myTimeStamp );  // ms from 1st jan 1970 

console.log( myCreatedDate.getTime() );

let newDate = new Date() 
console.log(newDate.getMonth());

console.log(
    newDate.toLocaleString('default' , {            // ctrl + space ( shortcut )
    weekday: "long" 
    } ) 
);