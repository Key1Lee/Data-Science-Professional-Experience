let capitalize = (str) => {
    return new Promise((resolve, reject) => {
      if (typeof str !== 'string') {
        reject(`Non-string value given: ${str}`);
      }
      let result = str.toUpperCase()
      resolve(result);
    })
  }
  
  let countDown = (num) => {
    return new Promise((resolve, reject) => {
      if (typeof num !== 'number') {
        reject(`Non-numeric value given: ${num}`);
      } else if (num < 1) {
        reject(`Cannot count down from a number < 1: ${num}`);
      }
      let result = "";
      for (let i = num; num > 0; num--) {
        result += num + " ";
      }
      result += 'lift off!'
      resolve(result);
    })
  }
  
  let x = -1;
  
  let test = countDown(x);
  console.log(test);
//   test
//     .then(capitalize)
//     .then(console.log)
//     .catch(console.error);
  
  /**
   * 1. What is the value of the variable `test`?
   *  a. a string: 'Cannot count down from a number < 1: -1'
   *  b. a string: '-1 lift off!'
   *  c. Undefined
   *  d. a Promise object 
   * 
   * 2. If countDown is called with the value -1, the promise will:
   *  a. never complete
   *  b. resolve
   *  c. reject
   *  d. all of the above
   * 
   * 3. Write an appropriate then and catch handler for test that will
   * log the result:
      test
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
  
   * 4. Using the capitalize function, chain together the promises and 
   * print the result.
      test
        .then(capitalize)
        .then(console.log)
        .catch(console.error);
   */