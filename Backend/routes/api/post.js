const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const { json } = require("express");
const ver = require("../../verify");
const mongoose = require("mongoose");
const Post = require("../../model/post.model");
const { populate } = require("../../model/User");

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
  //
  try {
    console.log(req.body)
    // const token = req.headers["x-access-token"];
    // const decoded = jwt.verify(token, "secret123");
    // let user = await User.find({ email: decoded.email });

    // if (!user) {
    //   return res.json({ message: "user not found" });
    // }
    // if (false /*if not a job seeker*/) {
    //   return res.json({ message: "job seekers arent allowed to post" });
    // }
    console.log("reached")
    await Post.create({
      field: req.body.field,
      schedule: req.body.schedule,
      location: req.body.location,
    });
    console.log("reached2")
    return res.json({ status: "ok", message: "done" });
  } catch (error) {
    return res.json({ status: error });
  }
});
router.get("/all", async (req, res) => {
  try {
    let posts = await Post.find(
      {},
      {
        _id: 0,

        title: 1,

        description: 1,

        location: 1,

        dateofpost: 1,

        field: 1,

        schedule: 1
      }
    );
    if (!posts) {
      //no posts in db
      return res.json({ error: "no posts found" });
    }
    // returns post with the name of the post owner
    return res.json(posts);
  } catch (err) {
    return res.json({ status: err });
  }
});
router.get("/user", async (req, res) => {
  //gets posts with specific user id

  try {
    let posts = await Post.find(
      { employeeid: req.body.user },
      {
        _id: 1,
        title: 1,
        description: 1,
        dateofpost: 1,
        jobberid: 1,
        location: 0,
      }
    ).populate("jobberid", { name: 1, _id: 0 });
    if (!posts) {
      //no posts in db
      return res.json({ error: "no posts found" });
    }
    // returns post with the name of the post owner
    return res.json(posts);
  } catch (err) {
    return res.json({ status: err });
  }
});

router.delete("/", async (req, res) => {
  //when giving the id name it to id
  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, "secret123");
    let user = await User.find({ email: decoded.email });
    if (!user) {
      return res.json({ error: 401 });
    }
    let post = await Post.find({ _id: req.body.id });
    if (!post) {
      return res.json({ message: "post not found" });
    }
    if (post.jobberid != user._id && !user.roles.admin) {
      return res.json({ status: 401 });
    } //not admin or original poster
    await Post.deleteOne({ _id: req.body.id });
    return res.json({ message: "deleted post successfully" });
  } catch (err) {
    return res.json({ message: err });
  }
});
router.patch("/modify", async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, "secret123");
    const user = await User.find({ email: decoded.email });

    if (!user) {
      return res.json({ message: "user not found" });
    }
    let post = await Post.find({ _id: req.body.id }); //searches for the post using its id
    if (!post) {
      return res.json({ message: "post not found" });
    }

    if (post.jobberid != user._id && !user.roles.admin) {
      return res.json({ status: 401 });
    }
    await Post.updateOne(
      { _id: req.body.postid },
      {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
      }
    );
    return res.json({ message: "modified post" });
  } catch (error) {
    return res.json({ status: error, message: "unauthorized access" });
  }
}); //edit post
module.exports = router;
