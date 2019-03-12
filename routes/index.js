const express = require("express");
const router = express.Router();
const Homework = require("../models/Index");
const controller = require("../controllers/index");

router.get("/", controller.index);
router.get("/:name", controller.show);
router.post("/", controller.create);
router.put("/:name", controller.update);
router.delete("/:name", controller.delete);

module.exports = router;
