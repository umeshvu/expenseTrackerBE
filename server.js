const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

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

// //Initiating routing
// const fnaRouter = require("./routes/fnTrackerRoutes");

// //using middleware for all requests receving starts with subscribers
// app.use("/fna", fnaRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
