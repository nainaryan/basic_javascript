const accountId = 12234
let accountEmail = "aryan@gmail.com"
var accountPaasword = 1234
accountCity = "Baghpat"

// accountId = 12 // not allowed ( we cannot modify the value of a constant )

accountPaasword = 1256 // allowed 
// var is not prefered because of issue in block scope and functional scope 

console.table( [ accountId , accountEmail , accountPaasword , accountCity ])