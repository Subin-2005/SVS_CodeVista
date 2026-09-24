import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BsArrowRight, 
  BsCheck2Circle, 
  BsCheck2, 
  BsLightningCharge, 
  BsLayers, 
  BsShieldCheck 
} from 'react-icons/bs';
import { 
  FaGlobe, 
  FaShoppingCart, 
  FaLaptopCode, 
  FaCalendarCheck, 
  FaCogs, 
  FaUserTie, 
  FaRocket, 
  FaMicrochip 
} from 'react-icons/fa';
import Button from '../components/Button';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';

const iconMap = {
  FaGlobe: <FaGlobe />,
  FaShoppingCart: <FaShoppingCart />,
  FaLaptopCode: <FaLaptopCode />,
  FaCalendarCheck: <FaCalendarCheck />,
  FaCogs: <FaCogs />,
  FaUserTie: <FaUserTie />,
  FaRocket: <FaRocket />,
  FaMicrochip: <FaMicrochip />,
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services - Custom Web Development & Business Software"
        description="Explore SVS CodeVista's full suite of software development services: Business Websites, E-Commerce, Web Applications, Booking Systems, and Custom Management Solutions."
      />

      {/* Hero */}
      <section className="section-padding mesh-bg" style={{ paddingTop: 'calc(var(--nav-height) + 3.5rem)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ maxWidth: '820px' }}>
            <span className="section-subtitle">What SVS CodeVista Delivers</span>
            <h1 className="section-title">
              Practical Digital Solutions <br />
              <span className="gradient-text-amber">Engineered to Grow Your Business.</span>
            </h1>
            <p className="section-description">
              We architect, design, and build custom web applications, business platforms, and automated software solutions with modern React, Django, and MySQL.
            </p>
          </div>
        </div>
      </section>

      {/* Services In-Depth List */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {servicesData.map((service, index) => {
              const icon = iconMap[service.icon] || <FaLaptopCode />;
              const isEven = index % 2 === 1;

              return (
                <div
                  id={service.slug}
                  key={service.id}
                  className="glass-card"
                  style={{
                    padding: '3rem 2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    scrollMarginTop: '100px'
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '3rem',
                      alignItems: 'center'
                    }}
                  >
                    {/* Left Column: Details */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                        <div
                          style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '12px',
                            background: 'rgba(245, 158, 11, 0.15)',
                            color: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.6rem',
                            border: '1px solid rgba(245, 158, 11, 0.3)'
                          }}
                        >
                          {icon}
                        </div>
                        <div>
                          <span className="badge-pill badge-amber" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                            Service 0{index + 1}
                          </span>
                          <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginTop: '0.2rem' }}>
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                        {service.fullDesc}
                      </p>

                      <div style={{ marginBottom: '1.75rem' }}>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.6rem' }}>
                          Ideal For:
                        </strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {service.idealFor.map((client, idx) => (
                            <span key={idx} className="tech-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34D399' }}>
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Button
                          to="/contact"
                          state={{ prefillProjectType: service.title }}
                          variant="primary"
                          size="md"
                          iconRight={<BsArrowRight />}
                        >
                          Build {service.title} With Us
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Deliverables Card */}
                    <div
                      style={{
                        background: '#0A0F1D',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 'var(--radius-md)',
                        padding: '2rem',
                      }}
                    >
                      <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <BsCheck2Circle style={{ color: 'var(--secondary)' }} />
                        <span>Included Deliverables</span>
                      </h4>

                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                            <BsCheck2 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginTop: '3px', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                          Technology Implementation:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {service.technologies.map((t, idx) => (
                            <span key={idx} className="tech-pill">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <CTASection
        title="Need a Custom Software Solution?"
        text="If your requirements don't fit a standard category, we will engineer a custom software architecture specifically for your operational model."
      />
    </>
  );
}
