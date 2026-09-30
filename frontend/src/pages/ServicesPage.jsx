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
          <div className="services-list-container">
            {servicesData.map((service, index) => {
              const icon = iconMap[service.icon] || <FaLaptopCode />;
              const isEven = index % 2 === 1;

              return (
                <div
                  id={service.slug}
                  key={service.id}
                  className="glass-card service-detail-card"
                >
                  <div className="service-detail-grid">
                    {/* Left Column: Details */}
                    <div>
                      <div className="service-header-row">
                        <div className="service-header-icon-box">
                          {icon}
                        </div>
                        <div className="service-header-text">
                          <span className="badge-pill badge-amber" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                            Service 0{index + 1}
                          </span>
                          <h2 className="service-detail-title">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="service-detail-desc">
                        {service.fullDesc}
                      </p>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.6rem' }}>
                          Ideal For:
                        </strong>
                        <div className="service-ideal-tags">
                          {service.idealFor.map((client, idx) => (
                            <span key={idx} className="tech-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34D399' }}>
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="service-action-wrap">
                        <Button
                          to="/contact"
                          state={{ prefillProjectType: service.title }}
                          variant="primary"
                          size="md"
                          iconRight={<BsArrowRight />}
                        >
                          Start {service.title} Project
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Deliverables Card */}
                    <div className="service-deliverables-card">
                      <h4 className="service-deliverables-title">
                        <BsCheck2Circle style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                        <span>Included Deliverables</span>
                      </h4>

                      <ul className="service-deliverables-list">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="service-deliverable-item">
                            <BsCheck2 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginTop: '3px', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                          Technology Implementation:
                        </span>
                        <div className="service-tech-tags">
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
