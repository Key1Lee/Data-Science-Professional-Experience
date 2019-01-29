let arrayOfIce = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "vanilla", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 }
];
//map & filter you should all learn!
let newArray = arrayOfIce.filter(inside => inside.name === "vanilla");
let another = [];
let newArray2 = arrayOfIce.forEach(
  inside => (inside.name === "greentea" ? another.push(inside) : null)
);

console.log("newArray", newArray);
console.log("another", another);
