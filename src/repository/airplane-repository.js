const { Airplane } = require('../models/index')

class AirplaneRepository{
    async CreateAirplane(data){
        try {
            const airplane = await Airplane.create(data)
            return airplane;
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }

    async getAirplane(airplaneId){
        try {
            const airplane = await Airplane.findByPk(airplaneId)
            return airplane;
        } catch (error) {
            console.log(error);
            throw(error)            
        }
    }

}

module.exports = AirplaneRepository