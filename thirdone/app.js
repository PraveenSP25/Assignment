
const fs=require("fs");
const express=require("express");
const app=express();
const path=require("path");
const bodyParser=require("body-parser");

app.get("/",(req,res,next)=>{
    let text=[];
    text.push(fs.readFileSync(path.join(__dirname,"text.txt"),(err)=>{
       if(err)
        console.log("Something went wrong in the fetching the file");
    }));
    //Data=text.toString()
    text=text.toString();
    //console.log(Data)
    //res.send(Data)
    console.log(text);
    res.end(text);
    
});

app.listen(100);