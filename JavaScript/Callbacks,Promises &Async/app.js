//Synchronous programming
console.log("one");
console.log("two");
console.log("three");
//Asynchronous programming
function hello() {
    console.log("hello");
}
setTimeout(hello ,2000) // timeout ; 2s = 2000 
setTimeout( () => {
    console.log("Niyati Sharma");
} ,4000);
function sum (a,b){
    console.log(a+b);
}
function calculator( a , b , sumcallback){
     sumcallback(a,b);
}
calculator(1,2,sum);
