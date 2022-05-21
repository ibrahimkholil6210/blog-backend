const { create, findAll, findOne } = require("../model/post");

exports.allPosts = (req, res) => {
  const offset = req.query.offset * 1 || 0;
  const limit = req.query.limit * 1 || 10;

  try {
    const posts = findAll();
    res.status(200).json({
      status: "success",
      results: posts.length,
      posts: posts.slice(offset, offset + limit),
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createPost = (req, res) => {
  try {
    const { title, content, date } = req.body;
    const post = { title, content, date };
    console.log(post)
    const newPost = create(post);

    res.status(201).json({
      status: "success",
      post: newPost,
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
    const post = findOne({ id });

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
