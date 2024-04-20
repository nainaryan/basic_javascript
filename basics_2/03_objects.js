// objects
// 2 ways to declare ( singleton )
// literals ki tarah declare karne par singleton nahi bantaa hai 
// constructor se declare karne par banta hau 

// symbol
const mySym = Symbol("key1")
// object literals 
const jsUser = {
    name : "aryan",    // by default -- > "name":"aryan"
    age : 18 ,
    location : "delhi" ,
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Tuesday" ] ,
    [mySym] : "mykey1" ,  // symbol ka tareeka 

    "fullName": "aryan nain " // isko dot se access nahi kar sakte ...
    
}
console.log( jsUser.name);   // use dot(.) too access objects 
console.log(jsUser[ "location" ]);
console.log(jsUser["fullName"]);

// symbol ke liye bhi square bracket hi use karo
jsUser.age = 20
//Object.freeze(jsUser) // iske baad koi changes propagate nahi honge

jsUser.greetings = function(){
    console.log(`hello js user , ${this.name}`);
}
//console.log(jsUser.greetings);   // undefined
console.log(jsUser.greetings());