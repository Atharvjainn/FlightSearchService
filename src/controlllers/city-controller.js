const { CityService } = require('../services/index')

const cityservice = new CityService()

const create = async (req,res) => {
    try {
        const city = await cityservice.CreateCity(req.body)
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err : {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        })
    }
}


const destroy =  async (req,res) => {
    try {
        const response = await cityservice.DeleteCity(req.params.id);
        return req.status(201).json({
            data : response,
            success : true,
            message : "Successfully deleted the city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        })
    }
}


const update = async (req,res) => {
    try {
        const city = await cityservice.UpdateCity(req.params.id,req.body)
        return req.status(201).json({
            data : city,
            success : true,
            message : "Successfully updated the city",
            err : {}
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update a city",
            err : error
        })
    }
}

const get = async(req,res) => {
    try {
        const city = await cityservice.getCity(req.params.id)
        return req.status(201).json({
            data : city,
            success : true,
            message : "City retrieved successfully",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update a city",
            err : error
        })
    }
}

module.exports = {
    create,destroy,update,get
}