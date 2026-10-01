import { AdvisoryDomain, CaseStudy, MethodologyPhase } from '../types';

export const MONOGRAM_LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1WxUf36d-s0FyarlaejPGhc3A2Q4axvnLjF2-l8L-CsfBraUdZdHsItAHio6loTF7Db6I-ZRSPpsWZmMSxehr7myLZsfHSvZZ9DaXD95DqLcepziufCPSQKqJ9oeJNzs_3QDEsSj5u1EbXaZlZmBrLLiqSWwcUoeKujy9v4k914qdSVyw0hF2c48sVsAbBiBxh5KtM8SAJ2wOpUyPYdRDMQEK1ljx5oatJdaM9OduUq7JumNmajL3iK-Tg';
export const ELENA_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuA19A_A5VaDJHJ_CYpg1IgS3Igr1k6ei_ktNhIkegfvfntIuggOLdYjE8IZPPs58JcIqBo_0zEDdgTpEGVN8nvtyi0Rii5K7KGxBqV-Zr7zcH6k5M4KcRn68dMN99_fXQTzZFD-pxkhuhXz2UHziArqBLz8Tid9ZaQ5jryA368rxWpOblkV9_D8_CUskCVAbDpHxCSSV-sVnrL-O7U8WxNAnqi31XX-4y9F_x2CcxGxh4WOhtmyMP';

export const BANK_MODERNIZATION_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1aUyNnYSWnS_Y9jFzLiBS2Fxgdg2MaUN9W1TnafMLvsewaa5Otj6Z0y3FQFhy65e_NPHiTnZyBDQP9vn2PTOOxgyTTSQQzD3qbS3KDUaYiUsYlToHs9iAWPrlLe1r9Jce32JFRpEuNIVBYFieP0iXPrltNPKgNwPC_kXJJAQyLDPQZKOnmS-_OWFHt-NVAwSBG5Rc0efvLaVjYL9qz4Wd8aybVumH-SzJzbm1zOqdKBTA3LlIBtlx';
export const HEALTHTECH_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn5gaQEdKvGKUBd54PX9YFG3v-l0Hm2FRTOmWw07jNsI6T0TuobMvQLCcGW2-eEamnMlnD0GcybYRgQKdDyj_SXim4nVn57UIkhZoUyUsVUXMsEUgYeAFvKOcCLpRpcMa-1hlGeJpoeyfq0PleJSE-ArqGFILgwdYvkF-lIRVNwObBJlY6-jsQxtTEEFQl3uq7nv5uBfOrfjwfxUh4TcjzIAKxXJfxKDDFLNzh_rWL2dkTSf9o36w0';

