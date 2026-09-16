// Arrays is the collections of items
let marks = [98,76,86,5,4,4445];
marks.length ;
// Arrays are mutable
marks[3] = 88 ;
console.log(marks);
//Looping over an Array
//Using for loop
let avg = 0 ;
for (let i = 0 ; i < marks.length ; i++){
    avg += marks[i] ;
    console.log(marks[i]);
}
console.log(avg/marks.length);
//For of 
for (let el of marks){
    console.log(el);
}
let items =[250,645,300,900,70];
for (let el of items){
    let sum = (el*10)/100 ;
    console.log(el - sum );
}
/*Arrays methods 
Filter - it creates a new array of elements that give true for a condition /Filter
Map - it creates a new array with the results of some operation . The value its callback returns are used to form new array
Reduce - performs some operations & reduces the array to a single value . it return that single value
*/ 
let nums = [45,66,77,78];
nums.map((val) =>
{
 //   returnval ;
   console.log(val , "=" , val*val);
}
);
let calcsquare = (num) =>
{
 console.log(num * num);
};
let newArr = nums.filter((val) =>
{
    return val % 2 === 0;
});
let arr =[1,3,4,66,78,890];
const output = arr.reduce((res , curr) =>
{
    return res + curr ;
});
console.log(output);
//We are given array of marks of students .Filter out the marks of students that scored 90.
let marks =[ 55,78,90,31,95,97];
marks.filter((val) =>
{
    return val > 90; 
});
