import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  basics: {
    name: 'Tarun Sai Madimi',
    title: 'Senior UX Designer | Analytical Dashboards',
    summary:
      'Senior UX Designer focused on complex, data-heavy analytical dashboards and enterprise workflows across finance, security, operations, and e-commerce products. I translate business goals and large datasets into clear information architecture, user flows, wireframes, prototypes, data visualizations, and responsive dashboard experiences. I build scalable design systems with reusable components and accessible interaction patterns, and collaborate closely with product managers, stakeholders, developers, analysts, and QA through design reviews, usability feedback, Agile delivery, and AI-assisted UX workflows.',
    location: 'Sunnyvale, CA',
    email: 'tarunsai.m851@gmail.com',
    phone: '+1 872-216-4161',
    workAuthorization: 'F-1 OPT EAD',
    availability: 'Available immediately',
    links: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/t-sai-m-ai/',
      },
    ],
  },
  experience: [
    {
      company: 'IBM',
      role: 'Full Stack Developer',
      dates: 'May 2025 - Present',
      location: 'New York, USA',
      bullets: [
        'Designed analytical dashboards for identity lifecycle, access requests, approval queues, access reviews, entitlement risk, audit findings, and compliance status across enterprise applications.',
        'Translated complex identity and security datasets into KPI cards, trends, risk distributions, sortable tables, filters, drilldowns, exception states, and role-based operational views.',
        'Created information architecture, user flows, wireframing, and interactive prototyping for administrator, reviewer, approver, auditor, and support-team journeys.',
        'Built reusable design systems and shared UI component libraries with components, symbols, overrides, typography, spacing, color tokens, form patterns, tables, charts, and accessible states.',
        'Used Figma and Sketch workflows for dashboard concepts, high-fidelity screens, clickable prototypes, design specifications, redlines, and developer handoff.',
        'Defined data visualization patterns for comparisons, distributions, progress, exceptions, historical trends, thresholds, and dense tabular information using Chart.js and D3.js concepts.',
        'Facilitated design reviews and usability feedback with product managers, security stakeholders, analysts, developers, QA, and architects and iterated based on findings.',
        'Used AI-assisted UX design tools for rapid content exploration, alternative layouts, interaction ideas, research synthesis, and accessibility checks while maintaining human review.',
      ],
      metrics: [
        { label: 'Focus', value: 'Security UX' },
        { label: 'Audience', value: '5 Roles' },
        { label: 'System', value: 'Enterprise' },
      ],
    },
    {
      company: 'HCL Technologies',
      role: 'Technical Analyst / Java Full Stack Developer',
      dates: 'Jan 2020 - Jan 2024',
      location: 'India',
      bullets: [
        'Designed complex analytical dashboards across two data-heavy products, presenting financial risk, transaction alerts, investigation workload, order volume, inventory, payments, and fulfillment performance.',
        'Created user flows, task models, wireframing, and high-fidelity prototyping for fraud analysts, operations users, case reviewers, fulfillment teams, and product stakeholders.',
        'Designed data visualization experiences using KPI cards, time-series charts, comparisons, risk distributions, funnel views, status breakdowns, heatmaps, filters, and detailed tables.',
        'Used Sketch and Figma patterns for components, symbols, overrides, responsive layouts, reusable navigation, forms, filters, empty states, error states, and interactive prototypes.',
        'Maintained design systems and shared UI component libraries to improve consistency across finance and operations dashboards and reduce duplicate design effort.',
        'Partnered with product managers, analysts, engineers, QA, and operations stakeholders to clarify requirements, review concepts, validate feasibility, and refine workflows.',
        'Conducted heuristic evaluation, usability feedback sessions, accessibility reviews, and iterative design validation for dense workflows and high-volume data views.',
        'Prepared annotated specifications, interaction notes, responsive behavior, component states, and developer handoff documentation and supported implementation reviews.',
      ],
      metrics: [
        { label: 'Products', value: '2 Dashboards' },
        { label: 'Domains', value: 'Finance + E-Commerce' },
        { label: 'View Type', value: 'Data-Heavy' },
      ],
    },
  ],
  achievements: [
    {
      title: 'Dashboard Domains',
      metric: '4 Industries',
      context: 'Finance, security, operations, and e-commerce products shaped through analytical dashboard design.',
    },
    {
      title: 'Design Systems',
      metric: 'Reusable UI',
      context: 'Components, symbols, overrides, tokens, typography, and accessible states for consistent product experiences.',
    },
    {
      title: 'Data Visualization',
      metric: 'KPIs + Trends',
      context: 'Charts, comparisons, drilldowns, risk distributions, tables, heatmaps, and role-based views.',
    },
    {
      title: 'Enterprise Workflows',
      metric: 'Role-Based',
      context: 'Journeys for administrators, reviewers, approvers, auditors, analysts, and operations teams.',
    },
  ],
  projects: [
    {
      title: 'Real-Time Financial Fraud Analytics & Investigation Dashboard',
      category: 'Finance / Security Analytics',
      summary:
        'A data-heavy finance dashboard supporting transaction monitoring, configurable risk rules, fraud alerts, investigation queues, case management, reconciliation, and audit workflows.',
      impact: 'Risk monitoring, investigations & audit workflows',
      stack: ['Sketch', 'Figma', 'Chart.js', 'D3.js', 'Tableau', 'Power BI', 'Design Systems', 'Usability Testing'],
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=90',
      imageAlt: 'Cybersecurity lock and secure network visualization',
    },
    {
      title: 'E-Commerce Operations & Fulfillment Analytics Dashboard',
      category: 'Operations Analytics',
      summary:
        'An operations dashboard supporting order volume, inventory status, payments, fulfillment performance, shipment tracking, cancellations, refunds, returns, and service metrics.',
      impact: 'Orders, inventory, payments & fulfillment visibility',
      stack: ['Sketch', 'Figma', 'Adobe XD', 'Chart.js', 'D3.js', 'Tableau', 'Power BI', 'Responsive Design'],
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90',
      imageAlt: 'Online commerce checkout and product browsing interface',
    },
  ],
  skills: {
    'UX Design': ['Analytical Dashboards', 'Information Architecture', 'Interaction Design', 'User Flows', 'Wireframing', 'Prototyping'],
    'Design Tools': ['Sketch', 'Figma', 'Adobe XD', 'FigJam', 'Miro', 'Symbols', 'Overrides', 'Components'],
    Visualization: ['Data Visualization', 'Chart.js', 'D3.js', 'Tableau', 'Power BI', 'KPI Design', 'Trends', 'Drilldowns'],
    'Design Systems': ['Design Systems', 'Component Libraries', 'Typography', 'Color', 'Spacing', 'Responsive Design', 'Accessibility'],
    'Research & Testing': ['Stakeholder Interviews', 'User Research', 'Usability Testing', 'Heuristic Evaluation', 'Design Validation'],
    'Product Domains': ['Finance', 'Security', 'Operations', 'Sales', 'Marketing', 'E-Commerce', 'Data-Heavy Products'],
    Collaboration: ['Product Managers', 'Engineers', 'Analysts', 'QA', 'Agile/Scrum', 'JIRA', 'AI-Assisted UX Design'],
  },
  education: [
    {
      institution: 'Indiana Institute of Technology, USA',
      degree: 'Master of Science in Information Systems',
      dates: 'January 2024 - May 2025',
    },
    {
      institution: "Vignan's Institute of Technology, India",
      degree: 'Bachelor of Technology',
      dates: '2018 - 2021',
    },
  ],
  certifications: [],
};
