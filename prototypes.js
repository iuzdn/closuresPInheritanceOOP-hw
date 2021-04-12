function Car() {}

Car.prototype.openDoor = function () {
  console.log("Open Door");
};

Car.prototype.accelerate = function () {
  console.log("Accelerate");
};

function Sedan() {}
Sedan.prototype = Object.create(Car.prototype);
Sedan.prototype.constructor = Sedan;

function Pickup() {}
Pickup.prototype = Object.create(Car.prototype);
Pickup.prototype.constructor = Pickup;

const s1 = new Sedan();
const p1 = new Pickup();

s1.openDoor();
s1.accelerate();
p1.openDoor();
p1.accelerate();
