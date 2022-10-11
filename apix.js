const express = require("express");
const app = express();
const port = 3000;
const connection = require("./conn.js");
const responses = require("./response.js");

var queryGetAll = "SELECT * FROM biodata";

app.get("/biodata", (req, res) => {
  connection.query(queryGetAll, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      responses(200, rows, "Success", res);
    }
  });
});

app.get("/biodata/:id", (req, res) => {
  var id = req.params.id;
  var queryGetById = "SELECT * FROM biodata WHERE id = " + id;
  connection.query(queryGetById, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      responses(200, rows, "Success", res);
    }
  });
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
