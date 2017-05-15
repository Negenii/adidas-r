import React from 'react';
import './search.css';

export default () => (
  <div>
    <form className="search" action="index.html" method="post">
      <label htmlFor="search-input" className="search-input-label">Search</label>
      <input type="text" name="search" value="" />
    </form>
  </div>
  );
