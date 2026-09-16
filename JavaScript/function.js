//Functions : Block of code that performs a specific task , can be invoked whenever needed 
function sum(x,y){
    s = x + y ;
    //local variable ->  block scope 
    console.log("Before return");
    return s ;
}
function mul (a,b){
    return a * b;
}
let val = sum(3,4);
console.log(val);
//Arrow Functions - compact way of writing
const sum2 = (a,b) => {
    return a + b;
} 
//arrow fucntions are the part of modern javascript
/*ForEach Loop in Arrays
 array.forEach(CallBackFunction)
CallBack Function:Here ,it is a function to execute for each element in array
A callback is a function to execute for each element in array
*/
let array = [1,2,3,4,5];         
array.forEach((val) =>
    // it will execute automatically without calling the function
{ console.log(val);
})
let arr2 = ["pune","delhi" ,"mumbai"];
arr2.forEach((val1) =>
{
    console.log(val1);
})
/*
What are higher order function/method
it means it takes other function as a parameter or return a function 
*/

