const { model } = require("mongoose");
const userDb = require("../Model/userSchema");
const adminDb = require("../Model/loginadmin");

const adduser = async(req,res)=>{
    try {
        const {pname,pphone,page} = req.body;
        
        
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


const deleteuser = async(req,res)=>{

    const {id} = req.params;

    try {
        const deletesingleuser = await userDb.findOneAndDelete({_id:id});
        res.status(200).json("data deleted successfully");
    } catch (error) {
        console.log(error);
        
    }
}

const adminLogin = async(req,res)=>{


    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({error:"All the fields are required"});
    }

    const admin = await adminDb.findOne({email:email});

    if(!admin){
        return res.status(400).json({error:"Invalid admin"}); 
    }else{
    
        if(admin.password == password){
            return res.status(200).json({msg:"sucess",token:"232323hjmnjmnio"});
        }else{
            return res.status(400).json({error:"password invalid"});
        }
    }

}





















module.exports = {adduser,getuser,deleteuser,adminLogin};