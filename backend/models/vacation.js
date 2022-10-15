const { model, Schema } = require("mongoose");

const VacationSchema = new Schema({
  str_date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ["paid", "unpaid"],
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    required: true,
    default: "pending",
  },
});

module.exports = model("vacation", VacationSchema);
