const { User } = require("../models/User");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.log("Unable to get users:", error);
        return res.status(500).json({ message: "Unable to get users" });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Id is required" });

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        return user;
    } catch (error) {
        return res.status(500).json({ message: "Unable to get user" });
    }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password,
        });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Unable to create user" });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Id is required" });

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        await user.destroy();
        return res.status(200).json({ message: "User deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Unable to delete user" });
    }
};

const editUser = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Id is required" });

    const { name, email, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        await user.update({
            name,
            email,
            password,
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Unable to edit user" });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    editUser,
};
