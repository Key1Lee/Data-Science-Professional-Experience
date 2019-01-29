// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Basic Input: ",
            name: "username"
        },
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        {
            type: "list",
            message: "Choose wisely!: ",
            choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
            name: "Options"
        },
        {
            type: "checkbox",
            message: "What wil it be? ",
            choices: ["Red", "Blue", "Green", "Yellow"],
            name: "checkbox"

        },
        {
            type: "confirm",
            message: "Are you sure? ",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        console.log(inquirer.password)
        if (inquirer.password === "123456") {
            console.log("Validated Identity")
        }
    });