//Loops and Strings 
//Loop are used to execute a piece if cide again and again
//For Loop
for (let i = 1 ; i <= 5 ; i++){
    console.log("Uttaranchal University");
} 
console.log("sum of first 5 numbers");
let sum = 0 ;  
for (let i = 1 ; i <= 5 ; i++){
    sum += i ;
}
console.log("sum = " , sum ); 
//While Loop
let i = 1 ;

while ( i <= 5){
    console.log(i);
    i++;
}
//dp-while Loop 
// it will execute atleast once , no matter condition is true or not
do {
    console.log("ASUS ZENBOOK 14");
    i++;
}while( i<= 5) ;   
//for-of Loop
// for (let val of strvar){
//Syntax of for - of
// } it is used to iterate index by index 
let str = "Apna College";
for (let i of str){ // iterator -> characters
    console.log(i);//It will print in new line 
    i++;
}
console.log("String size = " , i ) ;
//for-in Loop
//Objects , Arrays
let student ={
    name :"Niyati Sharma" ,
    age : 21 ,
    cgpa : 8 ,
    isPass :True 
} ;
for (let key in student){
    // key -> function 
    console.log("Key =  " , key , "Value  = ") , student[key];


}

                         