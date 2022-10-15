const express = require("express");
const router = express.Router();
const complaint = require("../controllers/complaintsController");

router.post("/", complaint.add);
router.get("/list", complaint.view);

module.exports = router;
