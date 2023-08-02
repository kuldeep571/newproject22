const mysql = require('mysql');
const config ={
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "newpro22"
}
const connection = mysql.createConnection(config);
connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("database is connected")
    }
})

module.exports.connection = connection;