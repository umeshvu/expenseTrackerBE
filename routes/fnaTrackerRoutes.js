const express = require("express");
const Activity = require("../models/activityModel");
const router = express.Router();

router.get("/", (req, res) => {
  Activity.getAll((success, error) => {
    if (success) {
      res.status(200).json(success);
    } else {
      res.status(500).json(error);
    }
  });
});

router.post("/", (req, res) => {
  const NewFNA = new Activity({
    user_id: req.body.user_id,
    amount: req.body.amount,
    description: req.body.description,
    type: req.body.type,
    date: req.body.date,
  });

  Activity.createFNA(NewFNA, (success, error) => {
    if (success) {
      res.status(201).json(success);
    } else {
      res.status(500).json(error);
    }
  });
});

module.exports = router;
