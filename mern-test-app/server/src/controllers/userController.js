const User = require('../models/userModel');

// Get all users
exports.getUsers = (req, res) => {
  try {
    const users = User.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving users' });
  }
};

// Create a new user
exports.createUser = (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    
    const newUser = User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error creating user' });
  }
};

// Delete a user
exports.deleteUser = (req, res) => {
    try {
        const id = req.params.id;
        const deleted = User.deleteById(id);
        if (deleted) {
             res.status(200).json({ message: 'User deleted successfully' });
        } else {
             res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error deleting user' });
    }
}
