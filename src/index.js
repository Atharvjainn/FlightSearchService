const express = require("express")
const bodyparser = require('body-parser')
const { PORT } = require('./config/serverConfig')
const cityclass = require('./repository/city-repository')

const setupAndStartServer = async () => {
    const app = express()

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`); 
        const Cityrepo = new cityclass()
        Cityrepo.DeleteCity({cityId:1})
    })
}

setupAndStartServer()