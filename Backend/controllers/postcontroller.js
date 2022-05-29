const Post = require("../model/post.model");

const handleNewPost = async (req, res) => {
  const { field, scheduele, location } = req.body;
  if (!employerid || !title || !description || !dateofpost)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  try {
    const result = await Post.create({
      field: req.body.field,
      scheduele: req.body.scheduele,
      location: req.body.location,
    });
    console.log(result);
    res.status(201).json({ success: `New post ${post} created!` });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
module.exports = { handleNewPost };
