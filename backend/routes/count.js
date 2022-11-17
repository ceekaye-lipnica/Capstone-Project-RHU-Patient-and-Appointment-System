const express = require("express");
const getCount = require('../controllers/patient-controller')
const router = express.Router();

router.get("/", getCount);

module.exports = router;