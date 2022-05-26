const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const postsRoute = require("./routes/posts");

app.use(cors())
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'))

app.use("/api/v1/posts", postsRoute);
app.use("*", (req, res) => {
  res.status(404).json({
    status: 404,
    error: `Can't find ${req.originalUrl} on this server`,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
