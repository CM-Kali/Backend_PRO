const express=require("express");
const cors = require("cors");

const app=express();
app.use(express.json());
app.use("/api/users", require("./routes/user.routes"));



app.get('/',(req,res)=>{
    res.send("API Working");
});

module.exports=app;