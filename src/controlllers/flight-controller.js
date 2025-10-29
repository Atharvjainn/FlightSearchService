const { FlightService } = require('../services/index')

const flightService = new FlightService()

const create = async (req,res) => {
    try {
        const flight = await flightService.CreateFlight(req.body)
        return res.status(201).json({
            data : flight,
            success : true,
            message : "Flight created successfully!",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a flight!",
            err : error
        })
    }
}


const getFlight = async (req,res) => {
    try {
        const flight = await flightService.GetFlight(req.params.id)
        return res.status(201).json({
            data : flight,
            success : true,
            message : "Fetched flight successfully!",
            err : {}
        })
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch a flight!",
            err : error
        })
    }
}

module.exports = {
    create,getFlight
}