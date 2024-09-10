const db=require('../databaseCnfig')
exports.signpuSaveData=(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    let password=req.body.password
    let confirmPassword=req.body.confirmPassword
    let value=[[name,email,password,confirmPassword]]
    let sql = 'insert into clientsingupData (name,email,password,confirmPassword) value ?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send('Your data has been submited')
        }
    })
}