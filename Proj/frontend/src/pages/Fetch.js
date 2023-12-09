import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextPage.css';
function NextPage() {
  return (
    <div className="next-page-container">
      <div className="left-background"></div>
      <div className="content-container">
        <h1>Choose Your Need</h1>
        
        <Link to="/search">
        <h1><button className="role-button">Search</button></h1>
        </Link>
        <Link to="/updatetemple">
          <h1><button className="role-button">Update</button></h1>
        </Link>
        <Link to="/deletetemple">
        <h1><button className="role-button">Delete</button></h1>
        </Link>
        
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
