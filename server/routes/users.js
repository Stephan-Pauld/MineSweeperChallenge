const express = require("express");
const Router = express.Router();
const sqlConnection = require('../lib/db.js');



Router.post("/", (req, res) => {
  const { name, score, safeSpace, minutes, seconds } = req.body

  checkName = `SELECT * FROM users WHERE name='${name.toLowerCase()}';`;

  // Checking to see if the name exists in the DB.. maybe to avoid spam?
  // maybe if we find it we could ask the user if they would like to overwrite their old entry?
  sqlConnection.query(checkName, (err, row, fields) => {
    if (!err) {
      // !row[0] = if the query did NOT come back with a user so no duplicates
      // maybe a function could clean this up? if row call function to send error else function to add score to db
      if (!row[0]) {
        queryString = `INSERT INTO users (name, score, safeSpaces, minutes, seconds) VALUES ('${name}', ${score}, ${safeSpace}, ${minutes}, ${seconds});`;
        sqlConnection.query(queryString, (err, row, fields) => {
          if (!err) {
            res.send(row)
          } else {
            console.log("Error retreiving users");
          };
        });
      } else {
        res.send(false)
      }
    } else {
      console.log("Error retreiving users");
    };
  });



});

Router.get("/", (req, res) => {
  queryString = `SELECT * FROM users;`;
  sqlConnection.query(queryString, (err, row, fields) => {
    if (!err) {
      res.send(row)
    } else {
      console.log("Error retreiving users");
    };
  });
});

module.exports = Router;