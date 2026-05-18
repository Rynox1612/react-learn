// Simple in-memory mock model to simulate DB without needing Mongo running
let users = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com' },
  { id: '2', name: 'Bob Johnson', email: 'bob@example.com' }
];

class User {
  static getAll() {
    return users;
  }

  static create(userData) {
    const newUser = {
      id: Date.now().toString(),
      ...userData
    };
    users.push(newUser);
    return newUser;
  }

  static deleteById(id) {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
  }
}

module.exports = User;
