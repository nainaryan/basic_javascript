



// stack memoary vs heap memory ( non - prmitive )( reference )
// primitive type -> stack memory ( copy )
let myname = "aryannain"

let anothername = myname  // copy di jaayegi

anothername = " chaiaurcode "
console.log(anothername); 
console.log(myname);


// ******************* Heap memory ( non - prmitive )( reference )

let userOne = {
    email : "aryan@google.com",
    upi :"user@ybl"
}
let userTwo = userOne  // ( refernce )

userTwo.email = "abc@google.com"

console.log(userOne.email);   // abc@google.com  [ original bhi change ho jayega ] ...
console.log(userTwo.email); 
