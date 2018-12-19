'use strict';

const Vehicle = () => ({
  drive() {
    return 'Moving Forward';
  },
  stop(){
    return 'Stopping';
  },
});


function Car(name) {
  let car = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 4},
  );
  return car;
}

function Motorcycle(name) {
  let motorcycle = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 2},
    {wheelie}
  );
  function wheelie(){
    return 'Wheee!';
  }
  return motorcycle;
}

let newCar = new Car('Honda');
console.log(newCar);

module.exports = {Car, Motorcycle};

// 'use strict';


// class Vehicle {
//   constructor(name, wheels) {
//     this.name = name;
//     this.wheels = wheels;
//   }
//   drive(){
//     return 'Moving Forward';
//   }
//   stop(){
//     return 'Stopping';
//   }

// }

// class Car extends Vehicle {
//   constructor(name) {
//     super(name, 4);
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(name) {
//     super(name, 2);
//   }
//   wheelie(){
//     return 'Wheee!';
//   }
// }

