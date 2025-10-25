const { CityRepository } = require('../repository/index')

class CityService {

    constructor () {
        this.cityrepository = new CityRepository();
    }

    async CreateCity(data){
        try {
            const city = await this.cityrepository.CreateCity(data)
            return city;
        } catch (error) {
            console.log("Something went wrong!");
            throw(error)
        }
    }

    async DeleteCity(cityId){
        try {
            const response = await this.cityrepository.DeleteCity(cityId)
            return response;
        } catch (error) {
            console.log("Something went wrong!");
            throw(error)
        }
    }


    async UpdateCity(cityId,data){
        try {
            const city = await this.cityrepository.UpdateCity(cityId,data)
            return city;
        } catch (error) {
            console.log("Something went wrong!");
            throw(error)
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityrepository.getCity(cityId)
            return city;
        } catch (error) {
            console.log("Something went wrong!");
            throw(error)
        }
    }

    async getAllcities(filter){
        try {
            const cities = await this.cityrepository.getAllcities(filter)
            return cities;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = CityService

