const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0990524914',
    database: 'api_users'
}); 
mysqlConnection.connect((err) => {
    if (!err)
        console.log("Connect Complete")
    else
        console.log("Cannot connect to mysql" + JSON.stringify(err, undefined, 2));
});
module.exports = mysqlConnection
