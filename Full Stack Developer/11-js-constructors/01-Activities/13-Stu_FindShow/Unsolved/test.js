// var obj = [{
//   score: 67.02462,
//   person: {
//     id: 57542,
//     url: 'http://www.tvmaze.com/people/57542/andy-griffith',
//     name: 'Andy Griffith',
//     country: {
//         name: "Canada",
//         code: "ca",
//         time: "central"
//       },
//     birthday: '1926-06-01',
//     deathday: '2012-07-03',
//     gender: 'Male',
//     image: [Object],
//     _links: [Object]
//   }
// }, {
//   score: 67.02462,
//   person: {
//     id: 57542,
//     url: 'http://www.tvmaze.com/people/57542/andy-griffith',
//     name: 'Bruce Wayne',
//     country: {
//       name: "United States",
//       code: "us",
//       time: "central",
//       batman: "exists"
//     },
//     birthday: '1926-06-01',
//     deathday: '2012-07-03',
//     gender: 'Male',
//     image: [Object],
//     _links: [Object]
//   }
// }]

// for (const i in obj) {
//     // console.log(i);
//   console.log(obj[i].person.name);
//   for (const j in obj[i].person.country) {
//     //   console.log(j)
//     console.log(obj[i].person.country[j]);
//   }
// }
const newFunc = (name) => console.log("hello "+name);
const antonio = function(test, batman){
    console.log(test)
    //some logic here thats manipulating "test"
    //after all that logic pass it to the callback function
    batman(test);
}

antonio("antonio", newFunc)