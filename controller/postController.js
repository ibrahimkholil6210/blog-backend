const { create, findAll, findOne } = require("../model/post");

exports.allPosts = (req, res) => {
  try {
    const posts = findAll();
    res.status(200).json({
      status: "success",
      results: posts.length,
      posts:
          Object.keys(req?.query).length > 0
            ? posts.slice(req.query.offset, req.query.limit)
            : posts,
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
    const { title, content } = req.body;
    const post = { title, content };
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
