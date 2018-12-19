'use strict';


class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }

}

class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }
  wheelie(){
    return 'Wheee!';
  }
}

class FlyingVehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  engines(){
    return 'Vroom!';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name) {
    super(name, 3);
  }
  wings(){
    return 'I\'m flying!';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super(name, 0);
  }
}

class SeaCreature {
  constructor(name, watertype) {
    this.name = name;
    this.watertype = watertype;
  }
  habitat(){
    return 'Under the sea!';
  }
}

class Fish extends SeaCreature {
  constructor(name){
    super(name, 'fresh');
  }
  fins(){
    return 'Multiple fins!';
  }
}

class Lobster extends SeaCreature {
  constructor(name){
    super(name, 'salt');
  }
  claws(){
    return 'I could pinch you!';
  }
}

module.exports = {Car, Motorcycle, Airplane, Helicopter, Fish, Lobster};