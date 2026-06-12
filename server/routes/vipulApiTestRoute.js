const express = require("express");
const router = express.Router();

const {
    getContractInfo,
} = require("../controllers/vipulApiTestController");

router.get("/", (req, res, next) => {
    console.log("Route HIT");
    next();
}, getContractInfo);

module.exports = router;