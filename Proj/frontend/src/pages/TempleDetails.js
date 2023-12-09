import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextPage.css';

function NextPage() {
  return (
    <div className="next-page-container">
      <div className="left-background"></div>
      <div className="content-container">
        <h1>You Are .......!?</h1>
        <Link to="/retrieve">
        <h1><button className="role-button">Admin</button></h1>
        </Link>
        <Link to="/register">
          <h1><button className="role-button">Client</button></h1>
        </Link>
        {/* <Link to="/fetch">
        <h1><button className="role-button">  Fetch  </button></h1>
        </Link> */}
        
      </div>
      {/* Decorative elements */}
      <div className="decoration decoration2"></div>
      <div className="decoration decoration3"></div>
      <div className="decoration decoration4"></div> {/* Add a new decoration */}
      {/* You can continue adding more decorative elements */}
    </div>
  );
}

export default NextPage;
