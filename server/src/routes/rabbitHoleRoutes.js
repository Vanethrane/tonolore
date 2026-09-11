const express = require("express");

const {
    listRabbitHoles,
    getRabbitHole,
    getNextStep
} = require("../controllers/rabbitHoleController");

const router = express.Router();

router.get("/", listRabbitHoles);
router.get("/:slug/next", getNextStep);
router.get("/:slug", getRabbitHole);

module.exports = router;
