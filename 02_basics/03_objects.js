// singleton
// object.create

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name : "Gaurav",
    "full name":"Gaurav Gupta",
    [mysym] : "mykey1",
    age : 21,
    location : "delhi",
    email : "gaurav@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "gauravgupta@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "gauravgupta@microsoft.com"
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());