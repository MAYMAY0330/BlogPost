import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
        BlogApp
      </Link>
      <div className={styles.links} data-testid="desktop-links">
        <Link to="/" onClick={closeMobileMenu}>Home</Link>
        <Link to="/posts" onClick={closeMobileMenu}>Blog</Link>
        <Link to="/about" onClick={closeMobileMenu}>About</Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        data-testid="hamburger"
      >
        {isMobileMenuOpen ? '\u2715' : '\u2630'}
      </button>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu} data-testid="mobile-menu">
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/posts" onClick={closeMobileMenu}>Blog</Link>
          <Link to="/about" onClick={closeMobileMenu}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
