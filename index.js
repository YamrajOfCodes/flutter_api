const express = require("express");
const app = express();
const Db = require("./Db/connection");
const userDb = require("./Model/userSchema");

app.use(express.json());




Db();

app.post("/person/data",async(req,res)=>{

  const {pname,pphone,page} = req.body;

  if(!pname || pphone || !page){
    return res.status(400).json({error:"all fields are required"});
  }
  
  const user = new userDb({
    username:pname,
    phone:pphone,
    age:page,
  })

  await user.save();
    

    res.status(200).send({
        "statuscode":200,
        "message":"the data has sent",
        "data":user
    })

 
    
})



app.get("/person/data",async(req,res)=>{

    try {
        const user = await userDb.find({});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        
    }
})




app.listen(4000,()=>{
    console.log("listening");
    
})