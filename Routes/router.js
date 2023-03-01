const express = require("express")
const router  = new express.Router()
const db = require("../db/database")

// register user data

router.post("/api/post",(req,res)=>{
    console.log("datafgfgfgfgf",req.body)
    const {name,info,price,con,image}=req.body;
    const sqlInsert="INSERT INTO shoping (name,info,price,con,image) values(?,?,?,?,?)" 
    db.query(sqlInsert,[name,info,price,con,image],(error,result)=>{
        if(error){
            console.log(error)
        }
    })
})

//get Data 

router.get("/api/get",(req,res)=>{
    const sqlGet = "select * from shoping";
    db.query(sqlGet,(error,result)=>{
        console.log(result)
        console.log(error,"error")
        res.send(result)
    })
})


// get single user

router.get("/api/singleuser/:id",(req,res)=>{

    const {id} = req.params;

    db.query("SELECT * FROM shoping WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
            console.log(err)
        }else{
            res.status(201).json(result);
        }
    })
});


// user delete api

router.delete("/api/delete/:id",(req,res)=>{

    const {id} = req.params;

    db.query("DELETE FROM shoping WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});

// update users api


router.patch("/api/update/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;

    db.query("UPDATE shoping SET ? WHERE id = ? ",[data,id],(err,result)=>{
        if(err){
            res.status(422).json({message:"error"});
        }else{
            res.status(201).json(result);
        }
    })
});


module.exports = router
 