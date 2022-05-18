import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Error404 from './pages/Error404';
import APropos from './pages/APropos';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "@fontsource/montserrat"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='logement' element={<Logement />} >
          <Route path=':logementId' element={<Logement />} />
        </Route>
        <Route path='*' element={<Error404 />} />
        <Route path='apropos' element={<APropos />} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode >
);

