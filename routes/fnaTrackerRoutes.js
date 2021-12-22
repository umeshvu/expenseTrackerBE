const express = require("express");
const Activity = require("../models/activityModel");
const router = express.Router();
const httpStatus = require("../config/httpStatus");

router.get("/", (req, res) => {
  Activity.getAll((error, response) => {
    if (response) {
      if (!response.type) res.status(httpStatus.OK).json(response);
      else res.status(httpStatus.NO_CONTENT).json(response);
    } else {
      res.status(httpStatus.SERVER_ERROR).json(error);
    }
  });
});

router.get("/:id", (req, res) => {
  Activity.getFnaById(req.params.id, (error, response) => {
    if (response) {
      if (!response.type) res.status(httpStatus.OK).json(response);
      else res.status(httpStatus.NO_CONTENT).json(response);
    } else {
      res.status(httpStatus.NOT_FOUND).json(error);
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

  Activity.createFNA(NewFNA, (error, response) => {
    if (response) {
      res.status(httpStatus.CREATED).json(response);
    } else {
      res.status(httpStatus.SERVER_ERROR).json(error);
    }
  });
});

router.put("/", (req, res) => {
  const updateFNA = {
    amount: req.body.amount,
    description: req.body.description,
    date: req.body.date,
    id: req.body.id,
  };

  Activity.updateFNA(updateFNA, (error, response) => {
    if (response) {
      if (!response.type) res.status(httpStatus.OK).json(response);
      else res.status(httpStatus.NOT_FOUND).json(response);
    } else {
      res.status(httpStatus.SERVER_ERROR).json(error);
    }
  });
});

router.delete("/:id", (req, res) => {
  Activity.deleteFNA(req.params.id, (error, response) => {
    if (response) {
      if (!response.type) res.status(httpStatus.OK).json(response);
      else res.status(httpStatus.NOT_FOUND).json(response);
    } else {
      res.status(httpStatus.SERVER_ERROR).json(error);
    }
  });
});

module.exports = router;
