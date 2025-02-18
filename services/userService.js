const userModel = require('../models/userModel');
const userModel1 = require('../models/userModel1');

const fetchAllUsers = () => {
    return userModel1.getAllUsers();
};

const fetchUserById = (id) => {
    const user = userModel.getUserById(id);
    if (!user) throw new Error("User not found");
    return user;
};

const createUser = (name, email) => {
    return userModel.createUser(name, email);
};

const updateUser = (id, updatedData) => {
    const updatedUser = userModel.updateUser(id, updatedData);
    if (!updatedUser) throw new Error("User not found");
    return updatedUser;
};

const deleteUser = (id) => {
    const deletedUser = userModel.deleteUser(id);
    if (!deletedUser) throw new Error("User not found");
    return deletedUser;
};

module.exports = { fetchAllUsers, fetchUserById, createUser, updateUser, deleteUser };