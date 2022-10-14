const { model, Schema } = require("mongoose");

const ComplaintSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  about: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = model("complaint", ComplaintSchema);
