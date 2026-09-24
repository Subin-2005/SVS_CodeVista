import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsArrowRight,
  BsShieldCheck,
  BsSpeedometer2,
  BsPhone,
  BsCodeSquare,
  BsLayers,
  BsCheck2Circle,
  BsFillStarFill,
  BsChatSquareQuote
} from 'react-icons/bs';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TechCard from '../components/TechCard';
import ProblemSolution from '../components/ProblemSolution';
// import ProjectEstimator from '../components/ProjectEstimator';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { techData } from '../data/techData';
import { processData } from '../data/processData';
import { faqData } from '../data/faqData';

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <>
      <SEO
        title="We Build Digital Solutions That Grow Your Business"
        description="SVS CodeVista helps businesses build custom web applications, business websites, management systems, and e-commerce platforms using React, Django, and MySQL."
      />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="hero-section mesh-bg">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">
            {/* Left Column: Headlines & CTA */}
            <div>
              <div className="hero-badge-container">
                <span className="badge-pill badge-amber">
                  <span className="pulse-dot pulse-dot-amber"></span>
                  Software Development Agency
                </span>
              </div>

              <h1 className="hero-title">
                We Build Digital Solutions That <br />
                <span className="gradient-text-amber">Move Your Business Forward.</span>
              </h1>

              <p className="hero-description">
                From high-credibility business websites to custom web applications and management systems, <strong>SVS CodeVista</strong> helps businesses turn ideas into powerful, scalable digital products.
              </p>

              <div className="hero-cta-group">
                <Button to="/contact" variant="primary" size="lg" iconRight={<BsArrowRight />}>
                  Start Your Project
                </Button>
                <Button to="/projects" variant="secondary" size="lg">
                  View Our Work
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="hero-trust-indicators">
                <div className="trust-item">
                  <BsCodeSquare className="trust-icon" />
                  <span className="trust-label">Modern Technology</span>
                </div>
                <div className="trust-item">
                  <BsLayers className="trust-icon" />
                  <span className="trust-label">Custom Solutions</span>
                </div>
                <div className="trust-item">
                  <BsPhone className="trust-icon" />
                  <span className="trust-label">Responsive Design</span>
                </div>
                <div className="trust-item">
                  <BsShieldCheck className="trust-icon" />
                  <span className="trust-label">Business-Focused</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase & Interactive Architecture Visual */}
            <div style={{ position: 'relative' }}>
              {/* Floating tech badge top right */}
              <div className="floating-pill floating-pill-1 animate-float">
                <span className="pulse-dot pulse-dot-emerald"></span>
                <span>React + Django + MySQL</span>
              </div>

              {/* Terminal Code Card */}
              <div className="hero-visual-card">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                  </div>
                  <span className="terminal-title">SVS_Engine.py &bull; Production</span>
                </div>

                <div className="terminal-body">
                  <p className="code-comment">// SVS CodeVista Engineering Core</p>
                  <p>
                    <span className="code-keyword">class</span> <span className="code-fn">DigitalSolution</span>:
                  </p>
                  <p style={{ paddingLeft: '1.25rem' }}>
                    <span className="code-keyword">def</span> <span className="code-fn">__init__</span>(self, client_goal):
                  </p>
                  <p style={{ paddingLeft: '2.5rem' }}>
                    self.stack = [<span className="code-string">"React"</span>, <span className="code-string">"Django"</span>, <span className="code-string">"MySQL"</span>]
                  </p>
                  <p style={{ paddingLeft: '2.5rem' }}>
                    self.architecture = <span className="code-string">"Clean & Scalable"</span>
                  </p>
                  <p style={{ paddingLeft: '2.5rem' }}>
                    self.speed = <span className="code-string">"Sub-Second"</span>
                  </p>
                  <p style={{ paddingLeft: '2.5rem' }}>
                    self.business_roi = <span className="code-prop">True</span>
                  </p>
                  <p style={{ paddingLeft: '1.25rem' }}>
                    <span className="code-keyword">def</span> <span className="code-fn">deploy</span>(self):
                  </p>
                  <p style={{ paddingLeft: '2.5rem' }}>
                    <span className="code-keyword">return</span> <span className="code-string">"High-Converting Platform Ready 🚀"</span>
                  </p>

                  <div className="terminal-status-bar">
                    <div className="live-badge">
                      <span className="pulse-dot pulse-dot-emerald"></span>
                      <span>100% Relational Integrity</span>
                    </div>
                    <span style={{ color: 'var(--text-subtle)' }}>Status: Active</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge bottom left */}
              <div className="floating-pill floating-pill-2 animate-float" style={{ animationDelay: '2s' }}>
                <BsShieldCheck style={{ color: 'var(--secondary)' }} />
                <span>Zero Generic Templates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT PROBLEM SECTION
          ========================================================================= */}
      <ProblemSolution />

      {/* =========================================================================
          SERVICES SECTION: "What We Build"
          ========================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Core Capabilities</span>
            <h2 className="section-title">
              What We <span className="gradient-text-amber">Build</span>
            </h2>
            <p className="section-description">
              Practical digital solutions designed around your business needs, engineered with production-tested technologies.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/services" variant="secondary" size="lg" iconRight={<BsArrowRight />}>
              Explore Full Service Deliverables
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY SVS CODEVISTA
          ========================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Competitive Edge</span>
            <h2 className="section-title">
              Why Businesses Choose <span className="gradient-text-amber">SVS CodeVista</span>
            </h2>
            <p className="section-description">
              We focus not only on clean code, but on solving the actual business problem to deliver measurable growth.
            </p>
          </div>

          <div className="why-us-grid">
            <div className="why-card">
              <span className="why-number">01 / TAILORED</span>
              <h3 className="why-title">Custom-Built Solutions</h3>
              <p>We don't force your business into a one-size-fits-all template. Every architecture is tailored to your exact operational requirements.</p>
            </div>

            <div className="why-card">
              <span className="why-number">02 / ROBUST TECH</span>
              <h3 className="why-title">Modern Technology</h3>
              <p>We leverage Python, Django, React, and MySQL to ensure your system is secure, lightning fast, and easily maintainable.</p>
            </div>

            <div className="why-card">
              <span className="why-number">03 / MULTI-DEVICE</span>
              <h3 className="why-title">Responsive Experience</h3>
              <p>Our websites and applications work flawlessly across desktop, tablet, and mobile screens with zero visual compromise.</p>
            </div>

            <div className="why-card">
              <span className="why-number">04 / BUILT TO SCALE</span>
              <h3 className="why-title">Scalable Architecture</h3>
              <p>Solutions are engineered with modularity and clean database schemas, ready to handle increased user traffic and transactions.</p>
            </div>

            <div className="why-card">
              <span className="why-number">05 / TRANSPARENCY</span>
              <h3 className="why-title">Clear Communication</h3>
              <p>Clients always understand what is being developed and why through milestone demos and structured weekly progress updates.</p>
            </div>

            <div className="why-card">
              <span className="why-number">06 / ROI DRIVEN</span>
              <h3 className="why-title">Business-Focused Approach</h3>
              <p>We think like business partners. Every feature we build is aligned with user acquisition, retention, or operational efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGY SECTION
          ========================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Engineering Foundation</span>
            <h2 className="section-title">
              Built With <span className="gradient-text-amber">Modern Technology</span>
            </h2>
            <p className="section-description">
              We select battle-tested, enterprise-grade tools that guarantee reliability, speed, and long-term maintainability.
            </p>
          </div>

          <div className="tech-grid">
            {techData.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROJECTS / PORTFOLIO SECTION
          ========================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Proven Case Studies</span>
            <h2 className="section-title">
              Projects <span className="gradient-text-amber">We've Built</span>
            </h2>
            <p className="section-description">
              Real solutions. Practical technology. Business-focused development.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/projects" variant="primary" size="lg" iconRight={<BsArrowRight />}>
              Explore All Projects & Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SCOPE & BUDGET ESTIMATOR
          ========================================================================= */}
      {/* <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ProjectEstimator />
        </div>
      </section> */}

      {/* =========================================================================
          HOW WE WORK / 5-STEP PROCESS TIMELINE
          ========================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Engineering Delivery Roadmap</span>
            <h2 className="section-title">
              From Idea to <span className="gradient-text-amber">Launch</span>
            </h2>
            <p className="section-description">
              A structured 5-step engineering process that keeps projects on schedule, on budget, and built to specifications.
            </p>
          </div>

          <div className="process-timeline">
            {processData.map((step) => (
              <div key={step.step} className="process-step-card">
                <span className="process-number">{step.step}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--secondary)' }}>
                  <strong>Key Output:</strong> {step.deliverable}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/process" variant="secondary" size="md" iconRight={<BsArrowRight />}>
              View Detailed Process & Milestones
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
          ========================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text-amber">Questions</span>
            </h2>
            <p className="section-description">
              Clear answers to the most common questions clients ask before starting a project with SVS CodeVista.
            </p>
          </div>

          <FAQAccordion items={faqData} />
        </div>
      </section>

      {/* =========================================================================
          BUSINESS CTA SECTION
          ========================================================================= */}
      <CTASection />
    </>
  );
}
