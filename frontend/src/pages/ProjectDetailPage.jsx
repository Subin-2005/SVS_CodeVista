import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  BsArrowLeft, 
  BsArrowRight, 
  BsCheckCircleFill, 
  BsCalendar3, 
  BsLayers, 
  BsCpu, 
  BsDatabase, 
  BsSpeedometer2,
  BsShieldCheck
} from 'react-icons/bs';
import Button from '../components/Button';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import ProjectVideoShowcase from '../components/ProjectVideoShowcase';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO
        title={`${project.title} - Case Study`}
        description={project.shortDesc}
      />

      {/* Project Hero Header */}
      <section className="project-detail-hero">
        <div className="container">
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}
          >
            <BsArrowLeft />
            <span>Back to All Projects</span>
          </Link>

          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge-pill badge-amber">
                {project.category}
              </span>
              <span className="badge-pill badge-emerald">
                <span className="pulse-dot pulse-dot-emerald"></span> {project.status}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', color: '#FFFFFF', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              {project.title}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
              {project.tagline}
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Button
                to="/contact"
                state={{ prefillProjectType: project.category, prefillNote: `Interested in building a platform similar to ${project.title}.` }}
                variant="primary"
                size="lg"
                iconRight={<BsArrowRight />}
              >
                Have a Similar Project? Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image / Mockup Showcase */}
      <section style={{ background: 'var(--bg-secondary)', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: 'var(--shadow-lg)',
              maxHeight: '480px'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(7, 9, 14, 0.95), transparent)',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((t, i) => (
                  <span key={i} className="tech-pill" style={{ background: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Engineering Timeline: <strong style={{ color: '#FFFFFF' }}>{project.timeline}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Demonstration (Laptop & Mobile Views) */}
      <ProjectVideoShowcase project={project} />

      {/* Case Study Details Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="project-detail-grid">
            {/* Left Main Content */}
            <div>
              {/* Problem Section */}
              <div className="case-study-card">
                <span className="section-subtitle" style={{ color: '#EF4444' }}>The Client Challenge</span>
                <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Problem Statement
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
                  {project.problem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="case-study-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>Our Engineering Approach</span>
                <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                  The SVS CodeVista Solution
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                  {project.solution}
                </p>
              </div>

              {/* Key Features */}
              <div className="case-study-card">
                <span className="section-subtitle">Functional Architecture</span>
                <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Key Engineering Features
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1.25rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <BsCheckCircleFill style={{ color: 'var(--secondary)', fontSize: '1rem' }} />
                        <span>{feat.title}</span>
                      </h4>
                      <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.5rem' }}>
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Architecture */}
              <div className="case-study-card">
                <span className="section-subtitle">System Architecture</span>
                <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Technical Stack & Data Design
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(96, 165, 250, 0.15)', color: '#60A5FA' }}>
                      <BsLayers style={{ fontSize: '1.25rem' }} />
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF', fontSize: '0.95rem', display: 'block', marginBottom: '0.2rem' }}>Frontend Layer (React.js)</strong>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>{project.architecture.frontend}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(52, 211, 153, 0.15)', color: '#34D399' }}>
                      <BsCpu style={{ fontSize: '1.25rem' }} />
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF', fontSize: '0.95rem', display: 'block', marginBottom: '0.2rem' }}>Backend Core (Django REST Framework)</strong>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>{project.architecture.backend}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24' }}>
                      <BsDatabase style={{ fontSize: '1.25rem' }} />
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF', fontSize: '0.95rem', display: 'block', marginBottom: '0.2rem' }}>Database Schema (MySQL 8 Relational)</strong>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>{project.architecture.database}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Meta Specs & Results */}
            <div>
              {/* Measurable Business Impact */}
              <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                <span className="badge-pill badge-amber" style={{ marginBottom: '1rem' }}>
                  <span className="pulse-dot pulse-dot-amber"></span> Measurable Results
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Business Impact
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {project.results.map((res, idx) => (
                    <div key={idx} style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                      <div className="gradient-text-amber" style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                        {res.metric}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Meta Card */}
              <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '1.25rem' }}>
                  Project Overview
                </h4>
                <ul className="spec-list">
                  <li className="spec-item">
                    <span className="spec-label">Target Audience:</span>
                    <span className="spec-value" style={{ textAlign: 'right', fontSize: '0.85rem' }}>{project.clientType}</span>
                  </li>
                  <li className="spec-item">
                    <span className="spec-label">Delivery Timeline:</span>
                    <span className="spec-value">{project.timeline}</span>
                  </li>
                  <li className="spec-item">
                    <span className="spec-label">Development Stack:</span>
                    <span className="spec-value">React, Django, MySQL</span>
                  </li>
                  <li className="spec-item">
                    <span className="spec-label">Project Status:</span>
                    <span className="spec-value" style={{ color: 'var(--secondary)' }}>{project.status}</span>
                  </li>
                </ul>

                <div style={{ marginTop: '1.5rem' }}>
                  <Button
                    to="/contact"
                    state={{ prefillProjectType: project.category, prefillNote: `Inquiry regarding ${project.title}.` }}
                    variant="primary"
                    size="md"
                    style={{ width: '100%' }}
                    iconRight={<BsArrowRight />}
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <CTASection
        title="Ready to Build Your Custom Software?"
        text={`Whether you need a platform similar to ${project.title} or a completely new custom web application, our engineers are ready to build it.`}
        primaryBtnText="Start Your Project"
        secondaryBtnText="Discuss Your Requirements"
      />
    </>
  );
}
