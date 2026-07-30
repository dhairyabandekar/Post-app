const express = require("express");
const cors = require("cors");

const postRoutes = require("./routes/post.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

module.exports = app;