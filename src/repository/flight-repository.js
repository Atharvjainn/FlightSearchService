const { Op, where } = require('sequelize')
const { Flight } = require('../models/index') 

class FlightRepository{

    #createFilter(data){
        const filter = {}
        if(data.arrivalairportId){
            filter.arrivalairportId = data.arrivalairportId
        }
        if(data.departureairportId){
            filter.departureairportId = data.departureairportId
        }

        let pricefilter = []
        if(data.minPrice){
            pricefilter.push({price : {[Op.gte] : data.minPrice}})
        }
        if(data.maxPrice){
            pricefilter.push({price : {[Op.lte] : data.maxPrice}})
        }

        Object.assign(filter,{[Op.and] : pricefilter})
        return filter
    }

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

    async GetAllFlights(filter){
        try {
            const filterobj = await this.#createFilter(filter)
            const flights = await Flight.findAll({
                where : filterobj
            })
            return flights;
        } catch (error) {
            console.log(error);            
            throw(error)
        }
    }

    async UpdateFlight(data,flightId){
        try {
            const flight = await Flight.update(data,{
                where:{
                    id : flightId
                }
            })
            return flight;
        } catch (error) {
            console.log(error);            
            throw(error)
        }
    }
}

module.exports = FlightRepository