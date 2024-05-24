// forin loop is used for js objects  
const myObject= {
    js:"javascript",
    cpp:"C++",
    py:"python",
    rb:"ruby",
    swift:"swift by apple"
}

for( const key in myObject){
    console.log(key);
}
/* OUTPUT 
js
cpp
py
rb
swift
*/ 
for( const k in myObject){
    console.log(`${k} stands for ${myObject[k]}`);
}

/* output 
js stands for javascript
cpp stands for C++
py stands for python
rb stands for ruby
swift stands for swift by apple
*/