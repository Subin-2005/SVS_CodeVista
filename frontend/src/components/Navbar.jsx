import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & toggle body scroll lock
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container" style={{ height: '100%' }}>
          <div className="navbar-inner">
            {/* Brand Logo */}
            <Link to="/" className="brand-logo" aria-label="SVS CodeVista Home" onClick={() => setMobileMenuOpen(false)}>
              <div className="brand-logo-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8L3 12L7 16" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8L21 12L17 16" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 4L10 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span>SVS</span> <span className="vista">CodeVista</span>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav>
              <ul className="nav-menu">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                      end={link.path === '/'}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Action CTA */}
            <div className="nav-actions">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="btn-desktop-only"
                iconRight={<BsArrowRight />}
              >
                Let's Build Together
              </Button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <BsArrowRight style={{ opacity: 0.5 }} />
              </NavLink>
            </li>
          ))}
        </ul>
        <Button
          to="/contact"
          variant="primary"
          size="lg"
          style={{ width: '100%' }}
          iconRight={<BsArrowRight />}
          onClick={() => setMobileMenuOpen(false)}
        >
          Let's Build Together
        </Button>
      </div>
    </>
  );
}
