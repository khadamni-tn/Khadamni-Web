const application = async (req,res)=>{
    try {
      const token = req.headers["x-access-token"];
      const decoded = jwt.verify(token, "secret123");
      const user = await User.find({ user: decoded.user });
      if(user[0].enum!="employee"){return res.json({status:401,message:"not job seeker"})}
      await Application.create({ApplicantId:user.id,postId:req.body.postid,enum:"pending"})
       }
      catch(error){return res.json({status:error})}
}   //apply for a service

module.exports = { application };