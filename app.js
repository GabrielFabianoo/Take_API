const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const repoRoutes = require("./routes/repoRoutes");

app.use("/user", userRoutes);
app.use("/repo", repoRoutes);
app.use("/", (req, res, next) => {
    res.status(200).send({
        data: "you should try to use this https://api-take-chatbot.herokuapp.com/user or this https://api-take-chatbot.herokuapp.com/repo",
    });
});

module.exports = app;
