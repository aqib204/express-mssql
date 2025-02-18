const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);        // GET /api/users
router.get('/:id', userController.getUserById);    // GET /api/users/:id
router.post('/', userController.createUser);       // POST /api/users
router.put('/:id', userController.updateUser);     // PUT /api/users/:id
router.delete('/:id', userController.deleteUser);  // DELETE /api/users/:id

module.exports = router;
