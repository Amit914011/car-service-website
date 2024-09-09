const express = require('express')
const db=require('./databaseCnfig')
const cors=require('cors')
const carRoute=require('./route/route')
const bodyParser = require('body-parser');

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
    carName varchar(255) null,
    carType varchar(255),
    primary key(id)
)
`
db.query(createTable,(err,result)=>{
    if(err) throw err
    else{
        console.log('table is created')
    }
})

app.use('/api',carRoute)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})