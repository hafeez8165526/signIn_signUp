const express=require("express");
const path=require("path");
const mysql=require("mysql");
//create connection
var data;
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"258456",
    database:"nodemysql",
    port:3307
});
//connect

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("mysql connected");
});
exports.register=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    db.query("INSERT INTO student SET ?",{name:name,email:email,password:password},(err,result)=>{
        if(err){
            console.log(err);
            res.send("email exists");
       }
       else{
           console.log(result);
           res.render("profile");
       }
    })
}
exports.login=(req,res)=>{
    let flag=false;
    const email=req.body.email;
    const password=req.body.password;
    db.query("select * from student",(err,result,field)=>{
        if(err){
            console.log(err);
        }else if(result){
            data=result;
        }  
    for(let obj of data){    
    if (obj.email==email){
        if(obj.password==password){
            res.send(`<h2>Welcome ${obj.name}</h2>`);
            flag=true;
            break
        }else{
            res.send("Password wrong");
            break
        }
    }
  }
  if(!flag){
      res.send("unkown user");
  }
    });  
}