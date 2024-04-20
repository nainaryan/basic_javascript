// singelton abject and nesting 
const tinderUser = new Object();
tinderUser.id = 1
tinderUser.name = "thala"
tinderUser.isLoggedin = true
console.log(tinderUser)  //  { id: 1, name: 'thala', isLoggedin: true }

const regularUser = {
    email : "aryan@gmail.com",
    fullname:{
            userfullname : {
                        firstname: "aryan",
                        lastname : "nain"
            }
    }
}
console.log(regularUser.fullname.userfullname);  //   { firstname: 'aryan', lastname: 'nain' }

const obj1 = { 1:'a' , 2:'b'}
const obj2 = { 3:'c' }
//concatenation methods

const newObj = { obj1 , obj2 }
console.log(newObj);    //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c' } }

const obj3 = Object.assign( {} , obj1 , obj2 )   
console.log(obj3);     //   { '1': 'a', '2': 'b', '3': 'c' }

const obj4 = {...obj1 , ...obj2 }
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c' }

const users = [
        {
            id : 0,
            name : "aryan"
        },
        {
            id :1 ,
            name : "thala"
        },
        {
            id : 2 ,
            name : "thalason Ashutosh "
        }
]
console.log(users[2].name);     // thalason Ashutosh 

console.log(Object.keys(tinderUser));     //    [ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser));     //  [ 1, 'thala', true ]

console.log(Object.entries(tinderUser));        //  [ [ 'id', 1 ], [ 'name', 'thala' ], [ 'isLoggedin', true ] ]
