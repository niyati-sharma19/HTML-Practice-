class Parent {
    
    hello() {
        console.log("Hello");
    }
}
class Child extends Parent {
    
}
let obj =  new Child();
class Person{
    constructor() {
       // this.name = name ;
        console.log("parent constructor");
      
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep() {
        console.log("sleep ");
    }
}
class Engineer extends Person {
    constructor(name,branch){
        console.log("Child constructor");
        this.branch = branch ;
         super(name) ;// to invoke parent class constructor ;
         console.log("exit constructor");
    
    }
    work(){
        super().eat ;
        console.log("recognizing patterns ");
    }
}
let obj1 = new Engineer(" Niyati ","Mechanical Engineer");