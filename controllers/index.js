const Homework = require("../models/Index");

module.exports = {
  index: (req, res) => {
    Homework.find({}).then(homework => {
      res.json(homework);
    });
  },

  show: (req, res) => {
    Homework.findOne({ name: req.params.name }).then(homework => {
      res.json(homework);
    });
  },

  create: (req, res) => {
    Homework.create(req.body).then(homework => res.json(homework));
  },

  update: (req, res) => {
    Homework.findOne({ name: req.params.name }).then(homework => {
      homework.name = req.body.name;
      homework.week = req.body.week;
      homework.completed = req.body.completed;
      homework.save((err, homework) => {
        res.json(homework);
      });
    });
  },

  delete: (req, res) => {
    Homework.findOneAndRemove({ name: req.params.name }).then(homework => {
      res.json(homework);
    });
  }
};
