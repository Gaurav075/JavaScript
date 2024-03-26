const name="Gaurav"
const repocount = 50

console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String ('hitesh-hc-com')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(-8, 3)
console.log(anotherstring);

const newstringone = "     Gaurav     "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://gaurav.com/gaurav%20gupta"
console.log(url.replace('%20','-'));
console.log(url.includes('gaurav'));
console.log(gamename.split('-'));