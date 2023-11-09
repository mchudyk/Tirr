import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import '../App.css';



function Welcome() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-header">Welcome to Tirr!</h1>
      <div className="buttons-container">
        <button className="btn profile-btn">
          <a href="/profile">Profile Page</a>
        </button>
        <button className="btn financial-btn">
          <a href="/financialdetail1">Financial Page</a>
        </button>
      </div>
    </div>
  );
}

export default Welcome;



// function Welcome() {
//     return (
//       <div>
//         <h1>Welcome to Tirr</h1>
//         <Link to="/profile">Profile Page</Link>
//         <Link to="/financialdetail1">Financial Page</Link>
//       </div>
//     );
//   }
  
//   export default Welcome;