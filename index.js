const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql2")
const db = require("./db/database")
const routes = require("./Routes/router")

// const db = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database :"shopingcard"
// })



app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(routes)


  

// app.post("/api/post",(req,res)=>{
//     const {name,info,price,con,image}=req.body;
//     const sqlInsert="INSERT INTO shoping (name,info,price,con,image) values(?,?,?,?,?)" 
//     db.query(sqlInsert,[name,info,price,con,image],(error,result)=>{
//         if(error){
//             console.log(error)
//         }
//     })
// })

// app.get("/",(req,res)=>{
//     const sqlInsert ="INSERT INTO student (name,email) values('sammek','sammek@gmail.com')"
//     db.query(sqlInsert,(err,result)=>{
//         console.log(err)
//         console.log(result.message,"result")
//         res.send("hell")
//     })
    
// })
app.listen(3500,()=>{
    console.log("server running ")
})