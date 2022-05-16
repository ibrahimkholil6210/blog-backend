const { create } = require("../model/post");

const posts = [];

exports.allPosts = (req, res) => {
  res.status(200).json({
    status: "success",
    posts,
  });
};

exports.createPost = (req, res) => {
  try {
    const { title, content } = req.body;
    const post = { title, content };
    const newPost = create(post);

    res.status(201).json({
      status: "success",
      newPost
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.singlePost = (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find((post) => post.id === Number(id));
    if (post) {
      res.status(200).json({
        status: "success",
        post,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "Post not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
