const router = require("express").Router();
const userController = require("../Contoller/userController");

router.post("/adduser",userController.adduser);
router.get("/getuser",userController.getuser);
router.get("/deleteuser",userController.deleteuser);

router.post("/adminlogin",userController.adminLogin);




module.exports = router