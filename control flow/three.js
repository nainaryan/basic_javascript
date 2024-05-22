//truthy and falsy 
const userEmail="10aryannain@gmail.com"

if( userEmail){
    console.log("GOT USER EMAIL");
}
else {
    console.log("DON'T HAVE USER EMAIL");
}

// FALSY :-- "", 0 , -0 , false , BigINT 0n , null , Nan , undefined 
// rest all truthy 

// some special truthy values :-
// [],1,"0",'false',{}," ",function(){} 

value = 0n
if(value){
    console.log("EXECUTED");
}
else console.log("NOT EXECUTED "); // NOT EXECUTED print ho jayega 