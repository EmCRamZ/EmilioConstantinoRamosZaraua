import React from 'react';
import { CaseStudy, TabId } from '../types';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onBookSession: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onBookSession,
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div className="bg-[#fdf9f2] w-full max-w-2xl rounded-2xl border border-[#e4dec8] shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#e4dec8] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="bg-black text-[#d9ef00] px-2.5 py-0.5 rounded font-headline text-[10px] uppercase font-bold tracking-wider">
              {study.tag}
            </span>
            <span className="font-headline text-xs text-[#77767b] hidden sm:inline">
              // Enterprise Architecture Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-[#f1ede6] hover:bg-[#ece8e1] text-[#1c1c18] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Header */}
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-black tracking-tight leading-tight">
              {study.title}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-[#5a6400] font-headline font-semibold">
              <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
              <span>{study.clientType}</span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative h-48 sm:h-64 w-full rounded-xl overflow-hidden bg-black">
            <img
              src={study.image}
              alt={study.altText}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <div className="text-white">
                <span className="text-[10px] font-headline uppercase font-bold text-[#d9ef00] tracking-wider block">
                  Audited Outcome
                </span>
                <span className="font-headline text-lg sm:text-xl font-bold">
                  {study.outcomeValue}
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {study.impactMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg border border-[#e4dec8] shadow-xs">
                <span className="text-[11px] font-headline text-[#77767b] block truncate">
                  {metric.label}
                </span>
                <span className="font-headline text-lg sm:text-xl font-bold text-black block mt-0.5">
                  {metric.value}
                </span>
                {metric.change && (
                  <span className="text-[10px] text-[#5a6400] font-semibold block truncate">
                    {metric.change}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Challenge Section */}
          <div className="bg-white p-5 rounded-xl border border-[#e4dec8] space-y-2">
            <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-[#77767b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-red-600">warning</span>
              <span>The Technical &amp; Operational Challenge</span>
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#27272a] leading-relaxed">
              {study.fullChallenge}
            </p>
          </div>

          {/* Architectural Solution Section */}
          <div className="bg-white p-5 rounded-xl border border-[#e4dec8] space-y-4">
            <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-[#77767b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#5a6400]">architecture</span>
              <span>Architectural Blueprint &amp; Execution Phasing</span>
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#27272a] leading-relaxed">
              {study.architecturalSolution}
            </p>

            {/* Architecture Steps */}
            <div className="space-y-2.5 pt-2">
              {study.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#fdf9f2] rounded-lg border border-[#e4dec8]/70 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-black text-[#d9ef00] text-[10px] font-headline font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-headline text-xs font-bold text-black">
                      {step.title}
                    </h4>
                    <p className="font-body text-xs text-[#47464b] mt-0.5 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="font-headline text-xs uppercase font-bold text-[#77767b] mb-2">
              Enterprise Stack &amp; Infrastructure
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {study.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white rounded border border-[#e4dec8] text-xs font-mono text-black font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial if present */}
          {study.testimonial && (
            <div className="bg-[#f1ede6] p-5 rounded-xl border border-[#e4dec8] relative overflow-hidden">
              <p className="font-body text-xs sm:text-sm text-[#1c1c18] italic leading-relaxed">
                “{study.testimonial.quote}”
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-headline text-xs font-bold text-black">
                  {study.testimonial.author}
                </span>
                <span className="text-xs text-[#77767b]">//</span>
                <span className="text-xs text-[#47464b]">
                  {study.testimonial.role}, {study.testimonial.company}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#e4dec8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#47464b] hidden sm:block">
            Need similar outcomes for your enterprise infrastructure?
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 bg-[#f1ede6] text-black font-headline text-xs font-semibold rounded-lg"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSession();
              }}
              className="flex-1 sm:flex-initial px-5 py-2 bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>Schedule Advisory</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
