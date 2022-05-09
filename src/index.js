import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Error404 from './pages/Error404';
import APropos from './pages/APropos';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='logement' element={<Logement />} />
        <Route path='*' element={<Error404 />} />
        <Route path='apropos' element={<APropos />} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
