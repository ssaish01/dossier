import { Competency, CareerMilestone } from '../types/finance';

export const ADVISORY_COMPETENCIES: Competency[] = [
  {
    id: 'tech-risk',
    title: 'Public Digital Infrastructure & Regulatory Risk',
    shortTag: 'Digital Infrastructure & Risk',
    description: 'Evaluating architectural reliability, security standards, and regulatory compliance across mission-critical public platforms. Focused on high-availability backend services, cryptographic key management, and cross-ministerial technical governance.',
    deliverables: [
      'Digital Public Infrastructure Architecture Audits',
      'Inter-Ministerial Technical Standards & Compliance Frameworks',
      'Data Integrity, Access Control & Cryptographic Governance',
      'High-Availability Failover & Disaster Recovery Procedures'
    ],
    methodologies: [
      'Zero-Trust Identity Management',
      'Fault-Tolerant Systems Architecture',
      'Public Sector API Security Standards',
      'Regulatory Compliance Auditing (MeitY & MoF)'
    ],
    dealCount: 7
  },
  {
    id: 'enterprise-systems',
    title: 'Enterprise Scalability & Data Architecture',
    shortTag: 'Enterprise Infrastructure',
    description: 'Ensuring core systems perform reliably under heavy transactional loads. I optimize distributed databases, refine backend data pipelines, and reduce computational overhead to help enterprise software scale smoothly without inflating infrastructure costs.',
    deliverables: [
      'High-Throughput Backend Data Pipeline Architectures',
      'Query Performance & Latency Reduction Roadmaps',
      'Enterprise Database Benchmarking & Optimization Plans',
      'Infrastructure Cost & Computational Efficiency Audits'
    ],
    methodologies: [
      'Data Pipeline Normalization',
      'Concurrency & Throughput Tuning',
      'Distributed Systems Scalability',
      'Batch Latency Benchmarking'
    ],
    dealCount: 8
  },
  {
    id: 'product-telemetry',
    title: 'Product-Led Growth & Quantitative Telemetry',
    shortTag: 'PLG & Workflow Analytics',
    description: 'Translating complex product telemetry into clear, intuitive visual dashboards. I design workflows that remove friction for engineers and enterprise teams, directly supporting user adoption and long-term customer retention.',
    deliverables: [
      'Interactive Quantitative Telemetry & Analytics Dashboards',
      'Developer & User Workflow Friction Optimization',
      'Cohort Retention & Onboarding Conversion Waterfalls',
      'High-Density Data UI/UX Systems'
    ],
    methodologies: [
      'Product-Led Growth (PLG) Attribution',
      'Cohort User Retention Modeling',
      'Information Hierarchy Engineering',
      'Multi-Tenant SaaS Workflow Mapping'
    ],
    dealCount: 6
  },
  {
    id: 'valuation-modeling',
    title: 'Financial Modeling & Valuation Analysis',
    shortTag: 'DCF & Financial Valuation',
    description: 'Building transparent financial models and analytical frameworks. Dynamic 3-statement forecast engines, realistic valuation multiples, and sensitivity analyses designed to evaluate business models and capital requirements.',
    deliverables: [
      'Dynamic 3-Statement Forecasting Engines (Income, BS, Cash Flow)',
      'DCF Valuation with WACC & Terminal Growth Heatmaps',
      'Sum-of-the-Parts (SOTP) Valuation & Capital Structure Models',
      'Sponsor LBO Returns & Debt Waterfall Scenarios (IRR & MOIC)'
    ],
    methodologies: [
      'Unlevered Free Cash Flow (UFCF)',
      'Gordon Growth & Exit Multiple DCF',
      'LBO Dynamic Debt Sweeps',
      'Trading & Precedent Comps Benchmarking'
    ],
    dealCount: 14
  },
  {
    id: 'due-diligence',
    title: 'Technology Due Diligence & Architecture Review',
    shortTag: 'Technical Due Diligence',
    description: 'Analyzing software architecture, technical debt, security posture, and infrastructure scalability for enterprise systems and digital platforms.',
    deliverables: [
      'Technical Due Diligence & Architecture Red-Flag Reports',
      'Technical Debt & Infrastructure Cost Quantification',
      'Platform Scalability & Integration Roadmaps',
      'Systems Modernization & Cloud Migration Scopes'
    ],
    methodologies: [
      'Architecture Scalability Stress-Testing',
      'Infrastructure Cost Attribution',
      'Software Security Posture Benchmarking',
      'Systems Integration Risk Modeling'
    ],
    dealCount: 9
  }
];

