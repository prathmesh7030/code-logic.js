class ToyotaCar {

    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }
    
    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
let lexes = new ToyotaCar();