'use strict'
let dogs = {
  raining: true,
  noise: "woof",
  makeNoise: () => {
    if (dogs.raining) {
      console.log(dogs.noise);
    }
  },
}

let cats = {
  raining: true,
  noise: "meow",
  makeNoise() {
    console.log(this.raining);
    if (this.raining) {
      console.log(this);
      console.log(cats.noise);
    }
  },
}

let cats2 = {};
cats2.raining = true;
cats2.noise = "meow";
cats2.makeNoise = () => {
  if (this.raining) {
    console.log(this);
    console.log(cats.noise);
  }
}

let massHysteria = (dog, cat) => {
  if (dog.raining && cat.raining) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}

dogs.makeNoise();
cats.makeNoise();
cats2.makeNoise();
massHysteria(dogs, cats);
