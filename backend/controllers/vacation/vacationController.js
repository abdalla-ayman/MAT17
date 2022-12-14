const Vacation = require("../../models/vacation");
const xssFilter = require("xss-filters");
const bcryptjs = require("bcryptjs");
const vacation = require("../../models/vacation");
const User = require("../../models/user");

const employee = {
  add: async (req, res) => {
    try {
      let { str_date, type, days } = req.body;

      //check validity of request
      if (!(str_date && type && days)) {
        return res.status(400).json("ادخل جميع الحقول");
      }

      //filter inputs make sure no code is provided
      (str_date = xssFilter.inHTMLData(str_date)),
        (type = xssFilter.inHTMLData(type)),
        (days = xssFilter.inHTMLData(days));

      //add user to db
      const vacation = await Vacation.create({
        str_date,
        type,
        days,
        userId: req.user.id,
      });

      res.json(vacation);
    } catch (error) {
      console.log(error);
    }
  },

  viewAll: async (req, res) => {
    try {
      let { page } = req.headers;
      let vacations = await Vacation.find({ status: "pending" })
        .limit(10)
        .skip(page)
        .populate("userId", "firstName");

      let count = await Vacation.countDocuments({});
      res.json({ count, vacations });
    } catch (error) {
      console.log(error);
    }
  },
  changeStatus: async (req, res) => {
    try {
      let { id, action } = req.headers;

      //find and return employee from db
      let vacation = await Vacation.findByIdAndUpdate(id, { status: action });

      //send to frontend
      res.json(vacation);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = employee;
