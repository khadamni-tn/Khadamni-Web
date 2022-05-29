const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    employeeid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserData",
      required: false,
    },
    title: { type: String, required: false },
    description: { type: String, required: false },
    dateofpost: { type: Date, default: Date.now, required: false },
    field: { type: String },
    location: { type: String },
    schedule: { type: String },
  },
  { collection: "post-data" }
);

const model = mongoose.model("PostData", Post);

module.exports = model;
