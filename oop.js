class Car {
  openDoor() {
    console.log("Open Door");
  }
  accelerate() {
    console.log("Accelerate");
  }
}

class Sedan extends Car {
  driveFast() {
    console.log("Fast");
  }
}

class Pickup extends Car {
  transportHeavy() {
    console.log("Heavy");
  }
}

const s1 = new Sedan();
const p1 = new Pickup();

s1.openDoor();
s1.accelerate();
s1.driveFast();

p1.openDoor();
p1.accelerate();
p1.transportHeavy();
