const express = require("express");
const charityModel = require("../Models/Charity");
const charityController = require("../Controllers/CharityController");
const router = express();

router.get("/index", charityController.index);
router.post("/addCharity", charityController.addCharity);
router.put("/changeApproval", charityController.changeApproval);

module.exports = router;
