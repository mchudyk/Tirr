import React from 'react';
import { Link } from 'react-router-dom';

function FinancialDetail4() {
  return (
    <div>
      <h1>Financial Detail 4</h1>
      <Link to="/financialdetail1">Financial Detail 1</Link>
      <Link to="/financialdetail2">Financial Detail 2</Link>
      <Link to="/financialdetail3">Financial Detail 3</Link>
      <Link to="/financialdetail4">Financial Detail 4</Link>
      <Link to="/result">Result Page</Link>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default FinancialDetail4;