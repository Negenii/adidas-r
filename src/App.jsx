import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Content/content';
import Sidebar from './Sidebar/sidebar';

const App = () => (
  <Router>
    <div className="wrapper">
      <Sidebar />
      <Content />
    </div>

  </Router>
);

export default App;
