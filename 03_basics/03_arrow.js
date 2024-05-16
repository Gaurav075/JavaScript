const user = {
    username : "Gaurav",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username},Welcome to website`);
        // console.log(this);
    }
}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()
console.log(this);

// function coffee(){
//     let username = "Gaurav"
//     console.log(this);
// }
// coffee()

// const coffee = function() {
//     let username = "Gaurav"
//     console.log(this.username);
// }

// coffee()
// const coffee = ()=> {
//     let username = "Gaurav"
//     console.log(this);
// }

// coffee()

// const addtwo = (num1,num2)=> {
//     return num1+num2
// }
// console.log(addtwo(2,5));


// const addtwo = (num1,num2)=>  num1+num2

// const addtwo = (num1,num2)=>  (num1+num2)

const addtwo = (num1,num2)=>  ({username: "Gaurav"})
console.log(addtwo(2,5));

// const array = [2,5,3,7,8]
// array.forEach()