const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const xssFilter = require("xss-filters");

require("dotenv").config();

const user = {
  login: async (req, res) => {
    try {
      let { username, password } = req.body;

      if (!(username && password)) {
        return res.status(400).json("enter all feilds");
      }
      //filter input
      (username = xssFilter.inHTMLData(username)),
        (password = xssFilter.inHTMLData(password));

      //find user from data base
      let user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json("user not found");
      }

      let isMatch = await bycrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json("incorrect password");
      }

      //sign user
      let token = await jwt.sign({ id: user._id }, process.env.JWTSECRET);
      return res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = user;
