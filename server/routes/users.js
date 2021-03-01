const express = require("express");
const Router = express.Router();
const sqlConnection = require('../lib/db.js');



Router.post("/", (req, res) => {
  // queryString = `SELECT * FROM users;`;
  // sqlConnection.query(queryString, (err, row, fields) => {
  //   if (!err) {
  //     res.send(row)
  //   } else {
  //     console.log("Error retreiving users");
  //   };
  // });
  console.log(req.body);
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