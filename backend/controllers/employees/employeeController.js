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
      let salt = await bcryptjs.genSalt(10);
      let hashedPassword = await bcryptjs.hash(password, salt);

      const user = await User.create({
        username,
        password: hashedPassword,
        role,
        firstName,
        lastName,
        email,
        salary,
      });

      //hash password

      //save to db
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.headers;

      //find and delete from database
      let employee = await User.findByIdAndDelete(id);
      if (employee) res.json("deleted successfully");
    } catch (error) {
      console.log(error);
    }
  },
  viewAll: async (req, res) => {
    try {
      let { page } = req.headers || 0;

      //set limmit and skips for page pagination
      let limit = 10;
      let employees = await User.find({})
        .limit(limit)
        .skip(page * limit);

      //get number of users in d
      let count = await User.countDocuments({});
      res.json({ count, employees });
    } catch (error) {
      console.log(error);
    }
  },
  viewOne: async (req, res) => {
    try {
      let id = req.params.id;

      //find and return employee from db
      let employee = await User.findById(id);
      if (!employee) return res.status(400).json("employee not found");

      //send to frontend
      res.json(employee);
    } catch (error) {
      console.log(error);
    }
  },
  abs: async (req, res) => {
    try {
      let { ids, date } = req.body;
      await User.updateMany(
        { id: { $in: ids } },
        {
          $push: { abs_dates: date },
          $inc: { abs_days: 1 },
          $inc: { salary: -500 },
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = employee;
