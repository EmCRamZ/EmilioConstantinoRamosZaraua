import React from 'react';
import { EXECUTIVE_PROFILE, ELENA_AVATAR } from '../data/portfolioData';
import { TabId } from '../types';

interface ExecScreenProps {
  onOpenCV: () => void;
  onTabChange: (tab: TabId) => void;
}

export const ExecScreen: React.FC<ExecScreenProps> = ({ onOpenCV, onTabChange }) => {
  return (
    <div className="flex flex-col w-full space-y-7 pb-12">
      {/* Header Profile Hero */}
      <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e4dec8] shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <div className="relative shrink-0">
            <img
              src={ELENA_AVATAR}
              alt="Elena Vance Executive Portrait"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover ring-2 ring-[#e4dec8]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = `
                    <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-black text-[#d9ef00] flex items-center justify-center font-headline text-2xl font-bold">
                      EV
                    </div>
                  `;
                }
              }}
            />
            <span className="absolute -bottom-2 -right-2 bg-black text-[#d9ef00] px-2 py-0.5 rounded text-[10px] font-headline font-bold uppercase tracking-wider">
              CIO / CTO
            </span>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-headline font-semibold bg-[#f1ede6] text-[#47464b] border border-[#e4dec8]">
                <span className="w-2 h-2 rounded-full bg-[#bed100]"></span>
                <span>Active Advisory Practice</span>
              </span>
              <span className="text-xs text-[#77767b] font-headline">
                {EXECUTIVE_PROFILE.location}
              </span>
            </div>

            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-black tracking-tight">
              {EXECUTIVE_PROFILE.name}
            </h1>

            <p className="font-headline text-sm font-semibold text-[#5a6400]">
              {EXECUTIVE_PROFILE.title}
            </p>

            <p className="font-body text-xs sm:text-sm text-[#47464b] leading-relaxed">
              {EXECUTIVE_PROFILE.summary}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-[#e4dec8]">
          <button
            onClick={onOpenCV}
            className="flex-1 min-h-[44px] px-4 bg-black hover:bg-[#27272a] text-[#d9ef00] font-headline text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">description</span>
            <span>View Full Executive CV &amp; Dossier</span>
          </button>

          <button
            onClick={() => onTabChange('book')}
            className="flex-1 min-h-[44px] px-4 bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Schedule Executive Alignment</span>
          </button>
        </div>
      </section>

      {/* Architectural Philosophy & Tenets */}
      <section className="space-y-3">
        <div className="flex flex-col">
          <span className="font-headline text-xs text-[#47464b] uppercase tracking-widest font-semibold">
            GOVERNING PHILOSOPHY
          </span>
          <h2 className="font-headline text-xl font-bold text-black">
            Architectural Tenets
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {EXECUTIVE_PROFILE.coreTenets.map((tenet, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-xl border border-[#e4dec8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#77767b] block mb-1">
                  TENET 0{idx + 1}
                </span>
                <h3 className="font-headline text-base font-bold text-black">
                  {tenet.title}
                </h3>
                <p className="font-body text-xs text-[#47464b] mt-2 leading-relaxed">
                  {tenet.detail}
                </p>
              </div>
              <div className="w-6 h-0.5 bg-[#d9ef00] mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Trajectory */}
      <section className="space-y-3">
        <div className="flex flex-col">
          <span className="font-headline text-xs text-[#47464b] uppercase tracking-widest font-semibold">
            CAREER TRAJECTORY
          </span>
          <h2 className="font-headline text-xl font-bold text-black">
            Executive Leadership &amp; Operating Roles
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-[#e4dec8] shadow-xs divide-y divide-[#e4dec8]">
          {EXECUTIVE_PROFILE.experienceHighlights.map((exp, idx) => (
            <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-headline text-xs font-bold bg-[#f1ede6] text-black px-2 py-0.5 rounded border border-[#e4dec8]">
                    {exp.period}
                  </span>
                  <span className="font-headline text-sm font-bold text-black">
                    {exp.firm}
                  </span>
                </div>
                <h3 className="font-headline text-base font-semibold text-[#1c1c18]">
                  {exp.role}
                </h3>
                <p className="font-body text-xs text-[#47464b] leading-relaxed pt-1">
                  {exp.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Institutional Accreditations */}
      <section className="space-y-3">
        <div className="flex flex-col">
          <span className="font-headline text-xs text-[#47464b] uppercase tracking-widest font-semibold">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="font-headline text-xl font-bold text-black">
            Accreditations &amp; Education
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {EXECUTIVE_PROFILE.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-white rounded-xl border border-[#e4dec8] shadow-xs flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded bg-[#f1ede6] flex items-center justify-center shrink-0 text-black">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </span>
              <span className="font-headline text-xs font-semibold text-black">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Engagements & Board Service */}
      <div className="bg-[#f7f3ec] p-5 rounded-xl border border-[#e4dec8] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-headline text-xs text-[#5a6400] font-bold uppercase tracking-wider block">
            BOARD &amp; VENTURE SPONSOR SERVICE
          </span>
          <h3 className="font-headline text-base font-bold text-black mt-0.5">
            Looking for an independent board advisor or M&amp;A technical diligence auditor?
          </h3>
          <p className="font-body text-xs text-[#47464b] mt-1">
            Elena provides confidential diligence briefings for venture partners and private equity funds.
          </p>
        </div>
        <button
          onClick={() => onTabChange('book')}
          className="px-4 py-2 bg-black hover:bg-[#27272a] text-[#d9ef00] font-headline text-xs uppercase font-bold rounded-lg shrink-0 whitespace-nowrap"
        >
          Request Board Packet
        </button>
      </div>
    </div>
  );
};
