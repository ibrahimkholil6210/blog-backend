const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const postsRoute = require("./routes/posts");
const commentsRoute = require("./routes/comments");

app.use(cors())
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'))

app.use("/api/v1/posts", postsRoute);
app.use("/api/v1/comments", commentsRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
