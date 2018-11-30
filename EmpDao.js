var emps=require('./Emp');
var mysql=require('mysql');
var con=require('./utils/conn.js');
var emps=[];
module.exports=class EmpBo{
    static add(e)
    {
        var connection=con.getConnection();
        var qry="insert into emp values("+e.eno+",'"+e.name+"','"+e.address+"')";
        connection.query(qry,(err,res)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                let i=res.affectedRows
                console.log(i);
            }
        });

    }
}