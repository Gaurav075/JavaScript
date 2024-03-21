let score = undefined
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => undefined
// true => 1; false => 0

let isloggedin ="gaurav"
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

// 1=> true ; 0=> false
// "" => false
// "gaurav" => true

let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);