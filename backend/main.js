const express = require('express')
const db=require('./databaseCnfig')
const cors=require('cors')
const carRoute=require('./route/route.js')
const bodyParser = require('body-parser');
const clientRouter=require('./route/clientLoginRoute.js')

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

db.connect((err)=>{
    if(err) throw err
    else{
        console.log('database is connected')
    }
})

let createTable=`
create table if not exists carservice(
    id int not null auto_increment,
    carServiceName varchar(255) null,
    carServiceDetails varchar(255) null,
    field1 varchar(255) null,
    field2 varchar(255) null,
    field3 varchar(255) null,
    field4 varchar(255) null,
    field5 varchar(255) null,
    field6 varchar(255) null,
    field7 varchar(255) null,
    field8 varchar(255) null,
    field9 varchar(255) null,
    field10 varchar(255) null,
    field11 varchar(255) null,
    field12 varchar(255) null,
    field13 varchar(255) null,
    field14 varchar(255) null,
    field15 varchar(255) null,
    primary key(id)
)
`
db.query(createTable,(err,result)=>{
    if(err) throw err
    else{
        console.log('table is created')
    }
})



// client signup table data

let signupTableCreate=`
 create table if not exists clientsingupData(
 id int not null auto_increment,
 name varchar(255) null,
 email varchar(255) null,
 password varchar(255),
 confirmPassword varchar(255),
 primary key (id)
 )
`
db.query(signupTableCreate,(err,result)=>{
    if(err) throw err
    else{
        console.log('Client Signup Table Created Successfully')
    }
})



app.use('/api',carRoute)

// client login api
app.use('/api',clientRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})