const express = require("express");
const router = express.Router();

const User = require("../Controller/UserController");

router.post("/userdetails", User.userDetails);
router.get("/userdisplay", User.userDisplay);
router.put("/userupdate/:id", User.userUpdate);
router.delete("/userdelete/:id", User.userDelete);

module.exports = router;
