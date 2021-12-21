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

const nodata = { type: "no_data" };

FNA.getAll = (result) => {
  //Getting all FNA
  let query = queries.GET_ALL_FNA;

  sql.query(query, (res, err) => {
    if (err) {
      result(null, err);
      return;
    }
    if (res.length) {
      result(res[0], null);
      return;
    }

    // No data
    result(nodata, null);
  });
};

FNA.getFnaById = (id, result) => {
  //Selecting a FNA by Id
  const sqlQr = mysql.format(queries.GET_FNA_BY_ID, [id]);

  sql.query(sqlQr, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.length) {
      result(res[0], null);
      return;
    }

    // not found with the id
    result(nodata, null);
  });
};

FNA.createFNA = (newFNA, result) => {
  //Adding a new FNA
  const sqlQr = mysql.format(queries.ADD_FNA, [
    newFNA.user_id,
    newFNA.amount,
    newFNA.description,
    newFNA.type,
    newFNA.date,
  ]);

  sql.query(sqlQr, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newFNA });
  });
};

FNA.updateFNA = (fna, result) => {
  //Updating FNA
  const sqlQr = mysql.format(queries.UPDATE_FNA, [
    fna.amount,
    fna.description,
    fna.date,
    fna.id,
  ]);

  sql.query(sqlQr, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      // not found with the id
      result(null, nodata);
      return;
    }

    result(null, { id: fna.id, ...fna });
  });
};

FNA.deleteFNA = (id, result) => {
  //Deleting FNA
  const sqlQr = mysql.format(queries.DELETE_FNA_BY_ID, [id]);

  sql.query(sqlQr, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      // not found with the id
      result(null, nodata);
      return;
    }

    result(null, res);
  });
};

module.exports = FNA;
