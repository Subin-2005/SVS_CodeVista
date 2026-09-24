export const projectsData = [
  {
    id: 'gym-management',
    slug: 'gym-management',
    title: 'Gym Management System',
    category: 'Management Systems',
    categorySlug: 'management-systems',
    tagline: 'End-to-end fitness center operations, member lifecycle, and automated recurring billing platform.',
    shortDesc: 'A complete management platform for gym members, automated attendance, workout plans, trainer scheduling, and renewal payment tracking.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    videos: {
      laptop: '/projects/gym/gym.mp4',
      mobile: '/projects/gym/gym-phone.mp4',
      laptopPoster: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      mobilePoster: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop'
    },
    technologies: ['React', 'Django', 'MySQL', 'REST Framework', 'Chart.js'],
    clientType: 'Commercial Fitness Centers & Multi-Branch Gyms',
    timeline: '4 Weeks',
    status: 'Live & Operational',
    problem: 'Fitness clubs struggled with manual Excel spreadsheets for tracking memberships, losing revenue due to uncollected renewals, high walk-in check-in congestion, and lack of visibility into daily trainer capacity and revenue growth.',
    solution: 'SVS CodeVista engineered a robust, centralized web application combining a member portal, front-desk QR/RFID check-in kiosk, automated WhatsApp/SMS renewal reminders, trainer class scheduling, and comprehensive financial audit analytics.',
    keyFeatures: [
      {
        title: 'Member Lifecycle & Digital Onboarding',
        desc: 'Instant registration with KYC, medical notes, membership plan selection, and automatic digital ID card generation.'
      },
      {
        title: 'Automated Billing & Expiry Alerts',
        desc: 'System sends automated reminder notifications 7, 3, and 1 day prior to membership expiry with direct online payment links.'
      },
      {
        title: 'Real-Time Attendance & Peak Hours Log',
        desc: 'QR-code check-in system that logs daily entries, tracks facility capacity, and generates peak vs off-peak analytics.'
      },
      {
        title: 'Trainer & Class Booking Engine',
        desc: 'Members can easily book 1-on-1 personal training sessions and group classes based on trainer real-time availability.'
      },
      {
        title: 'Financial & Growth Reporting',
        desc: 'Interactive dashboards displaying monthly recurring revenue (MRR), churn rate, active members, and cashflow breakdowns.'
      }
    ],
    architecture: {
      frontend: 'React.js SPA with responsive dashboard, state management for fast interactions, and Chart.js for revenue trend graphs.',
      backend: 'Django REST Framework with strict relational integrity in MySQL, automated background tasks for subscription alerts, and secure JWT authentication.',
      database: 'MySQL 8 with normalized schema across members, subscriptions, attendance logs, and transactions.'
    },
    results: [
      { metric: '94%', label: 'On-Time Renewal Collection Rate' },
      { metric: '70%', label: 'Reduction in Manual Front-Desk Admin Time' },
      { metric: '0%', label: 'Revenue Leakage from Expired Passes' },
      { metric: '100%', label: 'Accurate Real-Time Attendance Records' }
    ]
  },
  {
    id: 'ai-interview-simulator',
    slug: 'ai-interview-simulator',
    title: 'AI Interview Simulator',
    category: 'Custom Web Applications',
    categorySlug: 'custom-web-applications',
    tagline: 'Intelligent AI-driven interview practice platform with dynamic technical questioning and instant performance feedback.',
    shortDesc: 'An intelligent interview practice platform designed to help job seekers evaluate technical knowledge, communication clarity, and problem-solving skills.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    videos: {
      laptop: 'https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-keyboard-and-using-a-laptop-42907-large.mp4',
      mobile: 'https://assets.mixkit.co/videos/preview/mixkit-using-a-smartphone-with-a-blank-screen-43282-large.mp4',
      laptopPoster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      mobilePoster: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop'
    },
    technologies: ['React', 'Django', 'REST API', 'Web Speech API', 'MySQL'],
    clientType: 'EdTech Companies & Career Prep Platforms',
    timeline: '8 Weeks',
    status: 'Live & Operational',
    problem: 'Job aspirants and students lack access to personalized, realistic technical mock interviews. Existing coaching options are either prohibitively expensive or lack structured evaluation rubrics and instant feedback.',
    solution: 'We architected a dynamic simulation platform that analyzes user target job roles, generates contextual adaptive interview questions in real time, processes voice/text responses, and generates comprehensive scoring reports with targeted improvement recommendations.',
    keyFeatures: [
      {
        title: 'Adaptive Role-Based Question Engine',
        desc: 'Dynamically adapts question difficulty based on candidate response quality across Software Engineering, Product, and Data domains.'
      },
      {
        title: 'Voice & Text Real-Time Interaction',
        desc: 'Browser-based voice transcription paired with speech synthesis for natural conversation flow during simulated interviews.'
      },
      {
        title: 'Multi-Dimensional Evaluation Rubric',
        desc: 'Scores candidates across Technical Accuracy, Communication Clarity, Depth of Logic, and Confidence.'
      },
      {
        title: 'Detailed Performance Breakdown Report',
        desc: 'Generates downloadable PDF and interactive report cards highlighting strengths, weak points, and sample ideal answers.'
      },
      {
        title: 'Historical Progress Tracking',
        desc: 'Tracks improvement trajectory across multiple practice sessions over time.'
      }
    ],
    architecture: {
      frontend: 'React interface with audio recording canvas, timer widgets, and live transcript streaming.',
      backend: 'Django REST backend handling API rate limiting, LLM prompt orchestration, and session state persistence in MySQL.',
      database: 'MySQL structured tables for user profiles, session logs, question sets, and evaluation scores.'
    },
    results: [
      { metric: '88%', label: 'Candidate Confidence Boost' },
      { metric: '3.5x', label: 'Faster Skill Gap Identification' },
      { metric: '15k+', label: 'Simulated Questions Delivered' },
      { metric: '< 2s', label: 'Real-Time Evaluation Response Latency' }
    ]
  },
  {
    id: 'restaurant-hotel-platform',
    slug: 'restaurant-hotel-platform',
    title: 'Restaurant & Hotel Booking SaaS',
    category: 'Booking Systems',
    categorySlug: 'booking-systems',
    tagline: 'High-converting hospitality digital storefront, dynamic menu, and real-time table & room reservation system.',
    shortDesc: 'A premium restaurant & boutique hotel website with interactive menus, online table reservations, gallery showcases, and instant WhatsApp booking alerts.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    videos: {
      laptop: '/projects/restaurant/restaurant.mp4',
      mobile: '/projects/restaurant/hotel-phone.mp4',
      laptopPoster: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      mobilePoster: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop'
    },
    technologies: ['React', 'Django', 'MySQL', 'Axios', 'Tailored CSS'],
    clientType: 'Fine Dining Restaurants, Cafes, and Boutique Resorts',
    timeline: '2 Weeks',
    status: 'Live & Operational',
    problem: 'Hospitality businesses lose significant revenue paying high third-party aggregator commissions and experience phone booking errors during peak rush hours, coupled with static PDF menus that cannot be easily updated.',
    solution: 'We built a modern, branded digital portal with an interactive searchable digital menu, zero-commission direct table booking engine, room reservation calendar, and an instant kitchen/host management dashboard.',
    keyFeatures: [
      {
        title: 'Interactive Digital Menu & Dietary Filters',
        desc: 'Live categorization by cuisine, spice levels, chef specials, vegan/gluten-free badges, with instant price & item updates from admin.'
      },
      {
        title: 'Zero-Commission Table Reservation Engine',
        desc: 'Guests select party size, date, time slot, and seating area (rooftop, indoor, garden) with real-time slot locking.'
      },
      {
        title: 'WhatsApp & SMS Instant Confirmations',
        desc: 'Automatic confirmation and reminder messages sent directly to customer phones.'
      },
      {
        title: 'Host & Floor Management Dashboard',
        desc: 'Front-desk view of upcoming table reservations, seating assignments, and guest special requests (birthdays, anniversaries).'
      },
      {
        title: 'Event & Private Dining Booking Funnel',
        desc: 'Dedicated enquiry form for corporate lunches, private parties, and catering orders.'
      }
    ],
    architecture: {
      frontend: 'React client optimized for high-resolution food imagery, mobile speed, and one-click booking experience.',
      backend: 'Django REST API managing table slot availability algorithms, preventing double-bookings, and dispatching webhook notifications.',
      database: 'MySQL database storing menu items, table capacities, bookings, and customer profiles.'
    },
    results: [
      { metric: '+42%', label: 'Increase in Direct Table Bookings' },
      { metric: '₹0', label: 'Third-Party Aggregator Commission Paid' },
      { metric: '98%', label: 'Reduction in Phone Booking Booking Errors' },
      { metric: '< 1s', label: 'Average Mobile Page Load Time' }
    ]
  },
  {
    id: 'personal-portfolio',
    slug: 'personal-portfolio',
    title: 'Personal & Executive Portfolio Platform',
    category: 'Portfolio Websites',
    categorySlug: 'portfolio-websites',
    tagline: 'High-conversion personal branding, interactive case studies, dynamic project showcase, and client consultation funnel.',
    shortDesc: 'A bespoke personal portfolio website engineered for software leaders, consultants, and creative technologists to showcase high-impact projects and convert inbound client leads.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    videos: {
      laptop: '/portfolio/subin-portfolio.mp4',
      mobile: '/portfolio/portfolio-phone.mp4',
      laptopPoster: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      mobilePoster: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=600&auto=format&fit=crop'
    },
    technologies: ['React', 'Modern CSS', 'Vite', 'Django REST', 'MySQL'],
    clientType: 'Tech Leaders, Software Consultants & Creative Professionals',
    timeline: '1-2 Weeks',
    status: 'Live & Operational',
    problem: 'Professionals and independent consultants struggled with cookie-cutter portfolio builders that suffered from slow load speeds, poor mobile layouts, lack of interactive technical proof, and zero client conversion funnels.',
    solution: 'SVS CodeVista designed a high-performance personal platform featuring interactive project galleries, verified credentials showcase, downloadable media kit generator, and an automated lead capture consultation system.',
    keyFeatures: [
      {
        title: 'Interactive Project Showcase & Live Demos',
        desc: 'High-impact project presentation cards with live interactive demo links, GitHub integration, and technical case study deep-dives.'
      },
      {
        title: 'Direct Client Consultation Funnel',
        desc: 'Frictionless enquiry and discovery call scheduling integration that converts profile visitors into paying consulting clients.'
      },
      {
        title: 'Technical Skills & Architecture Matrix',
        desc: 'Structured breakdown of engineering proficiencies, languages, cloud frameworks, and verified certifications.'
      },
      {
        title: 'Dynamic Article & Thought Leadership Hub',
        desc: 'Integrated blog module with markdown support, code syntax highlighting, and social sharing optimizations.'
      },
      {
        title: 'Sub-Second Global CDN Performance',
        desc: '100/100 Google Lighthouse score with minified asset delivery, dark mode luxury aesthetic, and instant page transitions.'
      }
    ],
    architecture: {
      frontend: 'React.js single-page application with modular component hierarchy, custom CSS dark mode styling, and smooth micro-animations.',
      backend: 'Django REST API backend providing dynamic project management, contact message persistence, and rate-limited email notifications.',
      database: 'MySQL relational database for structured project metadata, client testimonials, and contact lead tracking.'
    },
    results: [
      { metric: '3.8x', label: 'Increase in Direct Inbound Client Leads' },
      { metric: '99+', label: 'Google Lighthouse Performance Score' },
      { metric: '< 0.8s', label: 'Average Mobile Page Load Time' },
      { metric: '100%', label: 'Custom Brand Identity Built from Scratch' }
    ]
  },
  {
    id: 'ecommerce-pro',
    slug: 'ecommerce-pro',
    title: 'CraftLoom E-Commerce Store',
    category: 'E-Commerce Websites',
    categorySlug: 'ecommerce-websites',
    tagline: 'High-speed D2C apparel platform with multi-gateway payments, inventory synchronization, and discount coupon engine.',
    shortDesc: 'A modern e-commerce platform built for high product conversion rates, smooth cart checkout, automated invoices, and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    videos: {
      laptop: 'https://assets.mixkit.co/videos/preview/mixkit-woman-shopping-online-with-a-credit-card-42866-large.mp4',
      mobile: 'https://assets.mixkit.co/videos/preview/mixkit-using-a-smartphone-with-a-blank-screen-43282-large.mp4',
      laptopPoster: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      mobilePoster: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop'
    },
    technologies: ['React', 'Django REST', 'MySQL', 'Axios', 'Payment Gateway'],
    clientType: 'Direct-to-Consumer (D2C) Retail Brands',
    timeline: '3-4 Weeks',
    status: 'Live & Operational',
    problem: 'The brand was losing mobile shoppers due to a slow, generic store template that took over 6 seconds to load, suffered cart abandonment, and had constant inventory sync errors with their physical warehouse.',
    solution: 'SVS CodeVista delivered a high-performance custom React storefront paired with a Django REST backend, sub-second product filtering, 2-step frictionless checkout, and instant inventory decrementing.',
    keyFeatures: [
      {
        title: 'Sub-Second Product Browsing & Faceted Search',
        desc: 'Instant filtering by size, color, price range, fabric type, and stock availability with zero page refresh.'
      },
      {
        title: 'Optimized 2-Step Checkout Workflow',
        desc: 'Frictionless checkout supporting UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery with address autocomplete.'
      },
      {
        title: 'Dynamic Coupon & Tiered Discount Engine',
        desc: 'Configurable promotional rules (buy X get Y, percentage discounts, first-order vouchers) calculated in real-time.'
      },
      {
        title: 'Automated Order Invoicing & Tracking',
        desc: 'PDF invoice generation and live shipping status tracking links sent via email and SMS upon dispatch.'
      }
    ],
    architecture: {
      frontend: 'React with optimistic UI updates for cart items and responsive image optimization.',
      backend: 'Django REST Framework with atomic database transactions to ensure zero overselling and secure payment webhooks.',
      database: 'MySQL handling product variants, order lines, coupon logs, and customer addresses.'
    },
    results: [
      { metric: '3.2x', label: 'Faster Page Load than Previous Store' },
      { metric: '+28%', label: 'Increase in Checkout Completion Rate' },
      { metric: '100%', label: 'Accurate Real-Time Inventory Sync' },
      { metric: '4.9★', label: 'Customer Checkout Rating' }
    ]
  },
  {
    id: 'logistics-portal',
    slug: 'logistics-portal',
    title: 'Fleet & Logistics Dispatch Hub',
    category: 'Custom Software Solutions',
    categorySlug: 'custom-software-solutions',
    tagline: 'Centralized fleet tracking, route allocation, trip manifest, and driver dispatch management system.',
    shortDesc: 'A high-reliability operations hub enabling logistics companies to manage vehicle fleets, assign routes to drivers, track cargo statuses, and generate fuel reports.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    videos: {
      laptop: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4',
      mobile: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-42995-large.mp4',
      laptopPoster: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      mobilePoster: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop'
    },
    technologies: ['React', 'Django', 'MySQL', 'REST APIs', 'Leaflet / Maps'],
    clientType: 'Freight Forwarders & Regional Transport Operators',
    timeline: '4-5 Weeks',
    status: 'Live & Operational',
    problem: 'Transport operators were managing over 80 commercial vehicles using phone calls and paper logbooks, leading to delayed deliveries, unaccounted fuel expenses, and zero real-time shipment visibility for end clients.',
    solution: 'We designed a mission-critical web software providing live fleet visibility, automated driver trip manifests, cargo consignment lifecycle status tracking, and automated maintenance reminders.',
    keyFeatures: [
      {
        title: 'Live Vehicle & Driver Dispatch Board',
        desc: 'Visual dispatch board showing vehicle status (Available, En Route, In Maintenance, Idle) and driver assignments.'
      },
      {
        title: 'Consignment & Waybill Tracking',
        desc: 'Unique tracking numbers generated per cargo unit with digital proof-of-delivery (POD) photo uploads.'
      },
      {
        title: 'Fuel & Expense Audit Analytics',
        desc: 'Log mileage against fuel receipts with automated anomaly detection for irregular fuel consumption.'
      },
      {
        title: 'Preventive Fleet Maintenance Reminders',
        desc: 'Automatic alerts when vehicles approach service thresholds based on odometer readings and insurance expiry dates.'
      }
    ],
    architecture: {
      frontend: 'React operations dashboard with interactive data tables, status badges, and rapid filtering.',
      backend: 'Django REST API handling complex multi-table relational queries, audit trails, and role-based permissions.',
      database: 'MySQL 8 with optimized indexing for rapid search over hundreds of thousands of consignment records.'
    },
    results: [
      { metric: '85%', label: 'Reduction in Dispatch Coordination Time' },
      { metric: '18%', label: 'Savings on Fleet Fuel & Maintenance Expenses' },
      { metric: '99.8%', label: 'On-Time Cargo Delivery Compliance' },
      { metric: '100%', label: 'Paperless Digital Dispatch Process' }
    ]
  }
];
