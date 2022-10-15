const { model, Schema } = require("mongoose");

const ComplaintSchema = new Schema({
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
