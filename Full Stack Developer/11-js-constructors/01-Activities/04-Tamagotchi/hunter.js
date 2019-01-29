function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
  this.feed = function() {
    if (hungry === true) {
      console.log("No thanks! I'm full.");
      return true;
    } else {
      console.log("That was yummy!");
      return false;
    }
  };
}

  let dog = new DigitalPal(false, false, true, 0);
console.log(dog.feed())