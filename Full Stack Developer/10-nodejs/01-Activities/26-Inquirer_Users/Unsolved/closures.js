// function makeAdder(x) {
//     // console.log("User sent " + x);
//     return function(y) { //default parameters y=0
//       return x + y;
//     };
//   }
//   console.log(makeAdder(5)(17)); //returns the value of the function inside
//   var add5 = makeAdder(5); //returns a function
//   console.log(add5(17));
//   var add10 = makeAdder(10);
  
//   console.log(add5(2));  // 7
//   console.log(add10(2)); // 12

foo = (x) => x + 7;
foo2 = (x, y) =>  {
    console.log("hey will do stuff here");
    return x + y;
}

//arrow functions will not lose the lexical binding of the this operator
console.log(foo(5));
console.log(foo2(17,15));

let will = {
    willFunc1: x => x+7,
    willFunc2: () => "hey will",
    manyFunctions: [
        () => "hey hey", (name) => `Hey ${name} whats up?`
    ]
}

console.log(will.willFunc1(5))
console.log(will.manyFunctions[0]());
console.log(will.manyFunctions[1]("antonio"));