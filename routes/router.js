const router = require("express").Router();

const gamesRouter = require("./games");

router.use("/", gamesRouter);

module.exports = router;
