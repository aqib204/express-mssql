const { AppDataSource } = require("../database/config.js");
const { AdmUsers } = require("../database/entities/admUserEntity.js");

const userRepository = AppDataSource.getRepository(AdmUsers);

// Get all users from the database
const getAllUsers = async () => {
    const users = await userRepository.find();
    return users;
};

module.exports = { getAllUsers };
