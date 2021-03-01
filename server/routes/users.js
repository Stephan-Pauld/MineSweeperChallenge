const express = require("express");
const Router = express.Router();
const sqlConnection = require('../lib/db.js');



Router.post("/", (req, res) => {
  const { name, score, safeSpace, minutes, seconds } = req.body
  queryString = `INSERT INTO users (name, score, safeSpaces, minutes, seconds) VALUES ('${name}', ${score}, ${safeSpace}, ${minutes}, ${seconds});`;
  sqlConnection.query(queryString, (err, row, fields) => {
    if (!err) {
      res.send(row)
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