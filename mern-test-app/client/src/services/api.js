import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  getAllUsers: () => api.get('/users'),
  createUser: (userData) => api.post('/users', userData),
  deleteUser: (id) => api.delete(`/users/${id}`),
};

export default api;
