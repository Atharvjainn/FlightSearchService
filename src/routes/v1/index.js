const express = require('express')
const router = express.Router()
const CityController = require("../../controlllers/city-controller")

router.post('/city',CityController.create)
router.get('/city/:id',CityController.get)
router.delete('/city/:id',CityController.destroy)
router.patch('/city/:id',CityController.update)
router.get('/city',CityController.getAllcities)

module.exports = router