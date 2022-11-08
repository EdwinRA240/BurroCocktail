import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from './components/NavBar';
import RandomPage from './page/RandomPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<RandomPage/>} />
        
      </Routes>
  </BrowserRouter>
</React.StrictMode>
);

reportWebVitals();
