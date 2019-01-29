function name1(nameFromUser){console.log("functionName " + nameFromUser)};
let name2 = function(){console.log("functionName")};
(function() {console.log("hey")})()
//this is the original arrow syntax
let foo1 = (y,x,z) => {
    return x+y+z
};
console.log(foo1(1,2,3));
let foo2 = (y,x,z) => (x+y+z);



// (() => console.log("hey"))(); //anonymous
// name = () => console.log("with a name"); //assigned
// //arrow functions
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

((name2) => {
    if(name2 === "antonio"){
        console.log(name2);
    }
})("antonio"); 

//this is the same as above code BUT assigned/not annymous 
let heyAnt = (name2) => {
    if(name2 === "antonio"){
        console.log(name2);
    }
};

heyAnt("antonio"); 
myFunction(5); //example of hoisting

function myFunction(y) {
    console.log(y * y)
    return y * y;
}