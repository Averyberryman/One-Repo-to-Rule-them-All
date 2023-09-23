import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>The One Ringbase to Rule Them All</h1>
      </Link>
      <nav className="navbar">
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}

export default Header;
