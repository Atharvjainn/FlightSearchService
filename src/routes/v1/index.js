const express = require('express')
const router = express.Router()
const { CityController,FlightController,AirportController } = require('../../controlllers/index')
const { FlightMiddleware } = require('../../middlewares/index')

router.post('/city',CityController.create)
router.get('/city/:id',CityController.get)
router.delete('/city/:id',CityController.destroy)
router.patch('/city/:id',CityController.update)
router.get('/city',CityController.getAllcities)

router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create)
router.get("/flights/:id",FlightController.getFlight)
router.get("/flights",FlightController.getAllFlights)
router.patch("/flights/:id",FlightController.update)


router.post('/airport',AirportController.create)
router.get("/airport/:id",AirportController.get)
router.get('/airport',AirportController.getAll)
router.delete("/airport/:id",AirportController.destroy)
router.patch('/airport/:id',AirportController.update)

module.exports = router