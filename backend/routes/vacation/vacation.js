const express = require("express");
const router = express.Router();
const vacation = require("../../controllers/vacation/vacationController");

//view all
router.get("/", vacation.viewAll);

//add employee
router.post("/add", vacation.add);

router.put("/", vacation.changeStatus);

module.exports = router;
