const express = require("express");
const {
    listEntities,
    getEntity,
    getConnections
} = require("../controllers/entityController");

const router = express.Router();

router.get("/", listEntities);
router.get("/:slug/connections", getConnections);
router.get("/:slug", getEntity);

module.exports = router;
