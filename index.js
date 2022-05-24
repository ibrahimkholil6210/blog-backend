const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const postsRoute = require("./routes/posts");

app.use(cors())
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'))

app.use("/api/v1/posts", postsRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
