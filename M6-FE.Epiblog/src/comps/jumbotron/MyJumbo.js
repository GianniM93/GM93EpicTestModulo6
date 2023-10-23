import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate()
  const location = useLocation();


  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/') };

    const exactRoute = location.pathname === '/home';

  return (
    <div className="bg-light p-5 rounded-lg m-3 border border-primary">
      <h1 className="display-4 text-primary">EpiBlog!</h1>
      <p className="lead">This is M6-Backend!</p>
      {exactRoute && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Welcome;
