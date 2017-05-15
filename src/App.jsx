import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import List from './Components/Products/List';
import Sidebar from './Components/Sidebar/sidebar';

const App = () => (
  <Router>
    <div className="wrapper">
      <Sidebar />
      <List />
    </div>

  </Router>
);

export default App;
