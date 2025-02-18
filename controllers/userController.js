const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.fetchAllUsers();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
};

const getUserById = (req, res, next) => {
    try {
        const { id } = req.params;
        const user = userService.fetchUserById(parseInt(id, 10));
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

const createUser = (req, res, next) => {
    try {
        const { name, email } = req.body;
        const newUser = userService.createUser(name, email);
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        next(error);
    }
};

const updateUser = (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = userService.updateUser(parseInt(id, 10), req.body);
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        next(error);
    }
};

const deleteUser = (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = userService.deleteUser(parseInt(id, 10));
        res.status(200).json({ success: true, data: deletedUser });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
