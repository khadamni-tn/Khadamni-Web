const express = require("express");
//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const { json } = require("express");
const ver = require("../../verify");
const mongoose = require("mongoose");

const router = express.Router();
router.use(express.json());
//this file is for the functionalities that only the admin can do


router.delete("/users", async (req, res) => {
//sprint2:delete user
  try {
    const token = req.headers["x-access-token"];
    decoded = jwt.verify(token, "secret123");
    const user = await User.find({ user: decoded.user }, { enum: 1 });
    if (!user) {
      return res.json({ error: "token invalid" });
    }
    if (user[0].enum != "admin") {
      return res.json((error = "unauthorized access"));
    }
    await User.findOneAndDelete({ user: decoded.user });
    return res.json({result:"user deleted"})
  } catch (err) {
    res.json({ error: err, message: "couldnt delete" });
  }
});

module.exports = router;
