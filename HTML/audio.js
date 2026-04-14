class car {
    constructor(brand) {
        console.log("car name is assigned");
        this.brand = brand;
    }

    start() {
        console.log("start", this.brand);
    }
    stop() {
        console.log("stop", this.brand);
    }
}
let obj1 = new car("BMW");
obj1.start();
obj1.stop();