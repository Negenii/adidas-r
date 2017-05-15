import React from 'react';
import Logo from './Logo/logo';
import Search from './Search/search';
import Navbar from './Navbar/navbar';
import './sidebar.css';

export default () => (
  <aside className="sidebar">
    <Logo />
    <Search />
    <Navbar />
  </aside>
);
