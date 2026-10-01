export type TabId = 'overview' | 'work' | 'method' | 'exec' | 'book';

export interface AdvisoryDomain {
  id: string;
  title: string;
  icon: string;
  summary: string;
  tags: string[];
  deliverables?: string[];
  metricsHighlighted?: string;
}

export interface CaseStudy {
  id: string;
  tag: string;
  category: 'cloud' | 'architecture' | 'ai' | 'security';
  title: string;
  clientType: string;
  image: string;
  altText: string;
  description: string;
  outcomeLabel: string;
  outcomeValue: string;
  fullChallenge: string;
  architecturalSolution: string;
  architectureSteps: { title: string; detail: string }[];
  impactMetrics: { label: string; value: string; change?: string }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface MethodologyPhase {
  number: string;
  title: string;
  duration: string;
  objective: string;
  activities: string[];
  outputs: string[];
  keyDeliverable: string;
}

export interface AdvisoryBooking {
  sessionType: 'discovery' | 'diagnostic' | 'fractional';
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  company: string;
  role: string;
  techStackFocus: string[];
  currentChallenge: string;
}
