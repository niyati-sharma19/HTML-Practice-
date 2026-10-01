const student = {
    fullname : "Niyati Sharma",
    marks : 96 ,
    printMarks : function(){
        console.log("Marks = " , this.marks);
    }
}
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }

};
const KaranArjun1 = {
    salary : 50000,
    calcTax(){
        console.log("tax rate 20%");
    }
};
const KaranArjun2 = {
    salary : 50000,
};
const KaranArjun3 = {
    salary : 50000,
};
const KaranArjun4 = {
    salary : 50000,
};

KaranArjun1.__proto__ = employee;
KaranArjun2.__proto__ = employee;
KaranArjun3.__proto__ = employee;
KaranArjun4.__proto__ = employee;
