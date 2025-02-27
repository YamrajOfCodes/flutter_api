const router = require("express").Router();
const userController = require("../Contoller/userController");

router.get("/adduser",userController.adduser);



module.exports = router