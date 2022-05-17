const { createComment } = require("../model/comment");

exports.AddComment = (req, res) => {
  try {
    const comment = createComment(req?.body);
    res.status(201).json({
      status: "success",
      comment,
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
