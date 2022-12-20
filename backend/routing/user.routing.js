const express = require("express");
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    editUser,
} = require("../controllers/user.controllers");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.put("/:id", editUser);

module.exports = router;
