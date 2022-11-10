import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from './components/NavBar';
import RandomPage from './page/RandomPage';
import ByLetter from './page/ByLetter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<RandomPage/>} />
        <Route path="/ind" element={<ByLetter/>} />
        
      </Routes>
  </BrowserRouter>
</React.StrictMode>
);

reportWebVitals();
