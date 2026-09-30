import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BsArrowRight,
  BsEnvelope,
  BsTelephone,
  BsCheckCircleFill,
  BsExclamationCircle,
  BsShieldCheck,
  BsClockHistory,
  BsChatDots
} from 'react-icons/bs';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { submitContactEnquiry } from '../services/api';

const projectTypes = [
  'Custom Web Application',
  'Business Website',
  'E-Commerce',
  'Booking System',
  'Management System',
  'Portfolio',
  'Landing Page',
  'Custom Software Solutions',
  'Other'
];

const budgetRanges = [
  'Not Sure',
  '₹5,000 - ₹10,000',
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+'
];

const normalizeProjectType = (val) => {
  if (!val) return 'Custom Web Application';
  const v = val.toLowerCase().trim();
  if (v.includes('business')) return 'Business Website';
  if (v.includes('e-commerce') || v.includes('ecommerce') || v.includes('store') || v.includes('shop')) return 'E-Commerce';
  if (v.includes('booking') || v.includes('appointment') || v.includes('reservation')) return 'Booking System';
  if (v.includes('management') || v.includes('portal') || v.includes('crm') || v.includes('erp')) return 'Management System';
  if (v.includes('portfolio')) return 'Portfolio';
  if (v.includes('landing')) return 'Landing Page';
  if (v.includes('software') || v.includes('solution')) return 'Custom Software Solutions';
  if (v.includes('web application') || v.includes('custom web')) return 'Custom Web Application';
  return projectTypes.includes(val) ? val : 'Custom Web Application';
};

const normalizeBudget = (val) => {
  if (!val) return 'Not Sure';
  const v = val.replace(/[–—]/g, '-').trim();
  if (budgetRanges.includes(v)) return v;
  if (v.includes('5,000') || v.includes('5000') || (v.includes('10,000') && !v.includes('25,000'))) return '₹5,000 - ₹10,000';
  if (v.includes('10,000') || v.includes('25,000') && !v.includes('50,000')) return '₹10,000 - ₹25,000';
  if (v.includes('25,000') && (v.includes('50,000') || v.includes('50000'))) return '₹25,000 - ₹50,000';
  if (v.includes('50,000') && (v.includes('1,00,000') || v.includes('100000'))) return '₹50,000 - ₹1,00,000';
  if (v.includes('1,00,000') || v.includes('100000+')) return '₹1,00,000+';
  return 'Not Sure';
};

