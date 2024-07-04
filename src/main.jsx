import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Topnavbar from './components/Topnavbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Main from './pages/Main.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Topnavbar />
    <Navbar/>
    <Main/>
    <App />
  </BrowserRouter>
);
