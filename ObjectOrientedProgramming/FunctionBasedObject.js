function Human(name, legs = 2) {
  // this.name = "Adam";
  this.name = name;
  this.eyes = 2;
  this.legs = legs;
  this.walk = function () {
    if (this.legs == 2) {
      console.log("Person can Walk");
    } else {
      console.log("Unable to Walk");
    }
  };
}

// let eve = new Human("Eve", 2);
let jomi = new Human("Jomi");
jomi.walk();

// eve.name = "Eve";

// console.log(eve);
console.log(jomi);
