const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    console.log("adddeddddddddddddddddddd")
})
app.listen(3000,()=>{
    console.log("server started")
})