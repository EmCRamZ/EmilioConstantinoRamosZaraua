import React, { useState } from 'react';
import { ADVISORY_DOMAINS, CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, TabId } from '../types';

interface OverviewScreenProps {
  onTabChange: (tab: TabId) => void;
  onOpenCV: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  onTabChange,
  onOpenCV,
  onSelectCaseStudy,
}) => {
  // Accordion state - first one open by default as in screenshot
  const [openDomainId, setOpenDomainId] = useState<string | null>('cloud-finops');
  // Interactive sparkline active bar
  const [activeSparkIndex, setActiveSparkIndex] = useState<number | null>(4);

  const toggleDomain = (id: string) => {
    setOpenDomainId(prev => (prev === id ? null : id));
  };

  const sparklineData = [
    { label: 'Q1', height: '30%', value: '$5.2M' },
    { label: 'Q2', height: '45%', value: '$11.8M' },
    { label: 'Q3', height: '60%', value: '$22.4M' },
    { label: 'Q4', height: '75%', value: '$31.0M' },
    { label: 'Q1 (Audited)', height: '90%', value: '$38.5M', isHighlight: true },
    { label: 'Cumulative', height: '100%', value: '$42.1M', isPrimary: true },
  ];

  return (
    <div className="flex flex-col w-full space-y-8 pb-12">
      {/* 1. Hero Section */}
      <section aria-labelledby="hero-heading" className="flex flex-col items-start pt-2">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 bg-[#f1ede6] px-3.5 py-1.5 rounded-full shadow-xs border border-[#e4dec8]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bed100] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bed100]"></span>
          </span>
          <span className="font-headline text-[11px] sm:text-xs text-[#1c1c18] uppercase tracking-wider font-semibold">
            AVAILABLE FOR ADVISORY &amp; FRACTIONAL CIO ROLES
          </span>
        </div>

        {/* Editorial Hero Title */}
        <h1
          id="hero-heading"
          className="font-headline text-3xl sm:text-4xl md:text-5xl text-[#1c1c18] mt-4 tracking-tight font-bold leading-[1.15]"
        >
          Bridging Enterprise IT Architecture with{' '}
          <span className="bg-[#d9ef00]/50 px-1 py-0.5 rounded-xs decoration-clone">
            Measurable
          </span>{' '}
          Business Value.
        </h1>

        {/* Subheadline */}
        <p className="font-body text-base sm:text-lg text-[#47464b] mt-3 leading-relaxed max-w-2xl">
          14+ years scaling cloud infrastructure, modernizing legacy enterprise stacks, and delivering multimillion-dollar IT transformations for Fortune 500 &amp; high-growth fintechs.
        </p>

        {/* Executive Quick Actions */}
        <div className="flex flex-col sm:flex-row w-full gap-3 mt-6">
          <button
            onClick={() => onTabChange('book')}
            className="w-full sm:w-auto min-h-[48px] px-6 bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-xs sm:text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 font-bold shadow-sm active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            <span>SCHEDULE ADVISORY CALL</span>
          </button>

          <button
            onClick={onOpenCV}
            className="w-full sm:w-auto min-h-[48px] px-6 bg-[#f7f3ec] hover:bg-[#ece8e1] text-[#1c1c18] border border-[#e4dec8] font-headline text-xs sm:text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 font-semibold shadow-xs active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>EXECUTIVE CV (PDF)</span>
          </button>
        </div>
      </section>

      {/* 2. Executive Impact Metrics */}
      <section aria-label="Executive Impact Metrics" className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-headline text-xs text-[#47464b] uppercase tracking-widest font-semibold">
            QUANTIFIED IMPACT
          </span>
          <span className="font-headline text-xs text-[#5a6400] font-bold">
            Q1-Q4 Audited
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {/* Main Metric: $42M+ */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#e4dec8] shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="w-12 h-1 bg-[#d9ef00] rounded-full mb-3"></div>
            
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <span className="font-headline text-4xl sm:text-5xl text-black tracking-tight font-bold">
                $42M+
              </span>
              <span className="inline-flex items-center text-[#5a6400] text-xs font-headline bg-[#f1ede6] px-2.5 py-1 rounded-full font-bold border border-[#e4dec8]/60">
                <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                -34% Run-Rate
              </span>
            </div>

            <p className="font-headline text-sm sm:text-base text-[#47464b] mt-1 font-medium">
              Cumulative IT Cost Optimization
            </p>

            {/* Sparkline Visualization */}
            <div className="mt-5 pt-3 border-t border-[#e4dec8]/50 flex flex-col">
              <div className="flex items-center justify-between text-[11px] font-headline text-[#77767b] mb-1.5">
                <span>Infrastructure Spend Trajectory</span>
                <span className="text-[#1c1c18] font-bold">
                  {activeSparkIndex !== null ? `${sparklineData[activeSparkIndex].label}: ${sparklineData[activeSparkIndex].value}` : 'Interactive Run-Rate'}
                </span>
              </div>
              <div className="flex items-end gap-2 h-10 w-full pt-1">
                {sparklineData.map((bar, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setActiveSparkIndex(idx)}
                    onClick={() => setActiveSparkIndex(idx)}
                    aria-label={`View ${bar.label} metric: ${bar.value}`}
                    className={`flex-1 rounded-xs transition-all duration-200 cursor-pointer ${
                      bar.isPrimary
                        ? 'bg-black hover:opacity-80'
                        : bar.isHighlight
                        ? 'bg-[#d9ef00] hover:bg-[#bed100]'
                        : 'bg-[#ece8e1] hover:bg-[#dddad3]'
                    } ${activeSparkIndex === idx ? 'ring-2 ring-black' : ''}`}
                    style={{ height: bar.height }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Secondary 2-Col Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#e4dec8] shadow-xs flex flex-col justify-between">
              <div className="w-8 h-1 bg-[#d9ef00] rounded-full mb-2"></div>
              <span className="font-headline text-2xl sm:text-3xl text-black tracking-tight font-bold">
                99.99%
              </span>
              <p className="font-body text-xs sm:text-sm text-[#47464b] mt-1 font-medium leading-tight">
                System Reliability Across Migrations
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#e4dec8] shadow-xs flex flex-col justify-between">
              <div className="w-8 h-1 bg-[#d9ef00] rounded-full mb-2"></div>
              <span className="font-headline text-2xl sm:text-3xl text-black tracking-tight font-bold">
                35+
              </span>
              <p className="font-body text-xs sm:text-sm text-[#47464b] mt-1 font-medium leading-tight">
                Enterprise Modernization Deliveries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Competencies & Advisory Domains */}
      <section aria-labelledby="domains-heading" className="space-y-3">
        <div className="flex flex-col space-y-0.5">
          <span className="font-headline text-xs text-[#47464b] uppercase tracking-widest font-semibold">
            STRATEGIC SCOPE
          </span>
          <h2 id="domains-heading" className="font-headline text-xl sm:text-2xl text-[#1c1c18] font-bold">
            Core Advisory Domains
          </h2>
        </div>

        {/* Accordion Stack */}
        <div className="flex flex-col space-y-2">
          {ADVISORY_DOMAINS.map((domain) => {
            const isOpen = openDomainId === domain.id;
            return (
              <div
                key={domain.id}
                className="bg-white rounded-xl border border-[#e4dec8] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleDomain(domain.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left min-h-[52px] hover:bg-[#fdf9f2]/70 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-9 h-9 rounded-lg bg-[#ece8e1] flex items-center justify-center shrink-0 text-[#1c1c18]">
                      <span className="material-symbols-outlined text-[20px]">{domain.icon}</span>
                    </span>
                    <span className="font-headline text-base sm:text-lg text-[#1c1c18] font-semibold truncate">
                      {domain.title}
                    </span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-[#47464b] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 border-t border-[#e4dec8]/40 bg-[#fdf9f2]/30">
                    <p className="font-body text-sm text-[#47464b] mt-3 leading-relaxed">
                      {domain.summary}
                    </p>

                    {domain.deliverables && (
                      <div className="mt-3 pt-2">
                        <span className="font-headline text-[11px] uppercase tracking-wider font-bold text-[#77767b]">
                          Key Artifacts &amp; Deliverables:
                        </span>
                        <ul className="mt-1.5 space-y-1">
                          {domain.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 text-xs text-[#27272a]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#bed100] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {domain.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#f1ede6] text-[#1c1c18] font-headline text-xs rounded border border-[#e4dec8] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Featured Strategic Case Studies */}
      <section aria-labelledby="cases-heading" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-headline text-xs text-[#47464b] uppercase tracking-widest font-semibold">
              TRACK RECORD
            </span>
            <h2 id="cases-heading" className="font-headline text-xl sm:text-2xl text-[#1c1c18] font-bold">
              Featured Engagements
            </h2>
          </div>
          <button
            onClick={() => onTabChange('work')}
            className="font-headline text-xs sm:text-sm text-black font-bold hover:underline flex items-center group"
          >
            <span>View All</span>
            <span className="material-symbols-outlined text-[16px] ml-0.5 group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Featured Cards */}
        <div className="space-y-4">
          {CASE_STUDIES.slice(0, 2).map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-xl border border-[#e4dec8] shadow-xs overflow-hidden flex flex-col group hover:border-black transition-colors"
            >
              {/* Card Image Banner with Category Tag */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#ece8e1]">
                <img
                  src={study.image}
                  alt={study.altText}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-[#1b1b1e]', 'text-white', 'p-6');
                      target.parentElement.innerHTML = `
                        <div class="text-center">
                          <span class="font-headline text-xs text-[#d9ef00] uppercase font-bold tracking-widest">${study.tag}</span>
                          <h4 class="font-headline text-lg font-bold text-white mt-1">${study.title}</h4>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute top-3 left-3 bg-black text-[#d9ef00] px-2.5 py-1 rounded font-headline text-[11px] uppercase font-bold tracking-wider shadow-sm">
                  {study.tag}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-lg sm:text-xl text-[#1c1c18] font-bold group-hover:text-black transition-colors">
                    {study.title}
                  </h3>
                  <p className="font-body text-sm text-[#47464b] mt-2 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Outcome Metric Box with Circular Action */}
                <div className="mt-5 p-3.5 bg-[#f7f3ec] rounded-lg border border-[#e4dec8] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-headline text-xs text-[#47464b] font-medium">
                      {study.outcomeLabel}
                    </span>
                    <span className="font-headline text-base sm:text-lg text-black font-bold leading-none mt-0.5">
                      {study.outcomeValue}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(study)}
                    aria-label={`View ${study.title} details`}
                    className="w-10 h-10 rounded-full bg-[#d9ef00] hover:bg-[#bed100] text-black flex items-center justify-center shrink-0 shadow-xs active:scale-90 transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Executive Endorsement Quote Card */}
      <section aria-label="Client Testimonial">
        <div className="bg-[#f1ede6] p-5 sm:p-6 rounded-xl border border-[#e4dec8] shadow-xs relative overflow-hidden">
          <span
            className="material-symbols-outlined text-[#d9ef00] text-[64px] absolute -right-2 -bottom-3 opacity-60 pointer-events-none select-none"
            aria-hidden="true"
          >
            format_quote
          </span>

          <div className="flex items-center gap-1 text-[#5a6400] mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>

          <blockquote className="font-body text-base sm:text-lg text-[#1c1c18] italic font-medium leading-relaxed relative z-10">
            “Elena re-architected our entire IT roadmap within 90 days. Her strategic clarity and ability to speak both C-suite finance and deep engineering is unmatched.”
          </blockquote>

          <div className="mt-4 pt-3 border-t border-[#e4dec8]/50 flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-[#e6e2db] border border-[#e4dec8] flex items-center justify-center font-headline text-xs font-bold text-black">
              DS
            </div>
            <div className="flex flex-col">
              <cite className="not-italic font-headline text-sm text-[#1c1c18] font-bold">
                David Sterling
              </cite>
              <span className="font-body text-xs text-[#47464b]">
                Chief Operating Officer, Finova Global
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Advisory Booking & Direct Contact Module */}
      <section
        id="book-consult"
        aria-labelledby="contact-heading"
        className="bg-black text-white p-6 sm:p-7 rounded-xl shadow-md flex flex-col space-y-4"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#d9ef00]/20 text-[#d9ef00] px-3 py-1 rounded-full font-headline text-xs font-semibold">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            <span>Typical response time &lt; 24 hrs</span>
          </div>

          <h2 id="contact-heading" className="font-headline text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ready to optimize your IT strategy?
          </h2>

          <p className="font-body text-sm sm:text-base text-[#ece8e1]/80 leading-relaxed max-w-xl">
            Engage Elena for fractional leadership, strategic infrastructure reviews, or executive architecture roadmaps.
          </p>
        </div>

        {/* Booking Options */}
        <div className="flex flex-col space-y-2.5 pt-2">
          <button
            onClick={() => onTabChange('book')}
            className="min-h-[48px] px-5 bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-xs sm:text-sm uppercase tracking-wider rounded-lg flex items-center justify-between font-bold active:scale-[0.98] transition-all"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>RESERVE ADVISORY SESSION</span>
            </span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href="mailto:advisory@elenavance.tech"
              className="min-h-[44px] px-3 bg-white/10 hover:bg-white/15 text-white rounded-lg flex items-center justify-center gap-1.5 font-headline text-xs font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[17px]">alternate_email</span>
              <span>Email Direct</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-3 bg-white/10 hover:bg-white/15 text-white rounded-lg flex items-center justify-center gap-1.5 font-headline text-xs font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[17px]">verified</span>
              <span>LinkedIn InMail</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
