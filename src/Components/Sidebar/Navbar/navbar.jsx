import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../../fonts.css';

export default () => (
  <nav className="left-nav">
    <Link to="/item" className="left-menu-item current dropdown">Sports</Link>
    <Link to="/shoes" className="left-menu-sub-item current">Shoes</Link>
    <Link to="/clothing" className="left-menu-sub-item">Clothing</Link>
    <Link to="/accesories" className="left-menu-sub-item last">Accesories</Link>
    <Link to="/brands" className="left-menu-item">Brands</Link>
    <Link to="/micoach" className="left-menu-item">MiCoach</Link>
  </nav>
);
