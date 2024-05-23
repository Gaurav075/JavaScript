const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

const shopcart = [
    {
    Itemname:"js",
    price:299
    },
    {
    Itemname:"web dev",
    price:2999
    },
    {
    Itemname:"app development",
    price:899
    },
    {
    Itemname:"DSA",
    price:1299
    }
]

const price = shopcart.reduce((acc,item)=>acc+item.price,0)
console.log(price);