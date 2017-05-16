import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import List from './Components/Products/List';
import Show from './Components/Products/Show';
import Sidebar from './Components/Sidebar/sidebar';

const App = () => (
  <Router>
    <div className="wrapper">
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/item" component={Show} />
    </div>

  </Router>
);

export default App;
