//Strings is a sequence of characters 
let str = "Uttaranchal University ";
let str2 = 'Niyati';
//Strings has in-built properties and functions 
console.log(str.length);
//Template Literals in JS 
// A way to have embedded expressions in strings 
let specialstring =`This is a template literals`;
console.log(specialstring);
console.log(typeof specialstring);
let obj = {
    item : "pen ",
    price : 10 
};
let output = `The cost of ${obj.item } is ${obj.price}`;//String Interpolation - To create strings by doing substitution of placeholders
console.log(output);
 // String Methods 
 // These are built-in functions to manipulate a string 
 // *str.toUpperCase() , *str.toLowerCase() , *str.trim() - removes backspaces
 // Methods doesnot change the original string  
 //Strings are immutable in javascript

//Practice Question
let username = prompt("Enter your full name ");
let s = `@${username}${username.length}`;
console.log(s);