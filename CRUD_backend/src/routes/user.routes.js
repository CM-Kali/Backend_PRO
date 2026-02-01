const express = require("express");
const router = express.Router();

// Import the entire controller as an object
const userController = require("../controller/user.controller.js");

// Use functions with the object
router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
