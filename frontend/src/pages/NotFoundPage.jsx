import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 - Page Not Found" description="The requested page could not be found." />
      <section className="section-padding mesh-bg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', textAlign: 'center', paddingTop: 'calc(var(--nav-height) + 4rem)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span className="badge-pill badge-amber" style={{ marginBottom: '1.5rem' }}>
              Error 404
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#FFFFFF', lineHeight: '1', marginBottom: '1rem' }}>
              <span className="gradient-text-amber">404</span>
            </h1>
            <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              Page Not Found
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button to="/" variant="primary" size="lg" iconLeft={<BsArrowLeft />}>
              Return to Homepage
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