export const CAREER_TRAJECTORY: CareerMilestone[] = [
  {
    period: '3 Years',
    title: 'Deputy Field Officer (Tech) — Public Systems & Technical Risk',
    firm: 'Cabinet Secretariat, Government of India',
    location: 'Chennai, India',
    summary: 'Supported technical infrastructure oversight and systems reliability for public computing platforms interfacing with the Ministry of Finance, Ministry of Electronics & IT (MeitY), and central regulatory bodies. Focused on high-availability architecture, secure data exchange protocols, and inter-ministerial technical compliance.',
    keyAchievements: [
      'Ensured high availability and system reliability across public sector data infrastructure and inter-ministerial digital exchange channels.',
      'Helped implement regulatory compliance standards aligning digital platforms with Ministry of Finance and MeitY e-governance guidelines.',
      'Conducted stress-testing and latency benchmarks on public data platforms to identify processing bottlenecks during high-volume periods.',
      'Coordinated technical standards for cryptographic key management, access controls, and zero-trust cloud architecture across central ministries.'
    ]
  },
  {
    period: '6 Months',
    title: 'Systems Engineer — Enterprise Systems & Financial Infrastructure',
    firm: 'Tata Consultancy Services (TCS)',
    location: 'India',
    summary: 'Focused on backend performance, database architecture, and data pipelines for Tier-1 corporate clients. Analyzed database query patterns, streamlined batch data flows, and helped enterprise engineering teams ship updates faster with lower transactional overhead.',
    keyAchievements: [
      'Engineered backend data pipelines that cut data processing latency by 32% for large-scale corporate banking clients.',
      'Optimized heavy database query routines, reducing compute resource consumption during peak transaction windows.',
      'Collaborated across cross-functional enterprise teams to diagnose architectural bottlenecks and prevent deployment downtime.',
      'Helped implement automated audit logging and data verification routines adhering to global corporate compliance standards.'
    ]
  },
  {
    period: 'Internship',
    title: 'UX / UI Engineer Intern — Quantitative Telemetry & Enterprise Workflow Architecture',
    firm: 'DevRev',
    location: 'Remote / India',
    summary: 'Joined DevRev to bridge developer workflows with product-led growth analytics. Designed data-rich dashboards that helped teams understand user behavior, eliminate onboarding roadblocks, and track key engineering and support velocity metrics in real time.',
    keyAchievements: [
      'Designed intuitive analytical dashboards that translated high-volume system telemetry into clear, readable executive insights.',
      'Streamlined core developer and support workflows, reducing the steps required to resolve complex technical issues.',
      'Built reusable, modular UI components optimized for sub-100ms response times on dense data views.',
      'Worked alongside product leaders to align user experience improvements with measurable retention and expansion metrics.'
    ]
  }
];

export const CREDENTIALS_DATA = {
  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      institution: 'Vellore Institute of Technology, Chennai',
      year: '8.67 / 10'
    },
    {
      degree: 'Financial Modeling and Analysis Specialization',
      institution: 'Corporate Finance Institute',
      year: 'Financial Statement Analysis, Financial Modeling, Operational Modeling, Corporate and Business Strategy, Financial Forecasting'
    },
    {
      degree: 'Valuation Modeling Specialization',
      institution: 'Corporate Finance Institute',
      year: 'Business Valuation, DCF & LBO Analysis, Comparable Company Analysis, Pitchbook Presentation Design'
    },
    {
      degree: 'Advanced Tableau Specialization',
      institution: 'Corporate Finance Institute',
      year: 'Tableau Software, Dashboard Creation, Data Visualization, Data Modelling, SQL'
    }
  ],
  technicalFocus: [
    {
      area: 'Systems Architecture & Backend Scaling',
      technologies: 'Distributed Systems, High-Concurrency APIs, PostgreSQL, Microservices'
    },
    {
      area: 'Data Pipelines & High-Throughput Processing',
      technologies: 'ETL Optimization, Latency Reduction, Batch Settlement Rails'
    },
    {
      area: 'Financial & Quantitative Modeling',
      technologies: 'Dynamic 3-Statement Forecasts, DCF Sensitivity, Trading Comps'
    }
  ]
};
