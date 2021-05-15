var express = require('express');

var db = require("../db");

var controller = require("../controller/user.controller")


var router = express.Router();

router.get("/",controller.index);

console.log(db.get("users").value());

router.get("/search",controller.search)
router.get("/create",controller.create)
router.get("/:id",controller.id)
router.post("/create",controller.postCreate)
module.exports = router;