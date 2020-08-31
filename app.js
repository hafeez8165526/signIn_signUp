
const express=require("express");
const path=require("path");
const mysql=require("mysql");
var data=[];
//create connection
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"258456",
    database:"nodemysql",
    port:3307
});
const app=express();
//connect

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("mysql connected");
});
const publicDirectory=path.join(__dirname,"./public");
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","hbs");
//define routes
app.use("/",require("./routes/pages"));
app.use("/auth",require("./routes/auth"));   
app.listen("5500",function(){
    console.log("connected");
});

