import { Outlet } from 'react-router-dom';
import React from 'react'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div>
        <Outlet/>
      </div>
  </React.Fragment>
  );
}

export default App;
