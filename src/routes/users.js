const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/UserController");
const validateToken = require("../app/middleware/validateTokenHandler");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", validateToken, userController.profile);

module.exports = router;
