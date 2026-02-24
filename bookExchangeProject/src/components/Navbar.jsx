import React from 'react'

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
        <div className="navbar-logo">
            <img src="/src/assets/logo3.png" alt="Book Exchange Logo" />
        </div>
        <div className="navbar-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/books">Buy Books</a></li>
                <li><a href="/about">Sell Books</a></li>
                <li><a href="#">AI Recommendations</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#" className='login-btn'>Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
