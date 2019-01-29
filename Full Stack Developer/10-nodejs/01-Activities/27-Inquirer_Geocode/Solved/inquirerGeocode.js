// // Instructions:
// // Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// // Make sure your new code provides the exact same output as it did with process.argv.

// // HINT: Don't forget to create your package.json file and save the correct packages to it.
// // HINT: You should not need to change *that much* code.

// // ========================================================================================================================

// // Include the geocoder and inquirer NPM packages
// let geocoder = require("geocoder");
// let inquirer = require("inquirer");

// // Prompt the user to provide location information.
// inquirer.prompt([

//   {
//     type: "input",
//     name: "userInput",
//     message: "Which location or landmark would you like to geocode?"
//   }

// // After the prompt, store the user's response in a variable called location.
// ]).then(function(location) {

//   // console.log(location.userInput);

//   // Then use the Google Geocoder to Geocode the address
//   geocoder.geocode(location.userInput, function(err, data) {

//     console.log(JSON.stringify(data, null, 2));
//   });

// });

// Instructions:
// Convert tnphe below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.
// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.
// ========================================================================================================================
// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var address = "";
let inquirer = require("inquirer");
let geocoder = require('geocoder');
inquirer.prompt([{
    type: "input",
    message: "What city do you want info on?",
    name: "cityname"
  }])
  .then(function (inquirerResponse) {
    console.log("Is this working?")
    if (inquirerResponse) {
      console.log("\nHere is your info on: " + inquirerResponse.cityname);
      address = inquirerResponse.cityname

    }
  });

geocoder.geocode(address, function (err, data) {
  console.log(JSON.stringify(data, null, 2));
});
