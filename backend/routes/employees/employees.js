const express = require("express");
const router = express.Router();
const employee = require("../../controllers/employees/employeeController");

//add employee
router.post("/add", employee.add);

//delete employee
router.get("/delete/:id", employee.delete);

//view all
router.get("/list", employee.viewAll);

//view one employee
router.get("/:id", employee.viewOne);

module.exports = router;
