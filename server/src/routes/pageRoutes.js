const express = require("express");

const {
    getPage,
    listSubjects
} = require("../controllers/pageController");

const router = express.Router();

router.get("/subjects", listSubjects);

// Canonical pages may contain nested URL paths.
router.get("/*slug", getPage);

module.exports = router;
