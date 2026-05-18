import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container home-page">
      <h1>Welcome to MERN Test App</h1>
      <p>This is a lightweight full-stack application connecting React with Express.</p>
      
      <div className="card-container">
        <div className="card">
          <h2>Frontend</h2>
          <ul>
            <li>React (Vite)</li>
            <li>React Router v6</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className="card">
          <h2>Backend</h2>
          <ul>
            <li>Node.js / Express</li>
            <li>CORS Middleware</li>
            <li>In-memory Database Model</li>
          </ul>
        </div>
      </div>
      
      <div className="action-buttons">
        <Link to="/users" className="btn btn-primary">View Users</Link>
      </div>
    </div>
  );
};

export default Home;
