const express=require("express")
const app=express();
const usermodel=require("./usermodel");


app.get('/',(req,res)=>{
   res.send("Hello World");
})
// CReate new user 
app.get('/create',async(req,res)=>{
    let createuser=await usermodel.create({
        name:'Hammdu',
        email:"hammad12@gmail.com",
        username:"Madu"
    });
    res.send(createuser);

})  
//UPdate user
app.get('/update',async(req,res)=>{
       // usermodel.findOneAndUpdate(findone,update,{new:true});
      let updateuser=await usermodel.findOneAndUpdate({username:"CM KALI"},{name:"M Adeel"},{new:true});
       
      res.send(updateuser);
})
//Read
app.get('/read',async (req,res)=>{
   let readuserall=await usermodel.find();
   res.send(readuserall);
});

app.get('/delete',async (req,res)=>{
    let deleteuser=await usermodel.findOneAndDelete({username:"CM KALI"});
    res.send(deleteuser);
    console.log("adeel is deleted");
});













app.listen(3000,function(){
    console.log("Server running at http://localhost:3000")
});