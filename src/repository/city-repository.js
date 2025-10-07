const { where } = require('sequelize');
const {City} = require('../models/index')

class CityRepository {
    async CreateCity({name}){
        try {
            const city = await City.create({name})
            return city;
        } catch (error) {
            throw(error)
        }
    }

    async DeleteCity({cityId}){
        try {
            await City.destroy({
                where:{
                    id : cityId
                }
            })
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = CityRepository