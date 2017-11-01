// database configuration
var mysql=require('mysql');
var connection=mysql.createPool({

    connectionLimit: 100,
    host: '127.0.0.1',
    port: 3306,
    user: 'thisismyusername',
    password: 'thisismypassword',
    database: 'thisismydatabase',
    multipleStatements: true

});
module.exports=connection;
