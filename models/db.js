const mysql = require("mysql");
const queries = require("../config/queries");

const conn = mysql.createPool({
  connectionLimit: process.env.POOL_COUNT, //important
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  debug: false,
});

conn.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("Db is connected - The solution is: ", results[0].solution);
});

// let query = mysql.format(queries.GET_ALL_FNA);
// conn.query(query, function (error, results, fields) {
//   if (error) throw error;
//   console.log("Db is connected - The solution is: ", results[0]);
// });

module.exports = conn;
