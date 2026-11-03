import { DealTombstone } from '../types/finance';

export const DEALS_DATA: DealTombstone[] = [
  // ==========================================
  // CABINET SECRETARIAT (7 CIVIL / PUBLIC INFRASTRUCTURE MANDATES)
  // ==========================================
  {
    id: 'cabsec-01',
    codeName: 'Project Setu',
    targetName: 'National Public Digital Infrastructure & Key Management Framework',
    targetDescription: 'High-availability public sector computing architectures, cryptographic key management, and API gateway systems interfacing with the Ministry of Electronics & IT (MeitY) and the Ministry of Finance.',
    acquirerOrSponsor: 'Cabinet Secretariat & Ministry of Electronics and IT (MeitY)',
    institution: 'Cabinet Secretariat',
    role: 'Deputy Field Officer (Tech) — Public Systems Architecture & Technical Risk',
    dealType: 'Systems Architecture & Reliability',
    sector: 'Public Sector Digital Infrastructure',
    valueUsd: 'National Scale Public Rail',
    date: '3-Year Tenure',
    status: 'Delivered',
    headlineOutcome: 'Maintained 99.999% uptime and zero-breach audit compliance across critical public sector digital platforms.',
    executionSummary: [
      'Monitored security protocols and continuous uptime for high-traffic inter-ministerial public computing systems.',
      'Audited compliance standards aligning digital services with Ministry of Finance and MeitY e-governance guidelines.',
      'Evaluated high-volume transaction pathways to eliminate processing latency and ensure continuous service delivery.',
      'Standardized technical guidelines for cryptographic key rotation and access policies across central civil departments.'
    ],
    strategicRationale: 'Modernizing core public service delivery and securing technical infrastructure against software vulnerabilities and downtime.',
    multiples: {
      uptimeSla: '99.999% Availability',
      scopeMetrics: 'Interfacing MeitY & Ministry of Finance',
      benchmark: 'National e-Governance Standards'
    },
    technicalStack: {
      languagesAndFrameworks: 'Java, Python, REST APIs, Microservices',
      databasesAndPipelines: 'PostgreSQL, Apache Kafka, Redis Caching',
      securityAndProtocols: 'TLS 1.3, PKI Key Management, OAuth 2.0 / mTLS'
    }
  },
  {
    id: 'cabsec-02',
    codeName: 'Project Samanvay',
    targetName: 'Inter-Ministerial Financial & Revenue Data Gateway',
    targetDescription: 'Automated data synchronization rails connecting Department of Revenue databases with central banking and economic registry platforms.',
    acquirerOrSponsor: 'Cabinet Secretariat & Ministry of Finance (Dept. of Revenue)',
    institution: 'Cabinet Secretariat',
    role: 'Deputy Field Officer (Tech) — Financial Data Systems & Compliance Review',
    dealType: 'Data Pipeline Engineering',
    sector: 'Public Sector Digital Infrastructure',
    valueUsd: '12 Ministerial Repositories',
    date: 'Tenure Mandate',
    status: 'Delivered',
    headlineOutcome: 'Integrated 12 ministerial data repositories with sub-second verified queries, accelerating inter-departmental tax and revenue reconciliation.',
    executionSummary: [
      'Built reliable backend pipelines enabling automated data exchange between central economic and revenue departments.',
      'Implemented modern cryptographic integrity checks to prevent data tampering across distributed government endpoints.',
      'Harmonized data formats and API specifications to meet central financial reporting guidelines.',
      'Conducted stress-testing on database clusters handling high-volume tax season filing traffic.'
    ],
    strategicRationale: 'Bridging data silos between revenue and finance departments to accelerate audit reconciliations and administrative efficiency.',
    multiples: {
      latencyReduction: 'Sub-second Verified Queries',
      scopeMetrics: '12 Departmental Databases Integrated',
      benchmark: 'Central Financial Reporting Protocols'
    },
    technicalStack: {
      languagesAndFrameworks: 'Python, Node.js, Enterprise API Gateway',
      databasesAndPipelines: 'PostgreSQL, Elasticsearch, Automated ETL Jobs',
      securityAndProtocols: 'HMAC Data Integrity, Cryptographic Hashing, RBAC'
    }
  },
  {
    id: 'cabsec-03',
    codeName: 'Project Meghdoot',
    targetName: 'Central Government Multi-Cloud & Zero-Trust Access Gateway',
    targetDescription: 'Distributed cloud computing infrastructure and zero-trust identity verification system supporting 14 central civil ministries.',
    acquirerOrSponsor: 'Cabinet Secretariat & Central Civil Portals (Commerce, Education, Health)',
    institution: 'Cabinet Secretariat',
    role: 'Deputy Field Officer (Tech) — Cloud Infrastructure & Zero-Trust Specialist',
    dealType: 'Cloud Migration & Access Governance',
    sector: 'Public Sector Digital Infrastructure',
    valueUsd: '14 Central Ministries Connected',
    date: 'Tenure Mandate',
    status: 'Delivered',
    headlineOutcome: 'Eliminated single points of failure across 14 central ministries by transitioning legacy portals to a micro-segmented, zero-trust cloud setup.',
    executionSummary: [
      'Designed role-based zero-trust access controls replacing legacy perimeter security across civil department intranets.',
      'Performed independent technical reviews and architecture audits on enterprise cloud platforms for public sector hosting.',
      'Implemented automated, immutable audit logs that comply with national e-governance standards.',
      'Coordinated smooth, zero-downtime data migrations for public portal backends.'
    ],
    strategicRationale: 'Upgrading legacy government IT portals to high-performance, fault-tolerant cloud architecture to support expanding citizen digital adoption.',
    multiples: {
      uptimeSla: 'Zero Single-Points-of-Failure',
      scopeMetrics: '14 Central Civil Ministries',
      benchmark: 'National Zero-Trust Framework'
    },
    technicalStack: {
      languagesAndFrameworks: 'Kubernetes, Terraform, Linux Virtualization',
      databasesAndPipelines: 'Distributed Object Storage, Audit Log Clusters',
      securityAndProtocols: 'mTLS, SAML/OIDC Identity Federation, Least Privilege'
    }
  },
  {
    id: 'cabsec-04',
    codeName: 'Project Sankhya',
    targetName: 'National Macroeconomic Data Pipeline & Revenue Stress-Testing',
    targetDescription: 'Analytical simulation engine modeling macroeconomic data flows, fiscal indicators, and trade statistics across public sector agencies.',
    acquirerOrSponsor: 'Ministry of Statistics (MoSPI) & Dept. of Economic Affairs (MoF)',
    institution: 'Cabinet Secretariat',
    role: 'Deputy Field Officer (Tech) — Quantitative Systems & Macro Data Analyst',
    dealType: 'Financial & Valuation Modeling',
    sector: 'Applied Financial Modeling',
    valueUsd: 'Pan-India Macro Dataset',
    date: 'Tenure Mandate',
    status: 'Delivered',
    headlineOutcome: 'Built cross-departmental data models consolidating economic indices, trade statistics, and revenue projections for policy planning.',
    executionSummary: [
      'Constructed data pipelines that aggregate economic indicators, industrial production data, and fiscal collections across states.',
      'Created analytical dashboards allowing department economists to simulate revenue sensitivity under varying economic conditions.',
      'Identified data reconciliation bottlenecks between state and central reporting frameworks.',
      'Standardized automated data cleaning and anomaly detection for quarterly macroeconomic bulletins.'
    ],
    strategicRationale: 'Providing policy makers with reliable, near real-time economic data pipelines to support budget forecasting and fiscal planning.',
    multiples: {
      scopeMetrics: 'National Macroeconomic Coverage',
      benchmark: 'Automated Monthly Bulletin Validation'
    },
    technicalStack: {
      languagesAndFrameworks: 'Python (NumPy, Pandas), Streamlit, SQL',
      databasesAndPipelines: 'TimescaleDB, Automated Analytics Workflows',
      securityAndProtocols: 'Deterministic Reconciliation, Aggregation Audits'
    }
  },
  {
    id: 'cabsec-05',
    codeName: 'Project Praman',
    targetName: 'Public Sector Hardware Security & Server Enclave Validation',
    targetDescription: 'Rigorous testing and certification of hardware security modules (HSM) and server enclaves deployed across national e-governance data centers.',
    acquirerOrSponsor: 'Cabinet Secretariat Technical Evaluation Bureau & STQC (MeitY)',
    institution: 'Cabinet Secretariat',
    role: 'Deputy Field Officer (Tech) — Hardware Security & Systems Evaluation Lead',
    dealType: 'Security & Compliance Auditing',
    sector: 'Public Sector Digital Infrastructure',
    valueUsd: 'STQC Quality Standard Compliant',
    date: 'Tenure Mandate',
    status: 'Delivered',
    headlineOutcome: 'Identified and remediated 9 critical firmware configuration issues in enterprise server hardware prior to state data center deployment.',
    executionSummary: [
      'Conducted microcode verification and configuration testing on enterprise server clusters for government data centers.',
      'Verified vendor supply-chain provenance documentation against MeitY technical standards.',
      'Contributed to technical evaluation guidelines used by government procurement committees for data center hardware.',
      'Built automated testing environments to detect performance degradation in hardware security modules under sustained load.'
    ],
    strategicRationale: 'Ensuring server hardware and cryptographic processors deployed in government data centers operate reliably and meet quality standards.',
    multiples: {
      uptimeSla: '100% Quality Verification Pass',
      scopeMetrics: '9 Critical Configurations Remediated'
    },
    technicalStack: {
      languagesAndFrameworks: 'C, Shell Scripting, Hardware Diagnostics',
      databasesAndPipelines: 'System Firmware Repositories, Test Suites',
      securityAndProtocols: 'Hardware Root of Trust, Secure Boot, FIPS 140-2 Standards'
    }
  },
  {
    id: 'cabsec-06',
    codeName: 'Project Urja',
    targetName: 'National Data Center Disaster Recovery & Failover Network',
    targetDescription: 'Redundant disaster recovery infrastructure and automated failover pipelines connecting tier-3 government data centers across regions.',
    acquirerOrSponsor: 'Ministry of Communications & National Informatics Infrastructure',
    institution: 'Cabinet Secretariat',
    role: 'Deputy Field Officer (Tech) — Disaster Recovery & High-Availability Specialist',
    dealType: 'Systems Architecture & Reliability',
    sector: 'Public Sector Digital Infrastructure',
    valueUsd: 'Multi-Region Data Center Grid',
    date: 'Tenure Mandate',
    status: 'Delivered',
    headlineOutcome: 'Tested and verified sub-second automated failover for public transaction portals during scheduled maintenance and regional fiber cuts.',
    executionSummary: [
      'Engineered automated database replication protocols between primary and disaster-recovery government data centers.',
      'Participated in quarterly disaster-recovery drills, verifying data consistency across geographically separated sites.',
      'Drafted clear, step-by-step failover runbooks for data center operations engineers.',
      'Monitored energy consumption and auxiliary power readiness to guarantee uninterrupted computing during grid power fluctuations.'
    ],
    strategicRationale: 'Guaranteeing continuous citizen access to vital public portals, payment gateways, and social welfare distribution backends.',
    multiples: {
      latencyReduction: 'Sub-Second Disaster Failover',
      uptimeSla: '100% Data Consistency on Switchover'
    },
    technicalStack: {
      languagesAndFrameworks: 'BGP Anycast Routing, Linux HA, Shell Automation',
      databasesAndPipelines: 'PostgreSQL Streaming Replication, Geo-Redundant SAN',
      securityAndProtocols: 'IPSec Tunnels, Automated Health Checking'
    }
  },
  {
    id: 'cabsec-07',
    codeName: 'Project Niti',
    targetName: 'National Public Data Exchange & Open API Governance Framework',
    targetDescription: 'Standardized API gateway architecture and data governance protocols for secure information sharing across central government departments.',
    acquirerOrSponsor: 'Cabinet Secretariat & Digital India Public Systems Group',
    institution: 'Cabinet Secretariat',
    role: 'Deputy Field Officer (Tech) — API Architecture & Public Data Standards Lead',
    dealType: 'Systems Architecture & Reliability',
    sector: 'Public Sector Digital Infrastructure',
    valueUsd: '20+ Central Department Platforms',
    date: 'Tenure Mandate',
    status: 'Delivered',
    headlineOutcome: 'Standardized API security and access governance across 20+ public departmental platforms, eliminating redundant proprietary bridges.',
    executionSummary: [
      'Designed RESTful API gateway schemas enforcing standardized authentication, rate-limiting, and error-handling across ministries.',
      'Authored clear API documentation and integration guides for developer teams across public sector enterprises.',
      'Collaborated with policy teams to enforce citizen privacy and data minimization principles in public API specifications.',
      'Implemented automated regression testing and traffic monitoring to prevent API performance bottlenecks.'
    ],
    strategicRationale: 'Accelerating inter-departmental collaboration by replacing legacy batch files with secure, high-speed, standardized web APIs.',
    multiples: {
      scopeMetrics: '20+ Public Platforms Interconnected',
      benchmark: 'Open API 3.0 Specifications'
    },
    technicalStack: {
      languagesAndFrameworks: 'OpenAPI / Swagger, Kong Gateway, Node.js',
      databasesAndPipelines: 'Redis Token Store, Prometheus Metrics',
      securityAndProtocols: 'JWT Claims Verification, Rate Limiting, TLS Encryption'
    }
  },

  // ==========================================
  // TATA CONSULTANCY SERVICES (1 ENTERPRISE MANDATE)
  // ==========================================
  {
    id: 'tcs-01',
    codeName: 'Project Apex Core',
    targetName: 'Tier-1 Global Corporate Banking & Transaction Rails',
    targetDescription: 'High-throughput enterprise database engines and backend transaction pipelines processing critical settlements for multinational corporate banking clients.',
    acquirerOrSponsor: 'Tata Consultancy Services (TCS) · Global Enterprise Accounts',
    institution: 'Tata Consultancy Services',
    role: 'Systems Engineer — Enterprise Systems & Financial Infrastructure Engineering',
    dealType: 'Data Pipeline Engineering',
    sector: 'Enterprise Data & Banking Systems',
    valueUsd: 'High-Throughput Enterprise Rails',
    date: '6-Month Tenure',
    status: 'Delivered',
    headlineOutcome: 'Cut backend data processing latency by 32%, significantly speeding up daily reconciliation cycles for multinational corporate clients.',
    executionSummary: [
      'Engineered scalable backend data pipelines and optimized high-concurrency database queries for Tier-1 corporate systems.',
      'Streamlined deployment cycles to minimize downtime and reduce unnecessary computational expenses.',
      'Worked with enterprise architects across time zones to isolate performance bottlenecks and improve query execution plans.',
      'Implemented robust audit logging and automated data integrity checks aligned with international banking benchmarks.'
    ],
    strategicRationale: 'Modernizing legacy database architecture to handle surging transaction volumes while staying compliant across global banking jurisdictions.',
    multiples: {
      latencyReduction: '32% Latency & Overhead Reduction',
      benchmark: 'High-Throughput Banking Rails'
    },
    technicalStack: {
      languagesAndFrameworks: 'Java Spring Boot, SQL, Python',
      databasesAndPipelines: 'Oracle Database, Apache Kafka, Batch Scheduling',
      securityAndProtocols: 'ACID Compliance, Banking Audit Logging'
    }
  },

  // ==========================================
  // DEVREV (1 GROWTH STAGE MANDATE)
  // ==========================================
  {
    id: 'devrev-01',
    codeName: 'Project Velocity',
    targetName: 'Enterprise SaaS Workflow & Quantitative Telemetry Engine',
    targetDescription: 'Developer-centric workflow management platform and quantitative product analytics architecture driving product-led growth (PLG) metrics.',
    acquirerOrSponsor: 'DevRev Platform Ecosystem',
    institution: 'DevRev',
    role: 'UX / UI Engineer Intern — Quantitative Product Telemetry & Enterprise Workflow Architecture',
    dealType: 'Product Telemetry & UI/UX',
    sector: 'Product Telemetry & Developer SaaS',
    valueUsd: 'Developer Telemetry & Analytics',
    date: 'Growth Stage',
    status: 'Delivered',
    headlineOutcome: 'Designed interactive dashboards and simplified user workflows, directly accelerating enterprise user adoption and retention.',
    executionSummary: [
      'Designed intuitive data-visualization layouts and interactive analytics dashboards translating real-time telemetry into executive insights.',
      'Streamlined multi-step user workflows to eliminate friction in developer onboarding and enterprise issue-resolution funnels.',
      'Engineered reusable frontend UI systems ensuring sub-100ms interaction latency on high-density data views.',
      'Analyzed user behavior and retention funnels to support data-driven product-led growth (PLG) strategies.'
    ],
    strategicRationale: 'Giving engineering and support leaders transparent visibility into product performance to remove friction and drive organic adoption.',
    multiples: {
      latencyReduction: 'Sub-100ms UI Render Times',
      benchmark: 'Product-Led Growth (PLG) Telemetry'
    },
    technicalStack: {
      languagesAndFrameworks: 'React, TypeScript, Tailwind CSS, GraphQL',
      databasesAndPipelines: 'Real-time WebSocket Feeds, Charting Engines',
      securityAndProtocols: 'Component Token Systems, Responsive Design Standards'
    }
  }
];

export const CAREER_STATS = {
  totalVolume: 'National Scale Infrastructure',
  totalDeals: '9 Key Mandates',
  executionRate: '99.999% Availability',
  peakDealSize: '14 Central Ministries Connected',
  yearsExperience: '4 Years (3 Yrs Govt · 1 Yr Enterprise/SaaS)',
  sovereignImpact: '7 Public Digital Infrastructure Mandates'
};
