const express = require("express");
const commentController = require('../controller/commentController');

const router = express.Router();

router.route("/").post(commentController.AddComment);

module.exports = router;
