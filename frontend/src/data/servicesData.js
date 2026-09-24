export const servicesData = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    slug: 'business-websites',
    icon: 'FaGlobe',
    shortDesc: 'Professional and responsive websites designed to build credibility, present your services clearly, and attract high-value customers.',
    fullDesc: 'We design and engineer bespoke corporate and business websites that establish authority in your industry. Every site is crafted with speed, responsive precision across mobile and desktop, SEO architecture, and conversion-focused layouts that turn passive visitors into qualified leads.',
    deliverables: [
      'Custom UI/UX Designed from Scratch',
      '100% Mobile & Tablet Responsive',
      'Technical On-Page SEO & Fast Load Times',
      'Lead Capture & Contact System Integration',
      'CMS / Admin Management for Content',
      'SSL Security & Analytics Tracking'
    ],
    idealFor: ['Consulting Agencies', 'Law & Professional Firms', 'Local Enterprises', 'Corporate Brands', 'Service Providers'],
    technologies: ['React', 'Django', 'MySQL', 'Modern CSS']
  },
  {
    id: 'ecommerce-websites',
    title: 'E-Commerce Websites',
    slug: 'ecommerce-websites',
    icon: 'FaShoppingCart',
    shortDesc: 'Modern online stores with seamless product management, customer checkout experience, inventory sync, and secure workflows.',
    fullDesc: 'From single-product direct-to-consumer storefronts to comprehensive multi-category online stores, we build reliable e-commerce platforms engineered for sales conversions, fast catalogue browsing, safe payment gateway integrations, and streamlined order fulfillment.',
    deliverables: [
      'Dynamic Product Catalog & Filtering',
      'Secure Multi-Gateway Checkout (Razorpay, Stripe)',
      'Real-Time Inventory & Stock Tracking',
      'Customer Accounts & Order History',
      'Automated Invoices & Email Confirmations',
      'Admin Sales Dashboard & Analytics'
    ],
    idealFor: ['Retail Brands', 'D2C Startups', 'Apparel & Lifestyle Stores', 'Wholesale Distributors'],
    technologies: ['React', 'Django REST', 'MySQL', 'Payment Gateways']
  },
  {
    id: 'custom-web-applications',
    title: 'Custom Web Applications',
    slug: 'custom-web-applications',
    icon: 'FaLaptopCode',
    shortDesc: 'Business-specific web applications designed and architected around your exact organizational workflows and operational requirements.',
    fullDesc: 'Off-the-shelf software often fails to fit unique business processes. We engineer bespoke web applications with scalable database schemas, rock-solid REST APIs, role-based access control (RBAC), and intuitive user interfaces that solve complex operational challenges.',
    deliverables: [
      'Custom Business Logic & Workflows',
      'Role-Based Permissions & User Roles',
      'Interactive Dashboards & Data Visualization',
      'Third-Party API & Webhook Integrations',
      'Automated Notification Systems',
      'Scalable Backend with Relational Integrity'
    ],
    idealFor: ['SaaS Founders', 'Mid-Market Businesses', 'Tech Startups', 'Enterprises with Custom Needs'],
    technologies: ['React', 'Django REST Framework', 'MySQL', 'Axios']
  },
  {
    id: 'booking-systems',
    title: 'Booking Systems',
    slug: 'booking-systems',
    icon: 'FaCalendarCheck',
    shortDesc: 'Online appointment, reservation, and scheduling systems that eliminate manual coordination and simplify customer bookings.',
    fullDesc: 'Empower your customers to book appointments, reserve tables, or schedule consultations 24/7. Our booking engines feature real-time slot availability, automated calendar syncing, SMS/WhatsApp/email alerts, and deposit payment processing.',
    deliverables: [
      'Real-Time Slot & Capacity Management',
      'Automated Calendar & Booking Sync',
      'Instant Email & WhatsApp Confirmations',
      'Customer Self-Service Rescheduling',
      'Payment/Advance Deposit Integration',
      'Staff Availability & Resource Management'
    ],
    idealFor: ['Clinics & Doctors', 'Salons & Spas', 'Restaurants & Cafes', 'Consultants & Coaches', 'Event Spaces'],
    technologies: ['React', 'Django', 'MySQL', 'REST API']
  },
  {
    id: 'management-systems',
    title: 'Management Systems',
    slug: 'management-systems',
    icon: 'FaCogs',
    shortDesc: 'Custom internal software for managing members, employees, attendance, payments, inventory, and end-to-end business operations.',
    fullDesc: 'Replace messy spreadsheets and disconnected tools with a centralized, unified management operating system. Track operations, generate financial reports, automate recurring reminders, and manage member/employee lifecycles with absolute precision.',
    deliverables: [
      'Member/Employee Profile Lifecycle Tracking',
      'Automated Billing, Invoicing & Renewal Alerts',
      'Attendance Tracking & QR / RFID Access Logs',
      'Inventory & Asset Utilization Records',
      'Financial Reports & Audit Trail Logs',
      'Exportable Excel / PDF Reporting'
    ],
    idealFor: ['Gyms & Fitness Centers', 'Educational Institutes', 'Co-Working Spaces', 'Warehouses & Logistics'],
    technologies: ['Django', 'React', 'MySQL', 'REST Framework']
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    slug: 'portfolio-websites',
    icon: 'FaUserTie',
    shortDesc: 'Premium portfolio platforms that help agencies, architects, executives, and creative professionals showcase high-impact work.',
    fullDesc: 'Make your work unforgettable. We build high-aesthetic, lightning-fast portfolio platforms with rich case study layouts, interactive media galleries, social proof integration, and direct lead generation funnels that attract premium clients and career opportunities.',
    deliverables: [
      'Interactive Case Study Showcase',
      'High-Resolution Gallery & Video Embeds',
      'Client Testimonials & Press Mentions',
      'Downloadable Resume / Media Kit System',
      'Fast Global CDN Delivery',
      'Direct Project Enquiry Funnel'
    ],
    idealFor: ['Design Agencies', 'Architects & Interior Designers', 'Tech Executives', 'Consultants', 'Creative Directors'],
    technologies: ['React', 'Modern CSS', 'Vite']
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    slug: 'landing-pages',
    icon: 'FaRocket',
    shortDesc: 'High-converting, laser-focused landing pages engineered for advertising campaigns, marketing promotions, and product launches.',
    fullDesc: 'Every element on our landing pages is calculated to maximize conversion rates. Featuring persuasive visual hierarchy, trust badges, lightning-quick load times, and frictionless lead capture forms that turn paid ad traffic into active pipeline revenue.',
    deliverables: [
      'Conversion-Rate-Optimized (CRO) Layout',
      'Sub-Second Page Load Optimization',
      'A/B Test Ready Architecture',
      'Direct CRM / Email / Webhook Sync',
      'Tracking Pixels & Event Analytics',
      'Engaging Interactive Visuals & Proof'
    ],
    idealFor: ['Product Launches', 'PPC & Meta Ad Campaigns', 'Event Registrations', 'Lead Generation Drives'],
    technologies: ['React', 'CSS Custom Properties', 'Vite', 'REST API']
  },
  {
    id: 'custom-software-solutions',
    title: 'Custom Software Solutions',
    slug: 'custom-software-solutions',
    icon: 'FaMicrochip',
    shortDesc: 'Have an unconventional business problem? We architect, engineer, and deploy tailor-made digital solutions built specifically for it.',
    fullDesc: 'When standard software cannot solve your operational bottleneck, SVS CodeVista steps in. We analyze your requirements from first principles, design custom data architectures, build secure APIs, and implement reliable software that drives tangible business ROI.',
    deliverables: [
      'Technical Architecture & Feasibility Plan',
      'Custom Database & API Engineering',
      'Automation of Repetitive Manual Workflows',
      'Legacy System Modernization & Migration',
      'End-to-End Testing & CI/CD Deployment',
      'Ongoing Maintenance & SLA Support'
    ],
    idealFor: ['Specialized Operations', 'High-Growth Startups', 'Logistics Companies', 'Industry Specific Platforms'],
    technologies: ['Python', 'Django', 'React', 'MySQL', 'Axios']
  }
];
