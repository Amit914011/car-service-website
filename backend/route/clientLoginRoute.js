const express = require('express')
const router = express.Router()
const clientRoute=require('../controller/clientLogin')

router.post('/clientSignupData',clientRoute.signpuSaveData)

module.exports=router