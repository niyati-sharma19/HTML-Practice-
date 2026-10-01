//Q1. You are creating a website for your college.Create a class User with 2 properties , name & email .It also has a method called viewData() that allows user to view website DataTransfer.
class User {
    constructor (name , email){
        this.name = name ;
        this .email = email ;
        console.log( "parent constructor");
        console.log( name , email );
    }
    viewData() {
        console.log("website data");
        console.log( name , email );


    }
}
let student1 = new User("Niyati " , "abc@gmail.com") ;
let student2 = new User( " Rahul " , " hh5278@gmail.com");
let student3 = new User("Parul" , " parul2436@hgmail.com");