class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;//this : each indivisual object
    }
}
fortuner = new ToyotaCar();
lexus = new ToyotaCar();
fortuner.setBrand("furtuner");
lexus.setBrand("lexus");

/*fortuner
ToyotaCar {brandName: 'furtuner'}
brandName: "furtuner"
[[Prototype]]
: 
Object */

/* lexus
ToyotaCar {brandName: 'lexus'}
brandName: "lexus"
[[Prototype]]
: 
Object*/

class ToyotaCar1 {
    constructor(brand, mileage) {
        console.log("creating new object.");
        this.brandName = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
   
}
obj1 = new ToyotaCar1("furtuner", 10);//invoked constructor

/* obj1
ToyotaCar1 {brandName: 'furtuner'}
brandName: "furtuner"
[[Prototype]]: Object */