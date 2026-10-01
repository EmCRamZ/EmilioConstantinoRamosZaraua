import React from 'react';
import { MONOGRAM_LOGO, ELENA_AVATAR } from '../data/portfolioData';
import { TabId } from '../types';

interface HeaderProps {
  currentTab: TabId;
  onTabChange: (tab: TabId) => void;
  onOpenCV: () => void;
  isSimulatedMobile: boolean;
  onToggleSimulatedMobile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenCV,
  isSimulatedMobile,
  onToggleSimulatedMobile,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-[#fdf9f2]/95 backdrop-blur-xl border-b border-[#e4dec8]/50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-4xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Lockup */}
        <button
          onClick={() => onTabChange('overview')}
          className="flex items-center gap-3 text-left group transition-opacity hover:opacity-90 min-w-0"
        >
          <div className="h-9 w-9 bg-black rounded flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
            <img
              src={MONOGRAM_LOGO}
              alt="Elena Vance Monogram"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // Graceful fallback if image blocked
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = `<span class="text-[#d9ef00] font-headline font-bold text-sm tracking-tighter">EV</span>`;
                }
              }}
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-headline font-bold text-sm text-[#1c1c18] uppercase tracking-wider truncate">
                Elena Vance
              </span>
              <span className="text-[#77767b] text-xs font-headline">//</span>
              <span className="text-xs text-[#47464b] font-headline truncate">
                IT Strategy
              </span>
            </div>
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bed100] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bed100]"></span>
              </span>
              <span className="text-xs text-[#47464b] font-medium tracking-normal truncate">
                Available for Q3 Advisory
              </span>
            </div>
          </div>
        </button>

        {/* Right Action & Profile Area */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick CV button on desktop */}
          <button
            onClick={onOpenCV}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-headline font-semibold text-[#1c1c18] bg-[#f1ede6] hover:bg-[#ece8e1] rounded transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>Executive CV</span>
          </button>

          {/* Desktop/Mobile preview toggle for responsive testing */}
          <button
            onClick={onToggleSimulatedMobile}
            title={isSimulatedMobile ? "Switch to Wide Responsive View" : "Switch to Mobile Device View"}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded text-[#47464b] hover:text-[#1c1c18] hover:bg-[#f1ede6] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isSimulatedMobile ? 'fullscreen' : 'smartphone'}
            </span>
          </button>

          {/* Elena Avatar */}
          <button
            onClick={() => onTabChange('exec')}
            title="View Executive Dossier"
            className="relative group p-0.5 rounded-full hover:ring-2 hover:ring-[#d9ef00] transition-all"
          >
            <img
              src={ELENA_AVATAR}
              alt="Elena Vance Profile"
              className="w-8 h-8 rounded-full object-cover shrink-0 ring-1 ring-[#e4dec8]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-[#1c1c18] text-[#d9ef00] flex items-center justify-center font-headline text-xs font-bold">
                      EV
                    </div>
                  `;
                }
              }}
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#bed100] border-2 border-[#fdf9f2] rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
