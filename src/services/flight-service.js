const { FlightRepository,AirplaneRepository } = require('../repository/index')
const { comparetime } = require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository()
        this.flightRepository = new FlightRepository()
    }

    async CreateFlight(data){
        try {
            if(!comparetime(data.arrivalTime,data.departureTime)){
                throw {error : "arrival time should be greater than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightRepository.CreateFlight({
                    ...data,totalSeats : airplane.capacity
                })
            return flight;
        } catch (error) {
            console.log("Something went wrong!");
            throw(error)
        }
    }

    async GetFlight(flightId){
        try {
            const flight = await this.flightRepository.GetFlight(flightId)
            return flight;
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }

    async GetAllFlights(data){
        try {
            const flights = await this.flightRepository.GetAllFlights(data)
            return flights;
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }

    async UpdateFlight(data,flightId){
        try {
            const flight = await this.flightRepository.UpdateFlight(data,flightId)
            return flight;
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }
}


module.exports = FlightService