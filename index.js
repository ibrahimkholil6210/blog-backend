const express = require("express");
const app = express();
const cors = require('cors')
const postsRoute = require("./routes/posts");
const commentsRoute = require("./routes/comments");

app.use(cors())
app.use(express.json({ limit: '10kb' }));

app.use("/api/v1/posts", postsRoute);
app.use("/api/v1/comments", commentsRoute);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
