const Complaints = require("../models/complaint");
const User = require("../models/user");

const complaint = {
  add: async (req, res) => {
    try {
      const { employeeId, message } = req.body;

      //check if data exist
      if (!(employeeId && message)) {
        return res.status(400).json("enter all feilds");
      }

      //add and save compaint to db
      let newComplaint = await Complaints.create({
        about: employeeId,
        message,
      });

      //send to front
      res.json(newComplaint);
    } catch (error) {
      console.log(error);
    }
  },
  view: async (req, res) => {
    try {
      //find complaints
      let complaints = await Complaints.find({}).populate("about");

      //send complaints to the back
      res.json(complaints);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = complaint;
