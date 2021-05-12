const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/", (req, res, next) => {
    axios.get(`https://api.github.com/users/takenet/repos?per_page=6&sort=created&direction=asc`).then((response) => {
        let correctLanguage = {};
        
        response.data.filter((e, i) => {
            if (e.language === "C#") correctLanguage[i] = {fullName: e.full_name, description: e.description}
        });

        res.status(200).send({
            data: correctLanguage
        });
    });
});

module.exports = router;
