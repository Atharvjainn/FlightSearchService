const { Flight } = require('../models/index') 

class FlightRepository{
    async CreateFlight(data){
        try {
            const flight = await Flight.create(data)
            return flight;
        } catch (error) {
            console.log(error);            
            throw(error)
        }
    }

    async GetFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId)
            return flight
        } catch (error) {
            console.log(error);            
            throw(error)
        }
    }
}

module.exports = FlightRepository