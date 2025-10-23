const express = require("express")
const router = express.Router()

const v1AppRouter = require('./v1/index')

router.use("/v1",v1AppRouter)

module.exports = router