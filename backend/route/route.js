const express=require('express')
const router=express.Router()
const carRoute=require('../controller/controller')

router.post('/saveData',carRoute.saveData)
router.get('/getData',carRoute.getData)
router.delete('/deleteData/:id',carRoute.deleteData)
router.put('/updateData/:id',carRoute.updateData)
router.get('/viewData/:id',carRoute.viewData)

module.exports=router