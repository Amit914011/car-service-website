const express=require('express')
const router=express.Router()
const carRoute=require('../controller/controller')

router.post('/saveData',carRoute.saveData)

module.exports=router