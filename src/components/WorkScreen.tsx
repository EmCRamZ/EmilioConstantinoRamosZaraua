import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, TabId } from '../types';

interface WorkScreenProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onTabChange: (tab: TabId) => void;
}

export const WorkScreen: React.FC<WorkScreenProps> = ({
  onSelectCaseStudy,
  onTabChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive Cloud Spend ROI calculator
  const [monthlySpend, setMonthlySpend] = useState<number>(250000); // $250k / mo

  const categories = [
    { id: 'all', label: 'All Engagements' },
    { id: 'cloud', label: 'Cloud & FinOps' },
    { id: 'security', label: 'Zero-Trust & Compliance' },
    { id: 'ai', label: 'Enterprise AI & Mesh' },
  ];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    const matchesCategory =
      selectedCategory === 'all' || study.category === selectedCategory;
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate estimated savings based on historical 34% run-rate reduction
  const estimatedAnnualSavings = Math.round(monthlySpend * 12 * 0.34);
  const estimatedCadenceMultiplier = monthlySpend > 500000 ? '4.5x' : '3.8x';

  return (
    <div className="flex flex-col w-full space-y-7 pb-12">
      {/* Header Banner */}
      <section className="space-y-2">
        <div className="inline-flex items-center gap-2 bg-[#f1ede6] px-3 py-1 rounded-full text-xs font-headline font-semibold text-[#47464b] border border-[#e4dec8]">
          <span className="material-symbols-outlined text-[16px] text-black">domain_verification</span>
          <span>ENTERPRISE CASE STUDIES // TRACK RECORD</span>
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
          Delivering High-Impact Technology Transformations
        </h1>
        <p className="font-body text-sm sm:text-base text-[#47464b] leading-relaxed max-w-2xl">
          Deep architectural case studies spanning Tier-1 financial institutions, healthcare data pipelines, and mission-critical cloud migrations.
        </p>
      </section>

      {/* Interactive Cloud Run-Rate Savings Estimator */}
      <div className="bg-[#f7f3ec] p-5 sm:p-6 rounded-xl border border-[#e4dec8] shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-[#d9ef00] flex items-center justify-center text-black font-bold">
              <span className="material-symbols-outlined text-[18px]">calculate</span>
            </span>
            <div>
              <h2 className="font-headline text-base sm:text-lg font-bold text-black">
                FinOps ROI Estimator
              </h2>
              <p className="font-body text-xs text-[#47464b]">
                Benchmark your potential run-rate reduction based on audited historical client outcomes
              </p>
            </div>
          </div>
          <span className="font-headline text-xs bg-white px-2.5 py-1 rounded border border-[#e4dec8] font-bold text-[#5a6400]">
            34% Avg. Reduction
          </span>
        </div>

        {/* Range Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-headline font-semibold">
            <span className="text-[#47464b]">Current Monthly Cloud Spend:</span>
            <span className="text-black font-bold text-sm bg-white px-2 py-0.5 rounded border border-[#e4dec8]">
              ${(monthlySpend).toLocaleString()} / month
            </span>
          </div>
          <input
            type="range"
            min={50000}
            max={2000000}
            step={25000}
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(Number(e.target.value))}
            className="w-full accent-[#5a6400] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#77767b] font-headline">
            <span>$50K/mo</span>
            <span>$500K/mo</span>
            <span>$1M/mo</span>
            <span>$2M/mo+</span>
          </div>
        </div>

        {/* Dynamic Estimated Output */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-white p-3.5 rounded-lg border border-[#e4dec8] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#47464b] font-headline">Estimated Annual Savings:</span>
              <div className="font-headline text-xl sm:text-2xl font-bold text-black">
                ${(estimatedAnnualSavings).toLocaleString()}
              </div>
            </div>
            <span className="w-8 h-8 rounded-full bg-[#d9ef00]/30 text-[#5a6400] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">savings</span>
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-[#e4dec8] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#47464b] font-headline">Expected Velocity Lift:</span>
              <div className="font-headline text-xl sm:text-2xl font-bold text-black">
                {estimatedCadenceMultiplier} Deploy Speed
              </div>
            </div>
            <span className="w-8 h-8 rounded-full bg-[#f1ede6] text-black flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">speed</span>
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-headline font-semibold rounded-md whitespace-nowrap transition-colors border ${
                selectedCategory === cat.id
                  ? 'bg-black text-[#d9ef00] border-black shadow-xs'
                  : 'bg-white text-[#47464b] border-[#e4dec8] hover:text-black hover:bg-[#f1ede6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[220px]">
          <span className="material-symbols-outlined text-[18px] text-[#77767b] absolute left-3 top-2.5">
            search
          </span>
          <input
            type="text"
            placeholder="Search stack, tech, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white text-xs font-body text-black rounded-lg border border-[#e4dec8] focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 gap-5">
        {filteredStudies.map((study) => (
          <article
            key={study.id}
            className="bg-white rounded-xl border border-[#e4dec8] shadow-xs overflow-hidden flex flex-col group hover:border-black transition-colors"
          >
            {/* Image Header with Badge */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#ece8e1]">
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
              <div className="absolute top-3 left-3 bg-black text-[#d9ef00] px-3 py-1 rounded font-headline text-[11px] uppercase font-bold tracking-wider shadow-sm">
                {study.tag}
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#1c1c18] px-2.5 py-1 rounded text-xs font-headline font-semibold shadow-xs">
                {study.clientType}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex flex-col space-y-4">
              <div>
                <h3 className="font-headline text-xl font-bold text-black">
                  {study.title}
                </h3>
                <p className="font-body text-sm text-[#47464b] mt-2 leading-relaxed">
                  {study.description}
                </p>
              </div>

              {/* Impact Metrics Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {study.impactMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-2.5 bg-[#fdf9f2] rounded border border-[#e4dec8]/70 flex flex-col"
                  >
                    <span className="font-headline text-xs text-[#77767b] truncate">
                      {metric.label}
                    </span>
                    <span className="font-headline text-base sm:text-lg font-bold text-black mt-0.5">
                      {metric.value}
                    </span>
                    {metric.change && (
                      <span className="text-[10px] text-[#5a6400] font-semibold truncate">
                        {metric.change}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {study.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-[#f1ede6] text-[#27272a] text-xs font-mono rounded border border-[#e4dec8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-[#e4dec8] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#47464b]">
                  <span className="font-headline font-semibold text-black">
                    {study.outcomeLabel}:
                  </span>
                  <span className="font-headline font-bold text-black">
                    {study.outcomeValue}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCaseStudy(study)}
                  className="px-4 py-2 bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-xs uppercase font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <span>Architecture Deep Dive</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </button>
              </div>
            </div>
          </article>
        ))}

        {filteredStudies.length === 0 && (
          <div className="p-12 text-center bg-white rounded-xl border border-[#e4dec8]">
            <span className="material-symbols-outlined text-[36px] text-[#77767b]">
              search_off
            </span>
            <p className="font-headline text-base font-bold text-black mt-2">
              No case studies found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 bg-[#f1ede6] text-xs font-headline font-bold rounded"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Advisory CTA footer */}
      <div className="bg-[#1b1b1e] text-white p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-headline text-lg font-bold text-white">
            Have a complex architecture or FinOps challenge?
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#ece8e1]/80 mt-1">
            Book an executive discovery session to evaluate your current roadmap.
          </p>
        </div>
        <button
          onClick={() => onTabChange('book')}
          className="px-5 py-2.5 bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-xs font-bold uppercase rounded-lg shrink-0"
        >
          Book Discovery
        </button>
      </div>
    </div>
  );
};
