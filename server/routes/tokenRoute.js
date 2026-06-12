const express = require("express");

const {
    mintTokens,
    transferTokens,
    getBalance,
} = require("../controllers/tokenController");

const router = express.Router();

router.post("/mint", mintTokens);

router.post("/transfer", transferTokens);

router.get("/balance/:address", getBalance);

module.exports = router;