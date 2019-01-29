//use strict doesn't allow unused variables or missing semicolons without throwing an alert
"use strict";

//file system is to have access to the file system to be able to leverage file paths in your code
const fs = require("fs");
//path provides utilities for working with file and directory path
const path = require("path");
//Sequelize is a promise based ORM
const Sequelize = require("sequelize");
//returns the filename part of a file path.
const basename = path.basename(__filename);
//create a variable to detect either the environment you're in via process.env.NODE_ENV or default to development - this ties into config.json file
const env = process.env.NODE_ENV || "development";
//create a variable named config to require the confir.json
const config = require(__dirname + "/..configconfig.json")[env];
//create en empty db object
const db = {};
//creates a connection to the DB based on the environment that you're in
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//Uses file system to read the direct and sync against __dirname and then create a new array and then use a function called file to get a js file and then loop over them to create the models for sequelize
fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });
//to define a relationship between the db and the models when they are in separate files
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//sequelize is the new Sequalize object created in lines 19 through 24
db.sequelize = sequelize;
//Sequelize is the variable from the package
db.Sequelize = Sequelize;

//exports sequelize
module.exports = db;
