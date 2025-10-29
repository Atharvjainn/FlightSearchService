const express = require('express')
const router = express.Router()
const { CityController,FlightController } = require('../../controlllers/index')

router.post('/city',CityController.create)
router.get('/city/:id',CityController.get)
router.delete('/city/:id',CityController.destroy)
router.patch('/city/:id',CityController.update)
router.get('/city',CityController.getAllcities)

router.post('/flight',FlightController.create)
router.get("/flight/:id",FlightController.getFlight)
router.get("/flight",FlightController.getAllFlights)

module.exports = router