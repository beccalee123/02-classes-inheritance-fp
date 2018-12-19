'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

//Flying Vehicles Constructor
const FlyingVehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

FlyingVehicle.prototype.engines = () => {
  return 'Vroom!';
};

const Airplane = function(name) {
  FlyingVehicle.call(this, name, 3);
};

Airplane.prototype = new FlyingVehicle();

Airplane.prototype.wings = () => {
  return 'I\'m flying!';
};

const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 0);
}

Helicopter.prototype = new FlyingVehicle();

module.exports = {Car, Motorcycle, Helicopter, Airplane};

//Sea Creature Constructor

const SeaCreature = function(name, watertype) {
  this.name = name;
  this.watertype = watertype;
};

SeaCreature.prototype.habitat = () => {
  return 'Under the sea!';
};

const Fish = function(name) {
  SeaCreature.call(this, name, 'fresh');
};

Fish.prototype = new SeaCreature();

Fish.prototype.fins = () => {
  return 'Multiple fins!';
};

const Lobster = function(name) {
  SeaCreature.call(this, name, 'salt');
};

Lobster.prototype.claws = () => {
  return 'I could pinch you!';
};

Lobster.prototype = new SeaCreature();

module.exports = {Car, Motorcycle, Helicopter, Airplane, Fish, Lobster};