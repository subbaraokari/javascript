var mysql=require('mysql');
var dbProps=require('./props');
module.exports={
    getConnection:()=>{
       return mysql.createConnection({
            host:dbProps.host,
            user:dbProps.uname,
            password:dbProps.pwd,
            database:dbProps.database
        });
    }
}