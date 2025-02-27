const express = require("express");
const app = express();
const Db = require("./Db/connection");
const userRouter = require("./Router/userRoutes");
const cors = require("cors");


app.use(express.json());
app.use(cors("*"));





Db();

app.use("/user/api",userRouter);





app.listen(4000,()=>{
    console.log("listening");
    
})