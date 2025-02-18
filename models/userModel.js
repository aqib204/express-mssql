// In-memory array to simulate database
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

// Get all users
const getAllUsers = () => {
    return users;
};

// Get user by ID
const getUserById = (id) => {
    return users.find(user => user.id === id);
};

// Create a new user
const createUser = (name, email) => {
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email
    };
    users.push(newUser);
    return newUser;
};

// Update user by ID
const updateUser = (id, updatedData) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...updatedData };
    return users[index];
};

// Delete user by ID
const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    return users.splice(index, 1)[0];
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
