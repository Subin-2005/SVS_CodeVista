import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsEnvelope, BsTelephone, BsCheckCircle } from 'react-icons/bs';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top mini-CTA Card */}
        <div className="glass-card footer-top-card">
          <div>
            <span className="badge-pill badge-amber" style={{ marginBottom: '0.75rem' }}>
              <span className="pulse-dot pulse-dot-amber"></span> Next Step
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginTop: '0.4rem' }}>
              Have a project in mind? Let's talk.
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              From initial idea to production launch, we build solutions that move your business forward.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" iconRight={<BsArrowRight />}>
            Start Your Project
          </Button>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand & Promise */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              <div className="brand-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8L3 12L7 16" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 8L21 12L17 16" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 4L10 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span>SVS</span> <span className="vista">CodeVista</span>
              </div>
            </Link>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              We build modern, scalable, business-focused digital solutions that solve real-world problems and drive long-term growth.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <BsEnvelope style={{ color: 'var(--primary)' }} />
                <span>svscodevista@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <BsTelephone style={{ color: 'var(--secondary)' }} />
                <span>+91 8122715090</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/projects" className="footer-link">Portfolio & Case Studies</Link></li>
              <li><Link to="/process" className="footer-link">How We Work (Process)</Link></li>
              <li><Link to="/contact" className="footer-link">Contact & Enquiry</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="footer-col-title">Primary Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services" className="footer-link">Business Websites</Link></li>
              <li><Link to="/services" className="footer-link">E-Commerce Stores</Link></li>
              <li><Link to="/services" className="footer-link">Custom Web Applications</Link></li>
              <li><Link to="/services" className="footer-link">Online Booking Systems</Link></li>
              <li><Link to="/services" className="footer-link">Management Systems</Link></li>
              <li><Link to="/services" className="footer-link">Custom Software Solutions</Link></li>
            </ul>
          </div>

          {/* Col 4: Technology Stack */}
          <div>
            <h4 className="footer-col-title">Technology Stack</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <BsCheckCircle style={{ color: 'var(--secondary)', fontSize: '0.85rem' }} /> Python / Django
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <BsCheckCircle style={{ color: 'var(--secondary)', fontSize: '0.85rem' }} /> React.js & Vite
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <BsCheckCircle style={{ color: 'var(--secondary)', fontSize: '0.85rem' }} /> MySQL Database
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <BsCheckCircle style={{ color: 'var(--secondary)', fontSize: '0.85rem' }} /> Django REST Framework
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <BsCheckCircle style={{ color: 'var(--secondary)', fontSize: '0.85rem' }} /> Axios Communication
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 <strong>SVS CodeVista</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-subtle)' }}>Professional Software Development Agency</span>
            <span style={{ color: 'var(--text-subtle)' }}>Made with Python, Django & React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
