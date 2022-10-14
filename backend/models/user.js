const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  role: {
    type: String,
        enum : ['admin','employee'],
        default: 'employee'
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  salary: {
    type: Number,
  },
  paid_vacation: {
    type: Number,
  },
  unpaid_vacation: {
    type: Number,
  },
  abs_dates: {
    type: [Date],
  },
});

module.exports = model("user", UserSchema);