export const ADVISORY_DOMAINS: AdvisoryDomain[] = [
  {
    id: 'cloud-finops',
    title: 'Cloud Strategy & FinOps',
    icon: 'cloud_sync',
    summary: 'Multi-cloud architecture governance across AWS and Azure. Aligning unit infrastructure economics with margin targets to curtail sprawl and implement continuous cost governance.',
    tags: ['FinOps Certified', 'Multi-Account Governance', 'Kubernetes Platform Eng'],
    deliverables: ['Cloud Unit Economics Ledger', 'Workload Right-Sizing & Reserved Capacity Strategy', 'Zero-Waste Kubernetes Cluster Architecture'],
    metricsHighlighted: '$42M+ Audited Run-Rate Reduction'
  },
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI & Automation',
    icon: 'psychology',
    summary: 'LLM runtime orchestrations, contextual vector indices, enterprise data governance pipelines, and decoupling monolith workflows with event-driven architectures.',
    tags: ['LLM SecOps', 'Event-Driven Mesh', 'Legacy Decoupling'],
    deliverables: ['Enterprise Model Gateway Architecture', 'Private RAG Vector Index Governance', 'Kafka/EventBridge Distributed Mesh'],
    metricsHighlighted: 'Sub-180ms P99 Latency at Scale'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    icon: 'security',
    summary: 'Zero-trust security postures, automated continuous compliance tooling for SOC2 Type II, ISO 27001, and FedRAMP readiness for institutional market entry.',
    tags: ['Zero-Trust IAM', 'SOC2 Type II', 'Cryptographic Audits'],
    deliverables: ['Automated Evidence Collection Engine', 'Ephemeral Access / Least-Privilege IAM', 'Multi-Region Encrypted Data Mesh'],
    metricsHighlighted: '100% Audit Readiness in 60 Days'
  },
  {
    id: 'fractional-cto',
    title: 'Fractional CTO & Governance',
    icon: 'leaderboard',
    summary: 'Executive advisory for venture portfolios and enterprise boards. Organization topology restructuring, tech diligence for M&A, and vendor RFPs.',
    tags: ['M&A Tech Due Diligence', 'Team Topologies', 'Board Reporting'],
    deliverables: ['C-Suite & Board Tech Roadmap Deck', 'Engineering Efficiency & Velocity Framework', 'M&A Red Flag & Technical Debt Audit'],
    metricsHighlighted: '4x Engineering Release Frequency'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bank-modernization',
    tag: 'Cloud Migration • FinOps',
    category: 'cloud',
    title: 'Global Tier-1 Bank Core Modernization',
    clientType: 'Global Financial Institution (Assets >$800B)',
    image: BANK_MODERNIZATION_IMG,
    altText: 'High tech server room hallway with atmospheric warm amber lighting and deep contrast silhouettes representing modern financial technology banking infrastructure',
    description: 'Re-architected monolithic legacy mainframes into decoupled micro-frontends and AWS resilient clusters across three geographic zones.',
    outcomeLabel: 'Outcome Metric',
    outcomeValue: '-38% OpEx // 4x Cadence',
    fullChallenge: 'A Tier-1 commercial bank was experiencing critical deployment bottlenecks and exponential infrastructure billing creep due to a 20-year-old COBOL and Java monolithic core. Core ledger transactions were bound to on-prem mainframes with 72-hour batch reconciliation cycles.',
    architecturalSolution: 'Designed a strangle-pattern transition roadmap executing across 14 months. Deployed isolated AWS multi-account landing zones using Control Tower, implemented an event-driven transaction mesh via Amazon MSK, and shifted workloads into autoscaling EKS clusters with continuous FinOps cost tagging.',
    architectureSteps: [
      {
        title: 'Phase 1: Event-Sourcing Mesh',
        detail: 'Dual-wrote ledger events to Amazon MSK without impacting synchronous mainframe transaction latency.'
      },
      {
        title: 'Phase 2: Decoupled Domain Microservices',
        detail: 'Migrated loan underwriting and customer identity services into containerized Go/Rust services in multi-AZ EKS.'
      },
      {
        title: 'Phase 3: FinOps Automated Guardrails',
        detail: 'Enacted Spot-instance orchestration for non-critical services and algorithmic Savings Plans purchasing.'
      }
    ],
    impactMetrics: [
      { label: 'Cloud Run-Rate Savings', value: '$18.4M', change: '-38% Year-over-Year' },
      { label: 'Release Cadence', value: '4.2x', change: 'From bi-weekly to 3x daily' },
      { label: 'Disaster Recovery RTO', value: '8 min', change: 'Down from 14 hours' },
      { label: 'Platform Availability', value: '99.995%', change: 'Zero critical P1 outages' }
    ],
    technologies: ['AWS EKS', 'Apache Kafka (MSK)', 'Terraform Enterprise', 'FinOps Foundation Standards', 'Go / gRPC', 'Datadog APM'],
    testimonial: {
      quote: 'Elena provided the architectural clarity and executive conviction needed to break a decade of modernization paralysis. Our operational spend dropped immediately without sacrificing regulatory compliance.',
      author: 'Jonathan Thorne',
      role: 'Global Head of Enterprise Infrastructure',
      company: 'Tier-1 International Bank'
    }
  },
  {
    id: 'healthtech-zero-trust',
    tag: 'Enterprise Architecture • HIPAA',
    category: 'security',
    title: 'HealthTech Multi-Region Zero-Trust Architecture',
    clientType: 'Growth-Stage Clinical EHR & Telemedicine SaaS',
    image: HEALTHTECH_IMG,
    altText: 'Architectural minimalist medical laboratory with sleek glass partitions, sophisticated enterprise computer consoles, and neutral warm ambiance',
    description: 'Engineered automated zero-downtime microservices pipeline managing immutable health records while maintaining strict continuous HIPAA & SOC2 Type II posture.',
    outcomeLabel: 'Live Patient Throughput',
    outcomeValue: '12M+ Monthly Actives',
    fullChallenge: 'Serving 12 million active patients required sub-second EHR access for emergency rooms nationwide. Prior infrastructure suffered from brittle VPN access gates, shared database bottlenecks, and impending SOC2 audits that threatened major hospital enterprise contracts.',
    architecturalSolution: 'Architected an identity-centric Zero-Trust model replacing VPN perimeters with mutual TLS, ephemeral short-lived IAM credentials, and client-side envelope encryption for protected health information (PHI) at rest and in transit across three US regions.',
    architectureSteps: [
      {
        title: 'Phase 1: Identity & Key Management Mesh',
        detail: 'Integrated HashiCorp Vault with AWS KMS HSMs for localized per-tenant cryptographic envelope keys.'
      },
      {
        title: 'Phase 2: Multi-Region Active-Active Data Layer',
        detail: 'Configured Amazon Aurora Global Database with sub-second cross-region replication and failover.'
      },
      {
        title: 'Phase 3: Continuous Automated Compliance',
        detail: 'Codified HIPAA/SOC2 controls into CI/CD pipelines, halting deployments that violated cryptographic baselines.'
      }
    ],
    impactMetrics: [
      { label: 'Monthly Active Patients', value: '12M+', change: 'Zero downtime during migration' },
      { label: 'EHR Read Latency', value: '42ms', change: '-64% P95 latency reduction' },
      { label: 'SOC2 Type II Audit Time', value: '14 Days', change: '100% automated evidence logs' },
      { label: 'Breach Vulnerability Index', value: '0 Criticals', change: 'Audited by Bishop Fox' }
    ],
    technologies: ['AWS Aurora Multi-Region', 'HashiCorp Vault', 'SPIFFE / SPIRE Zero-Trust', 'Open Policy Agent (OPA)', 'TypeScript / Node', 'Kubernetes Istio Mesh'],
    testimonial: {
      quote: 'Our enterprise hospital contracts were stalled due to stringent security reviews. Elena rewrote our security architecture and guided us through the SOC2 Type II audit flawlessly.',
      author: 'Dr. Aris Vance',
      role: 'Chief Technology Officer',
      company: 'OmniHealth Cloud Systems'
    }
  },
  {
    id: 'ai-fintech-inference',
    tag: 'Enterprise AI • High Throughput',
    category: 'ai',
    title: 'Algorithmic Risk Gateway & Private LLM Mesh',
    clientType: 'Series C Quantitative Trading & Lending Platform',
    image: BANK_MODERNIZATION_IMG,
    altText: 'Data center server racks glowing in deep dark ambiance with amber network activity LEDs',
    description: 'Constructed an on-premise + cloud hybrid low-latency inference gateway executing portfolio risk assessment under strict data sovereignty.',
    outcomeLabel: 'Transaction Volume',
    outcomeValue: '$4.8B Daily Flow',
    fullChallenge: 'The client needed real-time underwriting risk inference using specialized transformer models while satisfying SEC and European data residency constraints forbidding third-party public API exposures.',
    architecturalSolution: 'Engineered a private containerized inference cluster on dedicated GPU instances with token streaming, semantic caching via Redis Enterprise, and strict localized data sanitization.',
    architectureSteps: [
      {
        title: 'Phase 1: Zero-Retention Semantic Gateway',
        detail: 'Sanitized PII prior to vector tokenization with deterministic regex and cryptographic masking.'
      },
      {
        title: 'Phase 2: GPU Cluster Orchestration',
        detail: 'Configured vLLM instances across AWS G5 instances with automated dynamic batching and autoscaling.'
      },
      {
        title: 'Phase 3: Hybrid Sovereignty Router',
        detail: 'Dynamically routed non-sensitive scoring to multi-region cloud while routing strict data to sovereign enclaves.'
      }
    ],
    impactMetrics: [
      { label: 'Model Inference Latency', value: '110ms', change: '-72% reduction vs baseline' },
      { label: 'Token Infrastructure Cost', value: '$84K/mo', change: 'Saved $240K/mo vs public API' },
      { label: 'Daily Flow Processed', value: '$4.8B', change: 'Zero audit compliance flags' },
      { label: 'Uptime SLA', value: '99.99%', change: 'Automated regional hot-standby' }
    ],
    technologies: ['vLLM', 'AWS Inferentia & G5', 'Redis Enterprise Semantic Cache', 'Ray Cluster', 'Python / Rust', 'Kubernetes KEDA'],
    testimonial: {
      quote: 'Elena made private enterprise AI a practical reality for our financial platform rather than an expensive science experiment.',
      author: 'Marcus Lindqvist',
      role: 'Managing Partner',
      company: 'Aether Capital Tech'
    }
  },
  {
    id: 'finops-enterprise-sprawl',
    tag: 'Cloud Strategy • FinOps',
    category: 'cloud',
    title: 'Enterprise Multi-Cloud Cost Rationalization',
    clientType: 'Global Logistics Enterprise ($4B Revenue)',
    image: HEALTHTECH_IMG,
    altText: 'Modern industrial technology operation center with analytical control displays',
    description: 'Centralized disparate cloud tenancies across AWS, Azure, and Google Cloud, dismantling unallocated zombie workloads and establishing unit cost transparency.',
    outcomeLabel: 'Direct Savings',
    outcomeValue: '$14.2M First Year',
    fullChallenge: 'Following five corporate acquisitions, the enterprise inherited 18 separate AWS organizations and 40+ Azure subscriptions with zero centralized visibility, leading to rampant overprovisioning.',
    architecturalSolution: 'Established a FinOps Center of Excellence (CoE), unified cross-cloud billing telemetry into a centralized Snowflake analytical datamart, and mandated automated tagging policies enforced by CI/CD.',
    architectureSteps: [
      {
        title: 'Phase 1: Cross-Cloud Inventory Mapping',
        detail: 'Deployed agentless telemetry discovering $3.2M of idle compute and unattached EBS volumes.'
      },
      {
        title: 'Phase 2: Unit Economics & Chargeback',
        detail: 'Mapped AWS/Azure spending directly to freight shipment unit costs for accurate margin attribution.'
      },
      {
        title: 'Phase 3: Policy Enforcement Guardrails',
        detail: 'Automated auto-termination of sandbox environments and mandatory FinOps approval for Tier-4 instance sizing.'
      }
    ],
    impactMetrics: [
      { label: 'First Year Cloud Savings', value: '$14.2M', change: 'Run-rate dropped 34%' },
      { label: 'Tagged Resource Coverage', value: '98.5%', change: 'Up from 18%' },
      { label: 'Consolidated Accounts', value: '58 to 8', change: 'Single pane of glass governance' },
      { label: 'Commitment Discount Utilization', value: '92%', change: 'Maximized 3-year RI coverage' }
    ],
    technologies: ['Snowflake FinOps Mart', 'AWS Cost Categories', 'Azure Cost Management', 'Terraform Cloud', 'Datadog Cloud Cost', 'Kubecost'],
    testimonial: {
      quote: 'The unit economics visibility Elena instituted allowed our executive committee to accurately price our digital logistics SaaS with healthy 68% gross margins.',
      author: 'Claire Beaumont',
      role: 'EVP of Digital Supply Chain',
      company: 'TransLogix Worldwide'
    }
  }
];

