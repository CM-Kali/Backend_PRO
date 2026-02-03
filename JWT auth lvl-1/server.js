const app=require("./src/app")
require("dotenv").config();



const connectDB=require("./src/config/db")

connectDB();

app.listen(5000,()=>{
    console.log("Server is running at http://localhost:5000")
});

