// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsArrowRight, BsCalculator, BsCheckCircleFill } from 'react-icons/bs';
// import Button from './Button';

// const projectTypes = [
//   { id: 'Business Website', name: 'Business Website', estWeeks: '2-3 Weeks', baseBudget: '₹25,000 - ₹50,000' },
//   { id: 'E-Commerce', name: 'E-Commerce Store', estWeeks: '4-6 Weeks', baseBudget: '₹50,000 - ₹1,00,000' },
//   { id: 'Custom Web Application', name: 'Web Application', estWeeks: '6-10 Weeks', baseBudget: '₹1,00,000+' },
//   { id: 'Booking System', name: 'Booking System', estWeeks: '3-5 Weeks', baseBudget: '₹25,000 - ₹50,000' },
//   { id: 'Management System', name: 'Management System', estWeeks: '5-8 Weeks', baseBudget: '₹50,000 - ₹1,00,000' },
//   { id: 'Landing Page', name: 'Landing Page', estWeeks: '1-2 Weeks', baseBudget: 'Under ₹25,000' },
// ];

// export default function ProjectEstimator() {
//   const [selectedType, setSelectedType] = useState(projectTypes[0]);
//   const [needsAdmin, setNeedsAdmin] = useState(true);
//   const [needsApi, setNeedsApi] = useState(true);
//   const navigate = useNavigate();

//   const handleProceedToContact = () => {
//     navigate('/contact', {
//       state: {
//         prefillProjectType: selectedType.id,
//         prefillBudget: selectedType.baseBudget,
//         prefillNote: `Scope estimated with ${selectedType.name}, Admin Portal: ${needsAdmin ? 'Yes' : 'No'}, Custom REST API: ${needsApi ? 'Yes' : 'No'}.`
//       }
//     });
//   };

//   return (
//     <div className="estimator-box">
//       <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
//         <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <BsCalculator style={{ fontSize: '1.2rem' }} />
//         </div>
//         <div>
//           <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>Interactive Project Scope & Budget Calculator</h3>
//           <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-muted)' }}>
//             Select your requirements to see typical architecture timeline and budget parameters.
//           </p>
//         </div>
//       </div>

//       {/* Step 1: Select Type */}
//       <div style={{ marginBottom: '1.5rem' }}>
//         <label className="form-label" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
//           1. Select What You Need to Build:
//         </label>
//         <div className="estimator-options-grid">
//           {projectTypes.map((type) => (
//             <button
//               key={type.id}
//               type="button"
//               className={`estimator-chip ${selectedType.id === type.id ? 'active' : ''}`}
//               onClick={() => setSelectedType(type)}
//             >
//               {type.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Step 2: Add-on Capabilities */}
//       <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
//         <button
//           type="button"
//           onClick={() => setNeedsAdmin(!needsAdmin)}
//           className={`estimator-chip ${needsAdmin ? 'active' : ''}`}
//           style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
//         >
//           <BsCheckCircleFill style={{ color: needsAdmin ? 'var(--secondary)' : 'var(--text-subtle)' }} />
//           <span>Includes Admin Management Portal</span>
//         </button>
//         <button
//           type="button"
//           onClick={() => setNeedsApi(!needsApi)}
//           className={`estimator-chip ${needsApi ? 'active' : ''}`}
//           style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
//         >
//           <BsCheckCircleFill style={{ color: needsApi ? 'var(--secondary)' : 'var(--text-subtle)' }} />
//           <span>Includes REST API & MySQL Backend</span>
//         </button>
//       </div>

//       {/* Scope Estimate Summary Card */}
//       <div
//         style={{
//           background: 'rgba(11, 17, 32, 0.85)',
//           border: '1px solid rgba(255, 255, 255, 0.1)',
//           borderRadius: 'var(--radius-md)',
//           padding: '1.5rem',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//           gap: '1.5rem'
//         }}
//       >
//         <div>
//           <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
//             Estimated Engineering Scope for: <strong style={{ color: '#FFFFFF' }}>{selectedType.name}</strong>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
//             <div>
//               <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Est. Timeline: </span>
//               <strong style={{ color: 'var(--secondary)', fontSize: '1.05rem' }}>{selectedType.estWeeks}</strong>
//             </div>
//             <div>
//               <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Typical Budget: </span>
//               <strong style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>{selectedType.baseBudget}</strong>
//             </div>
//           </div>
//         </div>

//         <Button
//           onClick={handleProceedToContact}
//           variant="primary"
//           size="md"
//           iconRight={<BsArrowRight />}
//         >
//           Get Detailed Consultation with This Scope
//         </Button>
//       </div>
//     </div>
//   );
// }
