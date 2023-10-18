const express = require("express");
const userController = require("../Controllers/UserController");
const router = express();

router.post("/add_user", userController.addUser);

module.exports = router;
