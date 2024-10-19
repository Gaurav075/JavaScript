// var c=300
let a=300

if(true)
    {
        let a=20
        const b = 30
        console.log("inner:",a);
    }
console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const username = "Gaurav"

    function two()
    {
        const website = "YouTube"
        console.log(username);

    }
    // console.log(website);
    // two()
}
// one()

if(true)
    {
        const username= "Gaurav"
        if(username == "Gaurav")
            {
                const website = "YouTube"
                console.log(username+website);
            }
            // console.log(website);
    }
    // console.log(username);

    // ******************** Interesting ********************
    
    console.log(addone(5))
    function addone(num)
    {
        return num+1
    }


    // addtwo(5)  // error aa jayega isme
    // console.log(addtwo(5))
    const addtwo=function (num){

        return num+2
    }