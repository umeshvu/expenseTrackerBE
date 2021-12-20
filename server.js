require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

//Adding the router
const fnaRouter = require("./routes/fnaTrackerRoutes");

//Enabling json accpetion using middleware
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Accpeting cors
var corsOptions = {
  origin: "http://localhost:3000",
};
//using middleware to accept cors
app.use(cors(corsOptions));

//using middleware for all requests starts with fna
app.use("/fna", fnaRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Error handler middleware */
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({ message: err.message });
//   return;
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
