const Homework = require("../models/Index");

Homework.remove({}).then(_ => {
  Homework.insertMany([
    {
      name: "Control Flow Practice",
      week: "One",
      completed: "Yes"
    },
    {
      name: "Functions Practice",
      week: "Two",
      completed: "Yes"
    },
    {
      name: "Intro to MVC",
      week: "Four",
      completed: "No"
    },
    {
      name: "Dr. Who",
      week: "Seven",
      completed: "Yes"
    },
    {
      name: "Audubon Website",
      week: "Seven",
      completed: "No"
    }
  ]).then(homework => {
    console.log(homework);
    process.exit();
  });
});

// to make changes run node db/seed.js
