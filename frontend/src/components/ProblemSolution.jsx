import React from 'react';
import { 
  BsExclamationTriangle, 
  BsCheckCircleFill, 
  BsArrowRight,
  BsGlobe2,
  BsCalendarCheck,
  BsShop,
  BsGrid1X2,
  BsLightbulb,
  BsLaptop
} from 'react-icons/bs';
import Button from './Button';

const problems = [
  {
    icon: <BsGlobe2 />,
    problem: 'Your business lacks a professional online presence',
    solution: 'We build a high-credibility, modern business website that immediately earns trust and drives customer enquiries.',
  },
  {
    icon: <BsLaptop />,
    problem: 'Your current website looks outdated & slow on mobile',
    solution: 'We re-engineer your digital identity with lightning-fast React architecture, sleek aesthetics, and flawless mobile experience.',
  },
  {
    icon: <BsCalendarCheck />,
    problem: 'You waste hours manually taking bookings & appointments',
    solution: 'We deploy an automated self-service booking system with real-time calendar availability and instant WhatsApp alerts.',
  },
  {
    icon: <BsShop />,
    problem: 'You need an e-commerce platform that actually converts',
    solution: 'We construct high-speed online stores with faceted product search, instant checkout, and automated inventory sync.',
  },
  {
    icon: <BsGrid1X2 />,
    problem: 'You rely on messy spreadsheets to manage your business operations',
    solution: 'We build a centralized custom management system with role-based access, attendance, renewals, and automated reporting.',
  },
  {
    icon: <BsLightbulb />,
    problem: "You have a new product idea but don't know how to turn it into software",
    solution: 'We partner with you from technical blueprint to production launch, engineering your MVP with full-stack React and Django.',
  }
];

export default function ProblemSolution() {
  return (
    <section className="section-padding mesh-bg" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-subtitle">Real-World Business Challenges</span>
          <h2 className="section-title">
            Your Business Has a Problem. <br />
            <span className="gradient-text-amber">We Build the Solution.</span>
          </h2>
          <p className="section-description">
            Off-the-shelf templates and generic builders fail to scale. We architect tailored digital tools designed around your specific business objectives.
          </p>
        </div>

        {/* 6 Problem / Solution Cards */}
        <div className="problem-solution-grid">
          {problems.map((item, index) => (
            <div key={index} className="problem-card">
              <div>
                <div className="problem-header">
                  <div className="problem-icon-wrapper">
                    {item.icon}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {item.problem}
                  </h4>
                </div>
              </div>

              <div className="solution-box">
                <div className="solution-box-header">
                  <BsCheckCircleFill />
                  <span>How SVS CodeVista Solves This</span>
                </div>
                <p className="solution-box-text">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner Below Problems */}
        <div
          className="glass-card"
          style={{
            marginTop: '3.5rem',
            padding: '2.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(10, 15, 29, 0.8))',
            borderColor: 'rgba(16, 185, 129, 0.3)'
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
            You bring the idea. <span className="gradient-text-emerald">We turn it into a working digital solution.</span>
          </h3>
          <p style={{ maxWidth: '650px', margin: '0 auto 1.5rem auto', color: 'var(--text-muted)' }}>
            Tell us about your operational bottleneck or product concept. We'll map out the exact technical architecture to make it reality.
          </p>
          <Button to="/contact" variant="emerald" size="md" iconRight={<BsArrowRight />}>
            Discuss Your Business Problem
          </Button>
        </div>
      </div>
    </section>
  );
}
