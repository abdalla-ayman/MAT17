const Complaints = require("../models/complaint");

const complaint = {
  add: async (req, res) => {
    try {
      const { employeeId, complaint } = req.body;

      //check if data exist
      if (!(employeeId && complaint)) {
        return res.status(400).json("enter all feilds");
      }
    } catch (error) {
      console.log(error);
    }
  },
  view: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = complaint;
