import React from 'react';
import { TabId } from '../types';

interface BottomNavProps {
  currentTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  const navItems: { id: TabId; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'work', label: 'Work', icon: 'domain_verification' },
    { id: 'method', label: 'Method', icon: 'account_tree' },
    { id: 'exec', label: 'Exec', icon: 'person' },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#fdf9f2]/95 backdrop-blur-xl border-t border-[#e4dec8]/70 shadow-[0_-2px_12px_rgba(0,0,0,0.05)]"
      aria-label="Primary Navigation"
    >
      <div className="max-w-4xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-2">
        {/* Left items group */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`min-w-[56px] sm:min-w-[64px] min-h-[48px] py-1.5 px-2 flex flex-col items-center justify-center transition-colors rounded-lg ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-[#47464b] hover:text-[#1c1c18] hover:bg-[#f1ede6]/50'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[22px] transition-transform duration-150"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                <span className="font-headline text-[11px] uppercase tracking-wider mt-0.5">
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-black mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action: BOOK Button + external links on larger screens */}
        <div className="flex items-center gap-2">
          {/* Quick social shortcuts (visible on small+ screens) */}
          <div className="hidden xs:flex items-center gap-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elena Vance LinkedIn"
              className="w-10 h-10 flex items-center justify-center text-[#47464b] hover:text-black rounded-lg hover:bg-[#f1ede6] transition-colors"
            >
              <span className="material-symbols-outlined text-[19px]">share</span>
            </a>
          </div>

          {/* Prominent BOOK button */}
          <button
            onClick={() => onTabChange('book')}
            className={`min-h-[46px] px-4 sm:px-5 rounded-lg flex items-center justify-center gap-1.5 font-headline text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 ${
              currentTab === 'book'
                ? 'bg-[#bed100] text-black ring-2 ring-black'
                : 'bg-[#d9ef00] hover:bg-[#bed100] text-black'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>BOOK</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
