const express = require('express')
const router = express.Router()
const CityController = require("../../controlllers/city-controller")

router.use('/city',CityController.create)

module.exports = router