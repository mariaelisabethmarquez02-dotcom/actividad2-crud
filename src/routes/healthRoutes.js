

const express = require("express");
const router = express.Router();


const {health}= require("../controllers/healthControllers");



router.get("/health", health);

module.exports = router;
