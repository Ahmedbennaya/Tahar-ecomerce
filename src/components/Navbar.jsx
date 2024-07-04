// components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import logo from '../assets/logo/LOGONOIR.png';
import shoping from '../assets/logo/shoping.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/accueil">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/accueil">Accueil</Link></li>
          <li><Link to="/boutique">Boutique</Link></li>
          <li><Link to="/conseils">Conseils</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-shopping">
        <Link to="/panier" className="cart-container">
          <img src={shoping} alt="Shopping Cart" className="shopping-cart-icon" />
          <div className="cart-count">(0)</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
