import User from '../models/userModel.js';

export const createUser = async (req, res) => {
    try {
        const {name, email,password} = req.body;
        const user = await User.create({name, email, password});
        res.status(201).json({
            message: "User created successfully",
            user
        })
    } catch (error) {
        res.status(400).json({
            message: "Error creating user",
            error: error.message,
        });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Users retrieved successfully",
            users
        });
    } catch (error) {
        res.status(400).json({
            message: "Error retrieving users",
            error: error.message
        });
    }
};

export const getUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User retrieved successfully",
            user
        });
    } catch (error) {
        res.status(400).json({
            message: "Error retrieving user",
            error: error.message
        });
    }
}

export const updateUser = async (req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User updated successfully",
            user
        });
    } catch (error) {
        res.status(400).json({
            message: "Error updating user",
            error: error.message
        });
    }
}

export const deleteUser = async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "Error deleting user",
            error: error.message
        });
    }
}