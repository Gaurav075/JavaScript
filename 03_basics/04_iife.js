// Immeadiately Ivoked Function Expressions

(function chai(){
    // named iife
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected TWO ${name}`);
} ) ("Gaurav")