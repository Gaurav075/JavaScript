const accountId = 144553
let accountEmail = "officialgauravgupta3@gmail.com"
var accountpassword = "12345"
accountcity = "Jaipur"
let accountstate

// accountId=2 not allowed

accountEmail="gaurav@g.com"
accountpassword = "212121"
accountcity = "bengluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountpassword,accountId,accountcity,accountstate])