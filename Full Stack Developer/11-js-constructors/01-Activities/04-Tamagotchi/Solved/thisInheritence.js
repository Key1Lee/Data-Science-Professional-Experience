function Person() {
  this.age = 0;
  function growUp() {
    //   console.log(this); //thinks its the window
    console.log(this.age++);
  };
  growUp();
}
Person();

function Person2() {
    this.age = 0;
    growUp = () => {
    //   console.log(this);
      this.age++;
    };
    growUp();
    console.log(age);
  }
  Person2();