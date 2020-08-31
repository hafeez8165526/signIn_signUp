const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{        
    res.render("index");
});
router.get("/register",(req,res)=>{
//console.log(req.body);
res.render("register");
});

module.exports=router;