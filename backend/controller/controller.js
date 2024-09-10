const db=require('../databaseCnfig')



// Save Data 

exports.saveData=(req,res)=>{
    let carServiceName = req.body.carServiceName
    let carServiceDetails = req.body.carServiceDetails
    let field1 = req.body.field1
    let field2 = req.body.field2
    let field3 = req.body.field3
    let field4 = req.body.field4
    let field5 = req.body.field5
    let field6 = req.body.field6
    let field7 = req.body.field7
    let field8 = req.body.field8
    let field9 = req.body.field9
    let field10 = req.body.field10
    let field11 = req.body.field11
    let field12 = req.body.field12
    let field13 = req.body.field13
    let field14 = req.body.field14
    let field15 = req.body.field15

    let value=[[carServiceName,carServiceDetails,field1,field2,field3,field4,field5,field6,field7,field8,field9,field10,field11,field12,field13,field14,field15]]
    let sql='insert into carservice(carServiceName,carServiceDetails,field1,field2,field3,field4,field5,field6,field7,field8,field9,field10,field11,field12,field13,field14,field15) value ?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err 
        else{
            res.send('Your Data Has been Submited')
        }
    })
}


// Get Data 

exports.getData=(req,res)=>{
    let sql='select * from carservice'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


// Delete Data

exports.deleteData=(req,res)=>{
    let id = req.params.id
    let sql = 'delete from carservice where id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Delete Successfully')
        }
    })
}

//  UpDate Data

exports.updateData=(req,res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update carservice set ? where id=?'
    // let value = [[sql,[newData,id]]]
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send('Your Data has been UpDate Successfully')
        }
    })
}



// view Data
exports.viewData=(req,res)=>{
    let id = req.params.id
    let sql='select * from carservice where id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}