export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    number: '01',
    title: 'Forensic Discovery & TCO Audit',
    duration: 'Weeks 1 – 3',
    objective: 'Rapidly map technical debt, infrastructure spend, architectural vulnerabilities, and team delivery velocity without disrupting day-to-day operations.',
    activities: [
      'Comprehensive AWS / Azure multi-account configuration & security posture scan',
      'Unit economics breakdown: Infrastructure cost per customer, transaction, or compute unit',
      'Stakeholder interviews with C-Suite, Principal Engineers, and Product Directors',
      'Codebase & CI/CD pipeline diagnostic evaluating release bottlenecks'
    ],
    outputs: [
      'Executive TCO Audit Report with Immediate 30-Day Cost Curtailment Wins',
      'Architectural Health & Security Risk Matrix',
      'Engineering Team Topology Efficiency Map'
    ],
    keyDeliverable: 'Comprehensive IT Forensic Diagnostic & 30-Day TCO Savings Memo'
  },
  {
    number: '02',
    title: 'Target Architecture Blueprint & FinOps Baseline',
    duration: 'Weeks 4 – 6',
    objective: 'Architect the forward-looking target state balancing technical resilience, unit margin expansion, and enterprise compliance.',
    activities: [
      'Design modular microservices or event-driven distributed system topology',
      'Establish Cloud Landing Zone governance, multi-account guardrails, and IAM policies',
      'Define FinOps operational models, automated tagging taxonomy, and commitment plans',
      'Evaluate third-party vendor contracts (APM, data warehousing, cloud providers)'
    ],
    outputs: [
      'Target Architecture Blueprint (RFC-style documentation with sequence diagrams)',
      'Multi-Year FinOps Capital Allocation Strategy',
      'Legacy Strangle Pattern & Migration Phasing Roadmap'
    ],
    keyDeliverable: 'Production Target Architecture Specification & Multi-Year FinOps Plan'
  },
  {
    number: '03',
    title: 'Execution Topology & Team Enablement',
    duration: 'Weeks 7 – 9',
    objective: 'Align organizational structure, tooling, and engineering practices with the new architectural paradigm to achieve velocity.',
    activities: [
      'Restructure engineering squads around Domain-Driven Design (Team Topologies)',
      'Deploy Infrastructure-as-Code (Terraform/OpenTofu) foundational pipelines',
      'Implement automated observability baselines (SLOs, SLIs, automated canary deployments)',
      'Hands-on architecture reviews with staff and principal engineers'
    ],
    outputs: [
      'Standardized CI/CD GitOps Pipeline Templates',
      'Production Readiness Checklist & Chaos Testing Guidelines',
      'Principal Engineer Architecture Decision Records (ADRs)'
    ],
    keyDeliverable: 'Modular Platform Engineering Scaffold & Team Topology Framework'
  },
  {
    number: '04',
    title: 'Institutional Governance & Board Cadence',
    duration: 'Weeks 10 – 12',
    objective: 'Institutionalize enduring governance, transition roadmap ownership to internal leaders, and establish transparent C-suite metrics.',
    activities: [
      'Institutionalize Architecture Review Board (ARB) lightweight cadence',
      'Deliver final Board of Directors presentation on technical risk & enterprise value',
      'Finalize SOC2 / ISO / HIPAA automated evidence reporting pipelines',
      'Executive coaching for prospective VP of Engineering or Chief Architect successor'
    ],
    outputs: [
      'Board-Ready IT & Infrastructure Strategy Deck',
      'Self-Sustaining FinOps & Architecture Review Charter',
      'Long-Term Technology Modernization Runbook'
    ],
    keyDeliverable: 'Executive Board Pack & Sustainable Architecture Governance Charter'
  }
];

