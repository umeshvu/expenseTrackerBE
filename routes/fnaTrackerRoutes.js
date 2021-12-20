const express = require("express");
const router = express.Router();

const fna = require("../controllers/fnaController");

// Create a new fna entry
router.post("/", fna.create);

// // Retrieve all fna entries
// router.get("/", fna.findAll);

// // Retrieve a single fna entry with id
// router.get("/:id", fna.findOne);

// // Update a Tutorial with id
// router.put("/:id", fna.update);

// // Delete a Tutorial with id
// router.delete("/:id", fna.delete);

module.exports = router;
