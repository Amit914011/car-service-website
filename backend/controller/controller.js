const db=require('../databaseCnfig')

exports.saveData=(req,res)=>{
    let 

    let value=[[carName,carType]]
    let sql='insert into carservice(carName,carType) value ?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err 
        else{
            res.send('Your Data Has been Submited')
        }
    })
}

