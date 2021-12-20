const Activity = require("../models/activityModel");
const errorMessages = require("../config/errorMessage");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: errorMessages.BAD_REQUEST,
    });
  }

  // Create a fna
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false,
  });

  // Save fna in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || errorMessages.UNKNOWN_ERROR,
      });
    else res.send(data);
  });
};
