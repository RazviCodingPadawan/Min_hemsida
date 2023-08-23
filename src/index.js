import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Contact from './Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/min-hemsida">
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
