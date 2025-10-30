const { AirportService } = require('../services/index')

const airportService = new AirportService()

const create = async (req,res) => {
    try {
        const airport = await airportService.create(req.body)
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Successfully created a airport",
            err : {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a airport",
            err : error
        })
    }
}


const destroy = async (req,res) => {
    try {
        const airport = await airportService.destroy(req.params.id)
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Successfully deleted a airport",
            err : {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a airport",
            err : error
        })
    }
}



const get = async (req,res) => {
    try {
        const airport = await airportService.get(req.params.id)
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Successfully fetched a airport",
            err : {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch a airport",
            err : error
        })
    }
}


const getAll = async (req,res) => {
    try {
        const airport = await airportService.getAll()
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Successfully fetched the airports",
            err : {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch airports",
            err : error
        })
    }
}


const update = async (req,res) => {
    try {
        const airport = await airportService.update(req.params.id,req.body)
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Successfully updated the airports",
            err : {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update airports",
            err : error
        })
    }
}

module.exports = {
    create,destroy,get,getAll,update
}
