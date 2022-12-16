const express=require ('express');
const mongoose=require('mongoose')
const app=express();


app.get("/", function (req, res) {
    res.render("home");
});

app.listen(3000,()=>{
    
})