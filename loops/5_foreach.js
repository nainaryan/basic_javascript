const coding = ["js", "ruby","java","python","cpp"]

function printMe(item){
    console.log(item);
}

//   coding.forEach( function(item){
//       console.log(item);
//     })

coding.forEach((val)=>{
    console.log(val);
})

// coding.forEach(printMe)

/* output 
js
ruby
java
python
cpp
*/

/**************************************************************************************** */
coding.forEach( ( item,index,arr)=>{
    console.log(item,index,arr);
})
/* OUTPUT 
s 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/
