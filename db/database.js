const express = require("express")
const mysql = require("mysql2")



const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database :"shopingcard"
})

module.exports=db