const express = require("express");
const router = express.Router();
const employee = require("../../controllers/employees/employeeController");

//add employee
router.post("/add", employee.add);

//view all employees
router.get("/list", employee.viewAll);

//view one employee
router.get("/:id", employee.viewOne);

//delete employee
router.get("/delete/:id", employee.delete);
module.exports = router;
