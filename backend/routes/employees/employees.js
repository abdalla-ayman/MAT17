const express = require("express");
const router = express.Router();
const employee = require("../../controllers/employees/employeeController");

//view all
router.get("/", employee.viewAll);

//add employee
router.post("/add", employee.add);

//delete employee
router.delete("/", employee.delete);

// absence route
router.post("/abs", employee.abs);

//view one employee
router.get("/:id", employee.viewOne);

module.exports = router;
