import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextPage.css';

function NextPage() {
  return (
    <div className="next-page-container">
      <div className="left-background"></div>
      <div className="content-container">
        <h1>View Analytics...</h1>
        <Link to="/query1">
          <h1><button className="role-button">Revenue and Gold</button></h1>
        </Link>
        <Link to="/query2">
          <h1><button className="role-button">Temple Count</button></h1>
        </Link>
        <Link to="/query3">
        <h1><button className="role-button">Visitors Count</button></h1>
        </Link>
        {/* <Link to="/query3">
          <h1><button className="role-button">Query3</button></h1>
        </Link> */}
        
      </div>
     
      <div className="decoration decoration2"></div>
      <div className="decoration decoration3"></div>
      <div className="decoration decoration4"></div> 
    </div>
  );
}

export default NextPage;
