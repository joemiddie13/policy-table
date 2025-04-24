import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>PolicyTable</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/policies">Policies</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;