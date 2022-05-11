const posts = [];

exports.allPosts = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      posts,
    },
  });
};

exports.createPost = (req, res) => {
  try {
    const { title, content, date } = req.body;
    const post = { title, content, date, id: new Date().getTime() };
    posts.push(post);

    res.status(201).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
