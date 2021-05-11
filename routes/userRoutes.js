const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/", (req, res, next) => {
    axios.get("https://api.github.com/users/takenet").then((response) => {
        res.status(200).send({
            data: response.data.avatar_url,
        });
    });
});

module.exports = router;
