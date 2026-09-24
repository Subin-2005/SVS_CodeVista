import React from 'react';
import { BsArrowRight, BsCheckCircleFill, BsShieldCheck, BsTerminal, BsCpu, BsPeople, BsGraphUp } from 'react-icons/bs';
import Button from '../components/Button';
import SEO from '../components/SEO';
import TechCard from '../components/TechCard';
import CTASection from '../components/CTASection';
import { techData } from '../data/techData';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us - We Turn Ideas Into Digital Products"
        description="Learn about SVS CodeVista, our development philosophy, mission, and how we engineer modern, scalable web applications and business platforms."
      />

      {/* Hero Section */}
      <section className="section-padding mesh-bg" style={{ paddingTop: 'calc(var(--nav-height) + 3.5rem)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ maxWidth: '820px' }}>
            <span className="section-subtitle">About SVS CodeVista</span>
            <h1 className="section-title">
              We Turn Ideas Into <br />
              <span className="gradient-text-amber">Digital Products.</span>
            </h1>
            <p className="section-description">
              SVS CodeVista is an independent software development company focused on building practical, scalable, and modern digital solutions for businesses, startups, and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge-pill badge-amber" style={{ marginBottom: '1rem' }}>
                <span className="pulse-dot pulse-dot-amber"></span> Who We Are
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', color: '#FFFFFF' }}>
                Engineers Who Understand Business Objectives
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                We believe that software is only as valuable as the business problem it solves. Rather than assembling generic website templates or over-engineering unnecessary complexity, we design and build bespoke digital systems engineered to perform.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Whether helping a fitness club automate membership renewals, enabling a brand to sell online with direct inventory sync, or developing a custom booking portal, our focus remains on clean engineering, relational integrity, and rapid load speed.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <BsCheckCircleFill style={{ color: 'var(--secondary)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Zero Bloatware & Pure Clean Code</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <BsCheckCircleFill style={{ color: 'var(--secondary)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Modern Full-Stack: React + Django + MySQL</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <BsCheckCircleFill style={{ color: 'var(--secondary)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Direct Engineer-to-Client Communication</span>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="glass-card" style={{ padding: '2.5rem', background: '#0D1424', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BsTerminal style={{ fontSize: '1.4rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem' }}>Our Engineering Focus</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Core Technical Principles</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--primary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.2rem' }}>1. Relational Integrity First</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We construct normalized, ACID-compliant MySQL database schemas to ensure your business data is always safe and accurate.</span>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--secondary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.2rem' }}>2. Reactive & Sub-Second UI</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We use React.js to create seamless, component-driven interfaces that feel instant and responsive on every device.</span>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: '#60A5FA', fontSize: '0.9rem', display: 'block', marginBottom: '0.2rem' }}>3. Enterprise Security</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Built on Django's battle-tested security model protecting against SQL injection, CSRF, and XSS out of the box.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding">
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto',
              background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.1) 0%, rgba(13, 19, 34, 0.95) 80%)',
              borderColor: 'rgba(245, 158, 11, 0.35)'
            }}
          >
            <span className="badge-pill badge-emerald" style={{ marginBottom: '1.25rem' }}>
              <span className="pulse-dot pulse-dot-emerald"></span> Our Mission
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: '1.3' }}>
              "To help businesses use technology to solve real problems, improve operations, and create better digital experiences."
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              We measure our success by the stability, reliability, and business impact of the software we launch for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">How We Build</span>
            <h2 className="section-title">
              Our Development <span className="gradient-text-amber">Philosophy</span>
            </h2>
            <p className="section-description">
              The fundamental standards that guide every line of code we write and every architecture we deploy.
            </p>
          </div>

          <div className="why-us-grid">
            <div className="why-card">
              <div style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1rem' }}><BsCpu /></div>
              <h3 className="why-title">Clean Architecture</h3>
              <p>We decouple the frontend interface from the backend business logic through standardized REST APIs, ensuring your platform is modular and future-proof.</p>
            </div>

            <div className="why-card">
              <div style={{ color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: '1rem' }}><BsShieldCheck /></div>
              <h3 className="why-title">Security by Default</h3>
              <p>Security is never an afterthought. We implement parameter binding, authenticated REST endpoints, and encrypted sessions across all apps.</p>
            </div>

            <div className="why-card">
              <div style={{ color: '#60A5FA', fontSize: '1.8rem', marginBottom: '1rem' }}><BsGraphUp /></div>
              <h3 className="why-title">Performance Optimization</h3>
              <p>Sub-second response times, optimized database queries with appropriate indexing, and minified bundles for rapid client browsing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Stack Selection</span>
            <h2 className="section-title">
              Technologies We <span className="gradient-text-amber">Use</span>
            </h2>
            <p className="section-description">
              Focused on a cohesive, modern stack: Python, Django, React, and MySQL.
            </p>
          </div>

          <div className="tech-grid">
            {techData.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <CTASection
        title="Ready to Build With Us?"
        text="Whether starting from scratch or modernizing an existing system, let's talk about how SVS CodeVista can bring your digital vision to life."
      />
    </>
  );
}
