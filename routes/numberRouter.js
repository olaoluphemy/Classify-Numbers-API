const express = require("express");
const { getNumber } = require("../controllers/numberController");

const router = express.Router();

router.route("/").get(getNumber);

module.exports = router;
