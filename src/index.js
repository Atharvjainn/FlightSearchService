const express = require("express")
const bodyparser = require('body-parser')
const { PORT } = require('./config/serverConfig')
const ApiRoutes = require('./routes/index')
const { City,airport } = require('./models/index')
const db = require('./models/index')

const setupAndStartServer = async () => {
    const app = express()

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    app.use('/api',ApiRoutes)
    
    app.listen(PORT,async () => {
        console.log(`Server started at ${PORT}`); 
        if(process.env.SYNC_DB === "true"){
            db.sequelize.sync({alter : true});
        }
        // const data =  await airport.findAll({
        //     include : [
        //         {
        //             model : City
        //         }
        //     ]
        // })
        // console.log(JSON.stringify(data, null, 2));

        // const city = await City.findOne({
        //     where : {
        //         id : 4
        //     }
        // })

        // const airports = await city.getAirports()
        // console.log(JSON.stringify(airports,null,2));     // this works when model is synced
        
    })
}

setupAndStartServer()