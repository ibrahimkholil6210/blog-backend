const express = require("express");
const postController = require('../controller/postController');

const router = express.Router();

router
  .route("/")
  .get(postController.allPosts)
  .post(postController.createPost);

router.route("/:id").get(postController.singlePost);

module.exports = router;