export default function ContactPage() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    project_type: 'Custom Web Application',
    budget: 'Not Sure',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [apiError, setApiError] = useState(null);

  // Check if routed with prefilled values from ProjectEstimator or Services or Projects
  useEffect(() => {
    if (location.state) {
      setFormData((prev) => ({
        ...prev,
        project_type: location.state.prefillProjectType ? normalizeProjectType(location.state.prefillProjectType) : prev.project_type,
        budget: location.state.prefillBudget ? normalizeBudget(location.state.prefillBudget) : prev.budget,
        message: location.state.prefillNote ? `${location.state.prefillNote}\n\n` : prev.message,
      }));
    }
  }, [location.state]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name || formData.full_name.trim().length < 2) {
      newErrors.full_name = 'Please provide your full name (minimum 2 characters).';
    }

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description of your project (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (apiError) {
      setApiError(null);
    }
  };

  const getFieldError = (field) => {
    if (!errors || !errors[field]) return null;
    const err = errors[field];
    return Array.isArray(err) ? err.join(' ') : String(err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await submitContactEnquiry(formData);
      setSuccessResponse(response);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        company_name: '',
        project_type: 'Custom Web Application',
        budget: 'Not Sure',
        message: '',
      });
      setErrors({});
    } catch (err) {
      if (err && err.errors) {
        setErrors(err.errors);
      }
      setApiError(err?.message || 'Unable to submit enquiry. Please verify that the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us & Start Your Project"
        description="Discuss your project with SVS CodeVista. Submit your requirements for a business website, custom web app, management system, or e-commerce platform."
      />

      {/* Hero */}
      <section className="section-padding mesh-bg" style={{ paddingTop: 'calc(var(--nav-height) + 3.5rem)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ maxWidth: '820px' }}>
            <span className="section-subtitle">Get in Touch</span>
            <h1 className="section-title">
              Let's Discuss <span className="gradient-text-amber">Your Project</span>
            </h1>
            <p className="section-description">
              Tell us what you're looking to build. We'll understand your requirements and get back to you with an engineering assessment and roadmap within 24 hours.
            </p>
          </div>

          <div className="contact-layout-grid">
            {/* Left Column: Direct Contact Details & Trust */}
            <div>
              <div className="glass-card contact-info-card">
                <span className="badge-pill badge-amber" style={{ marginBottom: '1.25rem' }}>
                  <span className="pulse-dot pulse-dot-amber"></span> Direct Channels
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1.25rem' }}>
                  SVS CodeVista Head Office
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  Have an urgent requirement or want to discuss technical feasibility before submitting a full scope? Connect directly with our team.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="contact-channel-item">
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                      <BsEnvelope />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</span>
                      <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.95rem', wordBreak: 'break-all' }}>svscodevista@gmail.com</strong>
                    </div>
                  </div>

                  <div className="contact-channel-item">
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                      <BsTelephone />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call / WhatsApp</span>
                      <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.95rem' }}>+91 8122715090</strong>
                    </div>
                  </div>

                  <div className="contact-channel-item">
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(96, 165, 250, 0.15)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                      <BsClockHistory />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Response SLA</span>
                      <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.95rem' }}>Within 24 Hours Guaranteed</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Box */}
              <div className="glass-card" style={{ padding: '1.75rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <BsShieldCheck style={{ color: 'var(--secondary)', fontSize: '1.4rem', flexShrink: 0 }} />
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>Strict Confidentiality & NDA</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  Your business concept, specifications, and client details are strictly protected under non-disclosure. We never share proprietary project data with third parties.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div>
              <div className="glass-card contact-form-card">
                {successResponse ? (
                  /* Success Screen */
                  <div className="animate-fade-in" style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '2rem' }}>
                      <BsCheckCircleFill />
                    </div>
                    <span className="badge-pill badge-emerald" style={{ marginBottom: '1rem' }}>
                      Enquiry Received (ID #{successResponse.data?.id || 'REF'})
                    </span>
                    <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.85rem' }}>
                      Thank you! Your project enquiry has been received.
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                      We'll review your requirements for <strong>{successResponse.data?.project_type || 'your project'}</strong> and get back to you at <strong>{successResponse.data?.email || 'your email'}</strong> soon.
                    </p>

                    <Button
                      onClick={() => setSuccessResponse(null)}
                      variant="secondary"
                      size="md"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.35rem' }}>
                        Project Details & Requirements
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                        Fields marked with <span style={{ color: 'var(--primary)' }}>*</span> are required.
                      </p>
                    </div>

                    {apiError && (
                      <div className="alert-box alert-error" style={{ marginBottom: '1.25rem' }}>
                        <BsExclamationCircle style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                        <div>{apiError}</div>
                      </div>
                    )}

                    {/* Row 1: Name and Email (Stacked line-by-line on mobile) */}
                    <div className="form-row">
                      {/* Full Name */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="full_name">
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          id="full_name"
                          name="full_name"
                          type="text"
                          className={`form-control ${getFieldError('full_name') ? 'is-invalid' : ''}`}
                          placeholder="e.g. Rahul Sharma"
                          value={formData.full_name}
                          onChange={handleChange}
                          required
                        />
                        {getFieldError('full_name') && <span className="form-error">{getFieldError('full_name')}</span>}
                      </div>

                      {/* Email Address */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className={`form-control ${getFieldError('email') ? 'is-invalid' : ''}`}
                          placeholder="e.g. rahul@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {getFieldError('email') && <span className="form-error">{getFieldError('email')}</span>}
                      </div>
                    </div>

                    {/* Row 2: Phone and Company (Stacked line-by-line on mobile) */}
                    <div className="form-row">
                      {/* Phone Number */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={`form-control ${getFieldError('phone') ? 'is-invalid' : ''}`}
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {getFieldError('phone') && <span className="form-error">{getFieldError('phone')}</span>}
                      </div>

                      {/* Company Name */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="company_name">
                          Company / Business Name
                        </label>
                        <input
                          id="company_name"
                          name="company_name"
                          type="text"
                          className={`form-control ${getFieldError('company_name') ? 'is-invalid' : ''}`}
                          placeholder="e.g. Apex Tech Ltd"
                          value={formData.company_name}
                          onChange={handleChange}
                        />
                        {getFieldError('company_name') && <span className="form-error">{getFieldError('company_name')}</span>}
                      </div>
                    </div>

                    {/* Row 3: Project Type and Budget (Stacked line-by-line on mobile) */}
                    <div className="form-row">
                      {/* Project Type Dropdown */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="project_type">
                          Project Type <span className="required">*</span>
                        </label>
                        <select
                          id="project_type"
                          name="project_type"
                          className={`form-control ${getFieldError('project_type') ? 'is-invalid' : ''}`}
                          value={formData.project_type}
                          onChange={handleChange}
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type} style={{ background: '#0B1120', color: '#FFFFFF' }}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {getFieldError('project_type') && <span className="form-error">{getFieldError('project_type')}</span>}
                      </div>

                      {/* Budget Range Dropdown */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="budget">
                          Budget Range (Estimated)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className={`form-control ${getFieldError('budget') ? 'is-invalid' : ''}`}
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          {budgetRanges.map((b) => (
                            <option key={b} value={b} style={{ background: '#0B1120', color: '#FFFFFF' }}>
                              {b}
                            </option>
                          ))}
                        </select>
                        {getFieldError('budget') && <span className="form-error">{getFieldError('budget')}</span>}
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        Project Description / Scope Details <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className={`form-control ${getFieldError('message') ? 'is-invalid' : ''}`}
                        placeholder="Describe what you want to build, target audience, core features, and any timeline preferences..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.35rem' }}>
                        {getFieldError('message') ? (
                          <span className="form-error">{getFieldError('message')}</span>
                        ) : (
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                            Min. 10 characters
                          </span>
                        )}
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                          {formData.message.length} chars
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={loading}
                      style={{ width: '100%', marginTop: '0.5rem' }}
                      iconRight={<BsArrowRight />}
                    >
                      {loading ? 'Submitting Enquiry...' : 'Send Project Enquiry'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
