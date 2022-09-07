const body_parser=require("body-parser");
const fs=require("fs");
const path=require("path");
const express=require("express");
const app=express();


app.use(body_parser.urlencoded({extended:false}));

app.get("/input",(req,res,next)=>{
    res.send("<html><head><title>Input</title></head><body><h1>Welcome to Anantaloop!!!</h1><br><form action='/running' method='POST'><label><b>Type Somethong Over Here:</b> </label><input type='text' name='name'></input><button>Submit</button></form></body></html>");
});

app.post("/running",(req,res,next)=>{
    let p=[]
    const word=req.body.name;
    //console.log(word);
    fs.writeFile(path.join(__dirname,"text.txt"),word,(err)=>{
        if(err)
            console.log(err);
            p.push(word)
            console.log(p)
            res.redirect("/");
    });
})
app.use("/",(req,res,next)=>{
res.send("<h1>Submitted successfully..!</h1>")
})

app.listen(1000)

