import { useState, useEffect } from 'react';
import { userService } from '../services/api';
import { Trash2 } from 'lucide-react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllUsers();
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users. Ensure the backend server is running on port 5000.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this user?')) {
        try {
            await userService.deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch(err) {
            console.error('Error deleting user:', err);
            alert('Failed to delete user');
        }
    }
  }

  return (
    <div className="page-container">
      <h2>Users List</h2>
      
      {loading && <p className="loading">Loading users...</p>}
      
      {error && <div className="error-message">{error}</div>}
      
      {!loading && !error && users.length === 0 && (
        <p className="empty-state">No users found. Create one to get started!</p>
      )}
      
      {!loading && users.length > 0 && (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <button 
                onClick={() => handleDelete(user.id)} 
                className="btn-icon btn-danger"
                title="Delete User"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
