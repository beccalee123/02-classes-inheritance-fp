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

const FlyingVehicle = () => ({
  engines() {
    return 'Vroom!';
  },
});

function Airplane(name) {
  let airplane = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 3},
    {wings}
  );
  function wings(){
    return 'I\'m flying!';
  }
  return airplane;
}

function Helicopter(name) {
  let helicopter = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 0},
  );
  return helicopter;
}

const SeaCreature = () => ({
  habitat() {
    return 'Under the sea!';
  },
});

function Fish(name) {
  let fish = Object.assign(
    {},
    SeaCreature(),
    {name},
    {watertype: 'fresh'},
    {fins}
  );
  function fins(){
    return 'Multiple fins!';
  }
  return fish;
}

function Lobster(name) {
  let lobster = Object.assign(
    {},
    SeaCreature(),
    {name},
    {watertype: 'salt'},
    {claws}
  );
  function claws(){
    return 'I could pinch you!';
  }
  return lobster;
}


module.exports = {Car, Motorcycle, Airplane, Helicopter, Fish, Lobster};
