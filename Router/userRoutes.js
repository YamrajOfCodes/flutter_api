const router = require("express").Router();
const userController = require("../Contoller/userController");

router.post("/adduser",userController.adduser);
router.get("/getuser",userController.getuser);



module.exports = router