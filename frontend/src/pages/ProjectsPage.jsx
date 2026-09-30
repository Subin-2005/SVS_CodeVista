import React, { useState } from 'react';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { projectsData } from '../data/projectsData';

const categories = [
  'All Projects',
  'Management Systems',
  'Custom Web Applications',
  'Booking Systems',
  'Portfolio Websites',
  'E-Commerce Websites',
  'Custom Software Solutions'
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Portfolio & Case Studies - Projects We've Built"
        description="Explore production case studies built by SVS CodeVista, including gym management platforms, AI interview simulators, restaurant booking SaaS, and e-commerce stores."
      />

      {/* Hero */}
      <section className="section-padding mesh-bg" style={{ paddingTop: 'calc(var(--nav-height) + 3.5rem)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ maxWidth: '820px' }}>
            <span className="section-subtitle">Real Client Solutions</span>
            <h1 className="section-title">
              Projects <span className="gradient-text-amber">We've Built</span>
            </h1>
            <p className="section-description">
              Real solutions. Practical technology. Business-focused development. Explore how our engineering has driven measurable growth for our clients.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`estimator-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-full)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', minHeight: '50vh' }}>
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <CTASection
        title="Have a Similar Project in Mind?"
        text="Whether you need a management system, booking platform, or bespoke web application, let's discuss your technical requirements."
        primaryBtnText="Start Your Project"
        secondaryBtnText="Discuss Your Requirements"
      />
    </>
  );
}
