const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// In-memory data endpoints
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser); // Clean resource

module.exports = router;
