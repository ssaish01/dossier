export type ProjectDomain = 
  | 'Public Sector Digital Infrastructure'
  | 'Enterprise Data & Banking Systems' 
  | 'Product Telemetry & Developer SaaS'
  | 'Applied Financial Modeling';

export type DealSector = ProjectDomain;

export type MandateType = 
  | 'Systems Architecture & Reliability'
  | 'Data Pipeline Engineering' 
  | 'Security & Compliance Auditing'
  | 'Cloud Migration & Access Governance'
  | 'Product Telemetry & UI/UX'
  | 'Financial & Valuation Modeling';

export type DealInstitution = 
  | 'Cabinet Secretariat' 
  | 'Tata Consultancy Services' 
  | 'DevRev';

export interface DealTombstone {
  id: string;
  codeName: string;
  targetName: string;
  targetDescription: string;
  acquirerOrSponsor: string;
  institution: DealInstitution;
  role: string;
  dealType: MandateType;
  sector: ProjectDomain;
  valueUsd: string;
  valueNumericMillion?: number;
  date: string;
  status: 'Completed' | 'Delivered';
  headlineOutcome: string;
  executionSummary: string[];
  strategicRationale: string;
  multiples: {
    latencyReduction?: string;
    uptimeSla?: string;
    scopeMetrics?: string;
    benchmark?: string;
  };
  technicalStack?: {
    languagesAndFrameworks?: string;
    databasesAndPipelines?: string;
    securityAndProtocols?: string;
  };
}

export interface Competency {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  deliverables: string[];
  methodologies: string[];
  dealCount: number;
}

export interface CareerMilestone {
  period: string;
  title: string;
  firm: string;
  location: string;
  summary: string;
  keyAchievements: string[];
}
