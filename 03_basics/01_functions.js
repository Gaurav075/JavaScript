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
// console.log(loginUserMessage("gaurav"))

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}

// ... -> rest operator

// console.log(calculateCartPrice(200,300,400,2000));

const user = {
    username : "gaurav",
    prices : "24567"
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));

