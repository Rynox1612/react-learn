import { Link } from 'react-router-dom';
import { Home, Users, PlusCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">MERN Test</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <Home size={18} /> Home
        </Link>
        <Link to="/users" className="nav-link">
          <Users size={18} /> Users List
        </Link>
        <Link to="/users/new" className="nav-link btn-primary">
          <PlusCircle size={18} /> Create User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
