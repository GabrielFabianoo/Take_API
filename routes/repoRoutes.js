const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/", (req, res, next) => {
    axios.get(`https://api.github.com/users/takenet/repos?per_page=6&sort=created&direction=asc`).then((response) => {
        let correctLanguage = [];
        response.data.filter((e) => {
            if (e.language === "C#") correctLanguage.push(e);
        });

        res.status(200).send({
            data: correctLanguage.map((e) => {
                return { fullName: e.full_name, description: e.description };
            }),
        });
    });
});

module.exports = router;
