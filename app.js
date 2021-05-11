const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const repoRoutes = require("./routes/repoRoutes");

app.use("/user", userRoutes);
app.use("/repo", repoRoutes);

module.exports = app;