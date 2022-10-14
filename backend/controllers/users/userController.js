const bycryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const xssFilters = require("xss-filters");

require("dotenv").config();

const user = {
  login: async (req, res) => {},
};

module.exports = user;
