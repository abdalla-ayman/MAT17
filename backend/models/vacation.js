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
    ref: "User",
    required: true
  },
});

module.exports = model("vacation", VacationSchema);
