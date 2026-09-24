import React from 'react';
import { BsArrowRight, BsChatDots } from 'react-icons/bs';
import Button from './Button';

export default function CTASection({
  title = "Have an Idea? Let's Build It.",
  text = "Whether you need a business website, custom web application, management system, or a completely new digital product, let's discuss your requirements and build a scalable solution.",
  primaryBtnText = "Start Your Project",
  secondaryBtnText = "Talk to Our Engineers",
}) {
  return (
    <section className="section-padding" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="cta-banner">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="badge-pill badge-amber" style={{ marginBottom: '1.25rem' }}>
              <span className="pulse-dot pulse-dot-amber"></span> Ready to Take the Next Step?
            </span>
            <h2 className="cta-banner-title gradient-text-brand">
              {title}
            </h2>
            <p className="cta-banner-text">
              {text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                iconRight={<BsArrowRight />}
              >
                {primaryBtnText}
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                iconLeft={<BsChatDots />}
              >
                {secondaryBtnText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
