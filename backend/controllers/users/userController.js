const bycryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const xssFilters = require("xss-filters");

require("dotenv").config();

const user = {
  login: async (req, res) => {
    try {
      let { username, password } = req.body;
      username = xssFilters.inHTMLData(username);
      password = xssFilters.inHTMLData(password);


      let user = await User.findOne({
        username,
      });

      if (!user)
        return res.status(400).send({
          msg: "user dose not exist",
        });

      let dosePasswordMatch = await bycryptjs.compare(password, user.password);

      if (!dosePasswordMatch)
        return res.status(401).send({
          msg: "incorrect password",
        });

      let token = jwt.sign({ id: user.id }, process.env.JWTSECRET);

      res.send({ token, user });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = user;
