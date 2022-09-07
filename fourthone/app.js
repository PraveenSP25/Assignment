const body_parser=require("body-parser");
const fs=require("fs");
const path=require("path");
const express=require("express");
const app=express();


app.use(body_parser.urlencoded({extended:false}));

app.get("/input",(req,res,next)=>{
    res.send("<html><head><title>Input</title></head><body><h1>Welcome to Anantaloop!!!</h1><br><form action='/running' method='POST'><label><b>Type Somethong Over Here:</b> </label><input type='text' name='name'></input><button>Submit</button></form></body></html>");
});

const Data=[];
//app.use(express.json());
app.post("/running",(req,res,next)=>{
    const word=req.body.name;
    console.log(word);
    //if(word!==undefined)
        Data.push(word);
    res.redirect("/");
});


app.get("/",(req,res,next)=>{
    if(Data.length>0)
        res.send(Data[Data.length-1]);
    else
        res.send("<h2>empty</h2>");
        res.end()
});

app.listen(819);