const mongoose = require("mongoose");

const Application = new mongoose.Schema(
  {
    ApplicantId: { type: "objectID", required: true,ref:"UserData" }, //id of jobber to display it later
    postId: { type: "objectID", required: true,ref:"PostData" },
    applicationdate: { type: Date, default: Date.now, required: true }, //time of where the app was sent
    enum: ["pending", "accepted", "rejected"], //state of the application
  },
  { collection: "application-data" }
);

const model = mongoose.model("ApplicationData", Application);

module.exports = model;

