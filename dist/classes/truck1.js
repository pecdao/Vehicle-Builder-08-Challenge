// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super(vin, color, make, model, year, weight, topSpeed, wheels);
        this.towingCapacity = towingCapacity;
        if (this.wheels.length !== 4) {
            this.wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin"), new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
        }
    //    if (towingCapacity < weight) {
    //        console.log("The vehicle is too heavy to be towed");
    //    } else {
    //        console.log("The vehicle is being towed");
    // }
}
   
    tow(vehicle) {
        if (vehicle.weight <= this.towingCapacity) {
            console.log("The vehicle is being towed");
        } else {
            console.log("The vehicle is too heavy to be towed");
        }
 
    }
}
// Export the Truck class as the default export
export default Truck;