export const EXECUTIVE_PROFILE = {
  name: 'Elena Vance',
  title: 'IT Strategy Consultant & Fractional CIO',
  tagline: 'Bridging Enterprise IT Architecture with Measurable Business Value.',
  location: 'San Francisco, CA & Zurich, Switzerland (Global Advisory)',
  summary: 'Elena Vance is an enterprise technology strategist and fractional CIO with 14+ years of leadership driving cloud infrastructure modernization, FinOps unit economics, and secure distributed architectures for Fortune 500 enterprises and high-growth fintech unicorns. Former Head of Enterprise Architecture at Apex FinTech and Principal Solutions Architect at AWS.',
  experienceHighlights: [
    {
      period: '2022 – Present',
      role: 'Principal Executive Advisor & Fractional CIO',
      firm: 'Vance Advisory Group',
      summary: 'Advise venture boards, C-suites, and private equity sponsors on cloud modernization, M&A due diligence, and $10M+ IT cost rationalization.'
    },
    {
      period: '2018 – 2022',
      role: 'VP of Enterprise Architecture & Cloud Platforms',
      firm: 'Apex Financial Technologies',
      summary: 'Directed global 80-person platform organization. Spearheaded migration from legacy IBM mainframes to multi-region AWS EKS processing $85B in annual settlement flow.'
    },
    {
      period: '2014 – 2018',
      role: 'Principal Cloud Architect',
      firm: 'AWS Professional Services (ProServe)',
      summary: 'Trusted advisor to Tier-1 financial institutions and healthcare conglomerates. Designed foundational cloud landing zones and multi-tenant architectures.'
    },
    {
      period: '2010 – 2014',
      role: 'Lead Systems Architect & Security Engineer',
      firm: 'Helios Distributed Systems',
      summary: 'Engineered high-throughput low-latency cryptographic ledger nodes and distributed database consensus engines.'
    }
  ],
  certifications: [
    'AWS Certified Solutions Architect – Professional',
    'FinOps Certified Practitioner (FinOps Foundation)',
    'Certified Information Systems Security Professional (CISSP)',
    'Stanford Graduate School of Business: Executive Leadership Program'
  ],
  coreTenets: [
    {
      title: 'Unit Economics as Architecture',
      detail: 'Infrastructure architecture and profit margins are inextricably linked. Every microservice boundary must have a transparent cost model.'
    },
    {
      title: 'Pragmatic Modernization over Big-Bang',
      detail: 'Avoid multi-year rewriting failures. Strangle monoliths incrementally with observable event streams and customer-facing domain slices.'
    },
    {
      title: 'Zero-Trust as a Business Enabler',
      detail: 'Enterprise security should accelerate delivery rather than impede it. Automated compliance allows high-velocity releases into institutional markets.'
    }
  ]
};
