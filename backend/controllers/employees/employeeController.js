const User = require("../../models/user");
const xssFilter = require("xss-filters");
const bcryptjs = require("bcryptjs");

const employee = {
  add: async (req, res) => {
    try {
      let { username, password, role, firstName, lastName, email, salary } =
        req.body;

      //check validity of request
      if (!(username && password && role)) {
        return res.status(400).json("ادخل جميع الحقول");
      }

      //filter inputs make sure no code is provided
      (username = xssFilter.inHTMLData(username)),
        (password = xssFilter.inHTMLData(password)),
        (role = xssFilter.inHTMLData(role)),
        (firstName = xssFilter.inHTMLData(firstName)),
        (lastName = xssFilter.inHTMLData(lastName)),
        (email = xssFilter.inHTMLData(email)),
        (salary = xssFilter.inHTMLData(salary));

      //add user to db
      const newUser = new User({
        username,
        password,
        role,
        firstName,
        lastName,
        email,
        salary,
      });

      //hash password
      let salt = await bcryptjs.genSalt(10);
      newUser.password = await bcryptjs.hash(password, salt);

      //save to db
      let user = await newUser.save();
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params.id;

      //find and delete from database
      let employee = await User.findByIdAndDelete(id);
      if (employee) res.json("deleted successfully");
    } catch (error) {
      console.log(error);
    }
  },
  viewAll: async (req, res) => {
    try {
      let { skip } = req.body;
      let employees = await User.find({}).limit(10).skip(10);
      res.json(employees);
    } catch (error) {
      console.log(error);
    }
  },
  viewOne: async (req, res) => {
    try {
      let id = req.params.id;

      let employee = await User.findById(id);
      if (!employee) return res.status(400).json("employee not found");

      res.json(employee);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = employee;
