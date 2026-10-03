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
function getData(dataId , getNextData)
{
    setTimeout(() => {
        console.log("data" , dataId);
       if( getNextData){
        getNextData() ;

       }
    },2000);
}
//Callback hell 
getData(1 , () => {// this is callback function which is wriiten in this format so that it won't execute immediately 
        getData(2,() => {
            getData(3);
        })
});