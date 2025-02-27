const { model } = require("mongoose");
const userDb = require("../Model/userSchema");

const adduser = async(req,res)=>{
    try {
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
    } catch (error) {
        
    }
}




const getuser = async(req,res)=>{

        try {
            const user = await userDb.find({});
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            
        }
    }





















module.exports = {adduser,getuser};