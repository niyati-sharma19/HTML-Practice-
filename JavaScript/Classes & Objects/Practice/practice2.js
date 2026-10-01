//Q2 Create a new class called Admin which inherits from User.Add a new method called eeditData to Admin that allows it to edit website data .
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
class Admin extends User{
    constructor(name , email){
        super(name , email);
         
    }

    editData(){
        super().viewData;
        let Data = "some new value" ;

        console.log("editting in the name is occuring",Data);
    }
};
let admin1 = new Admin("Niyati ","niyati676@gmail.com") ;
