class SwiftCar {
  constructor(brand , mileage){
    console.log("Creating new object");
    this.brand = brand ;
    this.mileage = mileage ;
  }
     start () {
        console.log("Car is Starting.....");
     }
     stop() {
        console.log("Car is stopping ..... ");
      }
      setBrand(brand){
        this.brandn = brand ;
      }
}
let  T = new SwiftCar ("Fortuner" , 10);
console.log(T);
T.setBrand("Fortunate");