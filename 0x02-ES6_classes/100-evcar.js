import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call constructor of super class (Car)
    super(brand, motor, color);

    // Create objs
    this._range = range;
  }

  // Methods

  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    return new NewObj();
  }

  // Setters

  // Getters
}

/* class TestCar extends Car {};
const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();
console.log(tc1 instanceof TestCar);
console.log(tc2 instanceof TestCar);
console.log(tc1 == tc2); */
