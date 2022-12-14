const { model, Schema } = require("mongoose");

const ClarificationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = model("clarification", ClarificationSchema);
