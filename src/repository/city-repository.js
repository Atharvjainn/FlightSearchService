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

    async DeleteCity(cityId){
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

    async UpdateCity(cityId,data){
        try {
            const city = await City.update(data,{
                where:{
                    id : cityId
                }
            })
            return city;
        } catch (error) {
            console.log(error);
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId)
            return city;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CityRepository