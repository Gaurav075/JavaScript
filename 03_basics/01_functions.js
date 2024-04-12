function saymyname() {
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

// saymyname()

function addTwonumbers (number1,number2) {
    console.log(number1+number2);
}
function addTwonumbers (number1,number2) {
    // let result = number1 + number2
    // console.log("gaurav");
    return number1 + number2
}


// addTwonumbers(3,4)
result = addTwonumbers(3,4)
// console.log("Result: ",result);

function loginUserMessage(username="sam") {
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("gaurav"))
console.log(loginUserMessage("gaurav"))