const express = require("express");
const app = express();
const cors = require('cors')
const postRoute = require("./routes/posts");

app.use(cors())
app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/posts', postRoute)

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
