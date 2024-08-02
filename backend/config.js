const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mern_db'
})
connection.connect((err)=>{
    if(err) throw err;
    else{
        console.log('Connected to the database')
    }
})
module.exports=connection;