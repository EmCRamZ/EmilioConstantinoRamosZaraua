import React, { useState, useEffect } from 'react';
import { TabId, CaseStudy } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { OverviewScreen } from './components/OverviewScreen';
import { WorkScreen } from './components/WorkScreen';
import { MethodScreen } from './components/MethodScreen';
import { ExecScreen } from './components/ExecScreen';
import { BookScreen } from './components/BookScreen';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ExecutiveCVModal } from './components/ExecutiveCVModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('overview');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [isSimulatedMobile, setIsSimulatedMobile] = useState<boolean>(false);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="min-h-screen bg-[#fdf9f2] text-[#1c1c18] font-body flex flex-col selection:bg-[#d9ef00] selection:text-black">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onOpenCV={() => setIsCVModalOpen(true)}
        isSimulatedMobile={isSimulatedMobile}
        onToggleSimulatedMobile={() => setIsSimulatedMobile(!isSimulatedMobile)}
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 w-full pt-24 pb-24 transition-all duration-300 ${
          isSimulatedMobile
            ? 'max-w-[430px] mx-auto px-4 my-4 bg-white/40 shadow-2xl rounded-3xl border border-[#e4dec8]'
            : 'max-w-4xl mx-auto px-4 sm:px-6'
        }`}
      >
        {/* Render Tab Screens */}
        {currentTab === 'overview' && (
          <OverviewScreen
            onTabChange={setCurrentTab}
            onOpenCV={() => setIsCVModalOpen(true)}
            onSelectCaseStudy={setSelectedCaseStudy}
          />
        )}

        {currentTab === 'work' && (
          <WorkScreen
            onSelectCaseStudy={setSelectedCaseStudy}
            onTabChange={setCurrentTab}
          />
        )}

        {currentTab === 'method' && (
          <MethodScreen onTabChange={setCurrentTab} />
        )}

        {currentTab === 'exec' && (
          <ExecScreen
            onOpenCV={() => setIsCVModalOpen(true)}
            onTabChange={setCurrentTab}
          />
        )}

        {currentTab === 'book' && (
          <BookScreen onTabChange={setCurrentTab} />
        )}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookSession={() => setCurrentTab('book')}
      />

      {/* Executive CV Dossier Modal */}
      <ExecutiveCVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        onBookCall={() => setCurrentTab('book')}
      />
    </div>
  );
}
