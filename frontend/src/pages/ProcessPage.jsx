import React from 'react';
import { 
  BsArrowRight, 
  BsCheck2Circle, 
  BsShieldCheck, 
  BsClockHistory, 
  BsChatLeftText, 
  BsCodeSlash 
} from 'react-icons/bs';
import Button from '../components/Button';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { processData } from '../data/processData';

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Our Process - From Idea to Launch"
        description="Discover SVS CodeVista's structured 5-step engineering methodology: Discover, Plan, Design, Develop, and Launch & Support."
      />

      {/* Hero */}
      <section className="section-padding mesh-bg" style={{ paddingTop: 'calc(var(--nav-height) + 3.5rem)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ maxWidth: '820px' }}>
            <span className="section-subtitle">How We Work</span>
            <h1 className="section-title">
              From Idea to <span className="gradient-text-amber">Launch</span>
            </h1>
            <p className="section-description">
              A transparent, disciplined 5-step software development process ensuring predictability, high code quality, and on-time project completion.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Process In-Depth Breakdown */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {processData.map((step, index) => (
              <div
                key={step.step}
                className="glass-card"
                style={{
                  padding: '3rem 2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'center'
                  }}
                >
                  {/* Left Column */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span
                        className="gradient-text-amber"
                        style={{
                          fontSize: '2.8rem',
                          fontWeight: 900,
                          fontFamily: 'var(--font-mono)',
                          lineHeight: 1
                        }}
                      >
                        {step.step}
                      </span>
                      <div>
                        <span className="badge-pill badge-amber" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>
                          Phase {step.step}
                        </span>
                        <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginTop: '0.2rem' }}>
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <div style={{ fontSize: '1.05rem', color: 'var(--secondary)', fontWeight: 600, marginBottom: '1rem' }}>
                      "{step.tagline}"
                    </div>

                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Right Column: Activities & Key Milestone Deliverable */}
                  <div
                    style={{
                      background: '#0A0F1D',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-md)',
                      padding: '2rem',
                    }}
                  >
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <BsCodeSlash style={{ color: 'var(--primary)' }} />
                      <span>Key Activities in This Phase</span>
                    </h4>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      {step.activities.map((act, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                          <BsCheck2Circle style={{ color: 'var(--secondary)', fontSize: '1rem', flexShrink: 0 }} />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        padding: '1rem',
                        background: 'rgba(245, 158, 11, 0.08)',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <strong style={{ fontSize: '0.78rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.2rem' }}>
                        Guaranteed Phase Deliverable:
                      </strong>
                      <span style={{ fontSize: '0.925rem', color: '#FFFFFF', fontWeight: 600 }}>
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards & Transparency Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Client Assurance</span>
            <h2 className="section-title">
              Our Transparency <span className="gradient-text-amber">Guarantees</span>
            </h2>
            <p className="section-description">
              How we keep you informed, in control, and confident throughout the entire engineering lifecycle.
            </p>
          </div>

          <div className="why-us-grid">
            <div className="why-card">
              <div style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1rem' }}><BsChatLeftText /></div>
              <h3 className="why-title">Weekly Sprint Demos</h3>
              <p>You never have to guess what's happening. We provide scheduled milestone demonstrations so you test features as they are built.</p>
            </div>

            <div className="why-card">
              <div style={{ color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: '1rem' }}><BsClockHistory /></div>
              <h3 className="why-title">On-Time Delivery Focus</h3>
              <p>By investing rigorous planning in the Discover and Plan phases, we avoid scope creep and hit agreed launch dates.</p>
            </div>

            <div className="why-card">
              <div style={{ color: '#60A5FA', fontSize: '1.8rem', marginBottom: '1rem' }}><BsShieldCheck /></div>
              <h3 className="why-title">100% Code Ownership</h3>
              <p>You receive full ownership of your source code, database architecture, and deployment documentation upon project completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <CTASection
        title="Ready to Begin Step 01 (Discover)?"
        text="Let's discuss your project requirements, user personas, and target timeline. We will prepare an initial technical scope document."
        primaryBtnText="Start Discovery Consultation"
        secondaryBtnText="View Our Case Studies"
      />
    </>
  );
}
