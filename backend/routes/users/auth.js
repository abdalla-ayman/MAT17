const express = require("express");
const router = express.Router();
const user = require("../../controllers/users/userController");

//login route
router.post("/login", user.login);

//signup route
router.post("/register", user.signup);

module.exports = router;
