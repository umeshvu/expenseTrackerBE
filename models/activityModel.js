const mysql = require("mysql");
const sql = require("./db.js");
const queries = require("../config/queries");

const FNA = function (fna) {
  this.user_id = fna.user_id;
  this.amount = fna.amount;
  this.description = fna.description;
  this.type = fna.type;
  this.date = fna.date;
};

FNA.getAll = (result) => {
  let query = queries.GET_ALL_FNA;
  sql.query(query, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(res, null);
  });
};

FNA.createFNA = (newFNA, result) => {
  const sqlQr = mysql.format(queries.ADD_FNA, [
    newFNA.user_id,
    newFNA.amount,
    newFNA.description,
    newFNA.type,
    newFNA.date,
  ]);
  sql.query(sqlQr, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = FNA;
