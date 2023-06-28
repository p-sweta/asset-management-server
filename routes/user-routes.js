const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const { authorize } = require("../middleware/auth");

router.route("/current").get(userController.getUser);
router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.loginUser);

module.exports = router;
