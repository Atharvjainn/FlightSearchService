const { where } = require('sequelize');
const { City } = require('../models/index')
const { Op } = require('sequelize')

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
                    id : cityId,
                }
            })
            return true
        } catch (error) {
            throw(error)
        }
    }

    async UpdateCity(cityId,data){
        try {
            // const city = await City.update(data,{
            //     where:{
            //         id : cityId,
            //     }
            // })

            const city = await City.findByPk(cityId);
            city.name = data.name
            await city.save()
            return city;
        } catch (error) {
            console.log(error);
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId)
            // const city = await City.findOne({
            //     where : {
            //         id: cityId
            //     }
            // })
            console.log(city);
            
            return city;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllcities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where : {
                        name : {
                            // [Op.like] : `${filter.name}%`
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll()
            return cities;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CityRepository