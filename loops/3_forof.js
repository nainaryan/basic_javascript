const arr =[1,2,3,4,5,6]
for ( const i of arr ){
    console.log(i*10);
}
/*output 
10
20
30
40
50
60
*/


// MAPS 
const mp = new Map()
mp.set("IN","india")
mp.set("usa","united states of america")
mp.set("pak","pakistan")

console.log(mp);
/* output 
Map(3) {
  'IN' => 'india',
  'usa' => 'united states of america',
  'pak' => 'pakistan'
}
*/
for(const k of mp ){
    console.log(k);
}
/* output 
 'IN', 'india' ]
[ 'usa', 'united states of america' ]
[ 'pak', 'pakistan' ]
*/

for(const [key,value] of mp ){
    console.log(key+"  as  "+value);
}
/* output 
IN  as  india
usa  as  united states of america
pak  as  pakistan
*/