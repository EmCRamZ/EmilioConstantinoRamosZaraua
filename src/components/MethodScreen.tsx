import React, { useState } from 'react';
import { METHODOLOGY_PHASES } from '../data/portfolioData';
import { TabId } from '../types';

interface MethodScreenProps {
  onTabChange: (tab: TabId) => void;
}

export const MethodScreen: React.FC<MethodScreenProps> = ({ onTabChange }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  // Diagnostic Quiz State
  const [spendScale, setSpendScale] = useState<string>('scaling');
  const [deployCadence, setDeployCadence] = useState<string>('weekly');
  const [complianceStatus, setComplianceStatus] = useState<string>('manual');
  const [showDiagnosticResult, setShowDiagnosticResult] = useState<boolean>(false);

  const activePhase = METHODOLOGY_PHASES[activePhaseIndex];

  return (
    <div className="flex flex-col w-full space-y-7 pb-12">
      {/* Header */}
      <section className="space-y-2">
        <div className="inline-flex items-center gap-2 bg-[#f1ede6] px-3 py-1 rounded-full text-xs font-headline font-semibold text-[#47464b] border border-[#e4dec8]">
          <span className="material-symbols-outlined text-[16px] text-black">account_tree</span>
          <span>THE ADVISORY BLUEPRINT // 90-DAY TRANSFORMATION</span>
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
          A Disciplined, Executive-Grade Architecture Framework
        </h1>
        <p className="font-body text-sm sm:text-base text-[#47464b] leading-relaxed max-w-2xl">
          Elena's battle-tested 90-day engagement blueprint bridges boardroom fiscal strategy with hard-core distributed systems engineering.
        </p>
      </section>

      {/* Phase Selector Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {METHODOLOGY_PHASES.map((phase, idx) => {
          const isSelected = activePhaseIndex === idx;
          return (
            <button
              key={phase.number}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                isSelected
                  ? 'bg-black text-white border-black shadow-sm ring-2 ring-[#d9ef00]'
                  : 'bg-white text-[#1c1c18] border-[#e4dec8] hover:bg-[#f1ede6]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-headline text-xs font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-[#d9ef00] text-black' : 'bg-[#f1ede6] text-[#47464b]'
                  }`}
                >
                  PHASE {phase.number}
                </span>
                <span className="text-[11px] font-headline text-[#77767b]">{phase.duration}</span>
              </div>
              <h4 className="font-headline text-xs sm:text-sm font-bold mt-2 truncate">
                {phase.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#e4dec8] shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#e4dec8]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#d9ef00] text-black font-headline font-bold flex items-center justify-center">
                {activePhase.number}
              </span>
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-black">
                {activePhase.title}
              </h2>
            </div>
            <p className="font-headline text-xs text-[#5a6400] font-semibold mt-1">
              Timeline: {activePhase.duration}
            </p>
          </div>

          <div className="p-2.5 bg-[#f7f3ec] rounded-lg border border-[#e4dec8] self-start sm:self-auto">
            <span className="font-headline text-[10px] uppercase font-bold text-[#77767b] block">
              Core Objective
            </span>
            <span className="font-body text-xs font-medium text-[#1c1c18] max-w-sm block">
              {activePhase.objective}
            </span>
          </div>
        </div>

        {/* Diagnostic Activities */}
        <div>
          <h3 className="font-headline text-xs uppercase tracking-wider font-bold text-[#77767b] mb-3">
            Key Advisory Activities &amp; Methodologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activePhase.activities.map((activity, aIdx) => (
              <div
                key={aIdx}
                className="p-3 bg-[#fdf9f2] rounded-lg border border-[#e4dec8]/80 flex items-start gap-2.5"
              >
                <span className="material-symbols-outlined text-[18px] text-[#5a6400] shrink-0 mt-0.5">
                  task_alt
                </span>
                <span className="font-body text-xs text-[#27272a] leading-relaxed">
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tangible Outputs */}
        <div>
          <h3 className="font-headline text-xs uppercase tracking-wider font-bold text-[#77767b] mb-3">
            Institutional Outputs Delivered
          </h3>
          <div className="space-y-2">
            {activePhase.outputs.map((output, oIdx) => (
              <div
                key={oIdx}
                className="p-3 bg-[#f1ede6]/60 rounded-lg border border-[#e4dec8] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-black">
                    description
                  </span>
                  <span className="font-headline text-xs font-semibold text-black">
                    {output}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase bg-white px-2 py-0.5 rounded border border-[#e4dec8]">
                  Verified
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Key Deliverable */}
        <div className="p-4 bg-black text-white rounded-lg flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-[#d9ef00] text-black flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </span>
            <div>
              <span className="text-[10px] font-headline uppercase font-bold text-[#d9ef00] tracking-wider block">
                Signature Milestone Deliverable
              </span>
              <span className="font-headline text-sm font-bold text-white">
                {activePhase.keyDeliverable}
              </span>
            </div>
          </div>

          <button
            onClick={() => onTabChange('book')}
            className="px-3.5 py-1.5 bg-[#d9ef00] hover:bg-[#bed100] text-black text-xs font-headline font-bold rounded"
          >
            Scope This Phase
          </button>
        </div>
      </div>

      {/* Interactive Architecture Maturity Diagnostic Tool */}
      <div className="bg-[#f7f3ec] p-6 rounded-xl border border-[#e4dec8] shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-headline font-bold text-[#5a6400]">
            <span className="material-symbols-outlined text-[16px]">troubleshoot</span>
            <span>EXECUTIVE SELF-ASSESSMENT</span>
          </div>
          <h2 className="font-headline text-xl font-bold text-black mt-1">
            Enterprise Architecture &amp; FinOps Diagnostic
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#47464b] mt-0.5">
            Answer 3 quick structural questions to calculate your infrastructure maturity score and recommended strategic focus.
          </p>
        </div>

        {/* Question 1: Cloud Spend Scale */}
        <div className="space-y-1.5">
          <label className="font-headline text-xs font-bold text-[#1c1c18] block">
            1. What is your current cloud spend &amp; growth trajectory?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'early', label: 'Under $50k/mo', desc: 'Pre-scale, focused on product market fit' },
              { id: 'scaling', label: '$50k - $250k/mo', desc: 'Fast growth, noticeable bill creep' },
              { id: 'enterprise', label: 'Over $250k/mo+', desc: 'Multi-account sprawl & multi-cloud complexity' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSpendScale(opt.id)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  spendScale === opt.id
                    ? 'bg-black text-white border-black font-semibold ring-1 ring-[#d9ef00]'
                    : 'bg-white text-[#1c1c18] border-[#e4dec8] hover:bg-[#f1ede6]'
                }`}
              >
                <div className="text-xs font-headline font-bold">{opt.label}</div>
                <div className={`text-[11px] mt-1 ${spendScale === opt.id ? 'text-[#ece8e1]' : 'text-[#77767b]'}`}>
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Deployment Cadence */}
        <div className="space-y-1.5">
          <label className="font-headline text-xs font-bold text-[#1c1c18] block">
            2. How frequently does your core platform release to production?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'daily', label: 'Multiple times per day', desc: 'Automated CI/CD with canary releases' },
              { id: 'weekly', label: 'Weekly or bi-weekly', desc: 'Manual QA cycles with staging lockouts' },
              { id: 'monthly', label: 'Monthly or quarterly', desc: 'High-risk release trains and maintenance windows' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setDeployCadence(opt.id)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  deployCadence === opt.id
                    ? 'bg-black text-white border-black font-semibold ring-1 ring-[#d9ef00]'
                    : 'bg-white text-[#1c1c18] border-[#e4dec8] hover:bg-[#f1ede6]'
                }`}
              >
                <div className="text-xs font-headline font-bold">{opt.label}</div>
                <div className={`text-[11px] mt-1 ${deployCadence === opt.id ? 'text-[#ece8e1]' : 'text-[#77767b]'}`}>
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Question 3: Compliance & Security Posture */}
        <div className="space-y-1.5">
          <label className="font-headline text-xs font-bold text-[#1c1c18] block">
            3. What is your continuous compliance &amp; SOC2 posture?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'automated', label: 'Continuous & Automated', desc: 'Infrastructure as code with automated audit logs' },
              { id: 'manual', label: 'Ad-hoc / Manual Evidence', desc: 'Scrambling for screenshots during audit season' },
              { id: 'legacy', label: 'Pre-audit / Impending review', desc: 'Blocking major enterprise client procurement' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setComplianceStatus(opt.id)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  complianceStatus === opt.id
                    ? 'bg-black text-white border-black font-semibold ring-1 ring-[#d9ef00]'
                    : 'bg-white text-[#1c1c18] border-[#e4dec8] hover:bg-[#f1ede6]'
                }`}
              >
                <div className="text-xs font-headline font-bold">{opt.label}</div>
                <div className={`text-[11px] mt-1 ${complianceStatus === opt.id ? 'text-[#ece8e1]' : 'text-[#77767b]'}`}>
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action button to generate diagnostic */}
        <div className="pt-2">
          {!showDiagnosticResult ? (
            <button
              type="button"
              onClick={() => setShowDiagnosticResult(true)}
              className="w-full sm:w-auto px-6 py-2.5 bg-black hover:bg-[#27272a] text-[#d9ef00] font-headline text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">analytics</span>
              <span>Generate Maturity Scorecard</span>
            </button>
          ) : (
            <div className="p-4 bg-white rounded-lg border border-[#e4dec8] space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="font-headline text-xs text-[#77767b] uppercase font-bold block">
                    Diagnostic Finding:
                  </span>
                  <h4 className="font-headline text-base font-bold text-black">
                    {spendScale === 'enterprise' || deployCadence === 'monthly'
                      ? 'High Priority: Phase 01 Forensic Audit & FinOps Strangle Pattern'
                      : 'Optimization Candidate: Phase 02 Target Architecture & CI/CD Platform Scaffold'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="font-headline text-xs text-[#5a6400] font-bold bg-[#f1ede6] px-2.5 py-1 rounded">
                    Score: 68/100
                  </span>
                </div>
              </div>
              <p className="font-body text-xs text-[#47464b] leading-relaxed">
                Based on your profile, you are likely carrying 25-40% unallocated cloud overprovisioning and suffering from monolithic coupling during releases. A focused Phase 1 discovery engagement could recover significant OPEX within 30 days.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => onTabChange('book')}
                  className="px-4 py-2 bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-xs font-bold uppercase rounded-lg"
                >
                  Book 30-min Audit Consultation
                </button>
                <button
                  onClick={() => setShowDiagnosticResult(false)}
                  className="px-3 py-2 bg-[#f1ede6] text-black text-xs font-headline font-semibold rounded-lg"
                >
                  Recalculate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
