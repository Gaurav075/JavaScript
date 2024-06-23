// Dates

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate);

// let mycreateddate = new Date(2023,0,23,5,3)
// let mycreateddate = new Date("2023-01-14")
let mycreateddate = new Date("01-14-2024")
console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(mycreateddate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})