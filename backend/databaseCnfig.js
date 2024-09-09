const mysql=require('mysql');

let databaseConnection=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'Amit@321',
    database:'noidacarhalping'
})

module.exports = databaseConnection;