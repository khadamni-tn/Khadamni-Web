const express = require("express");
//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../model/User");
const Application=require("../../model/application.model")
const Post = require("../../model/post.model");

const { json } = require("express");
const ver = require("../../verify");
const mongoose = require("mongoose");
const { populate } = require("../../model/User");

const router = express.Router();
const applicationController = require ("../../controllers/applicationController")
router.use(express.json());



router.post("/", applicationController.application)
router.get("/",async (req,res)=>{         
          try {
            const token = req.headers["x-access-token"];
            const decoded = jwt.verify(token, "secret123");
            const user = await User.find({ user: decoded.user });
            if (user[0].enum != "jobber") {
              return res.json({ status: 401, message: "not jobber" });
            } //first step is to find the posts of employee
            let post = await Post.find({ jobberid: user._id });
            if (!post) {
              return res.json({ message: "you didnt make a post yet" });
            }
            application = Application.find({ postid: post.id }); //then find the applications that have id of the posts
            application.populate('applicantid',{name:1,_id:0})
           return res.json({application})
          }
           catch(error){return res.json({status:error})}
        }); //view employees applied to application


module.exports = router;