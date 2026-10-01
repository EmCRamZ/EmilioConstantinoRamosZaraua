import React, { useState } from 'react';
import { EXECUTIVE_PROFILE, MONOGRAM_LOGO } from '../data/portfolioData';

interface ExecutiveCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const ExecutiveCVModal: React.FC<ExecutiveCVModalProps> = ({
  isOpen,
  onClose,
  onBookCall,
}) => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSimulateDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div className="bg-[#fdf9f2] w-full max-w-3xl rounded-2xl border border-[#e4dec8] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#e4dec8] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d9ef00]" />
            <span className="font-headline text-xs font-bold uppercase tracking-wider text-black">
              Executive Dossier &amp; Curriculum Vitae (PDF)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Dossier"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-[#f1ede6] hover:bg-[#ece8e1] text-black text-xs font-headline font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleSimulateDownload}
              disabled={downloading}
              className="px-3 py-1.5 bg-black hover:bg-[#27272a] text-[#d9ef00] text-xs font-headline font-bold uppercase rounded-lg flex items-center gap-1.5 transition-colors"
            >
              {downloading ? (
                <>
                  <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                  <span>Compiling...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <span className="material-symbols-outlined text-[16px] text-[#d9ef00]">check_circle</span>
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download CV</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 rounded-full bg-[#f1ede6] hover:bg-[#ece8e1] text-[#1c1c18] flex items-center justify-center transition-colors ml-1"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white font-body space-y-6 text-[#1c1c18]">
          {/* Document Header */}
          <div className="border-b-2 border-black pb-5 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-black">
                  {EXECUTIVE_PROFILE.name}
                </span>
                <span className="bg-black text-[#d9ef00] text-[10px] font-headline font-bold px-2 py-0.5 rounded uppercase">
                  CIO / CTO
                </span>
              </div>
              <p className="font-headline text-sm font-semibold text-[#5a6400] mt-1">
                {EXECUTIVE_PROFILE.title}
              </p>
              <p className="text-xs text-[#77767b] mt-0.5">
                {EXECUTIVE_PROFILE.location} // advisory@elenavance.tech // linkedin.com/in/elena-vance-cio
              </p>
            </div>

            <div className="text-right self-start sm:self-auto">
              <span className="font-mono text-[11px] text-[#77767b] block">
                AUDITED KPI TRACK RECORD
              </span>
              <span className="font-headline text-lg font-bold text-black block">
                $42M+ Run-Rate Cut // 99.99% SLA
              </span>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-1.5">
            <h2 className="font-headline text-xs uppercase font-bold tracking-wider text-[#77767b]">
              Executive Profile &amp; Governance Thesis
            </h2>
            <p className="text-xs sm:text-sm text-[#27272a] leading-relaxed">
              Elena Vance is an enterprise technology strategist, board advisor, and fractional CIO with 14+ years of cross-functional executive experience scaling cloud infrastructure, FinOps unit economics, and secure distributed architectures for Tier-1 institutions (Fortune 500 banks, multi-region healthcare systems, high-growth fintech unicorns). Former Head of Enterprise Architecture at Apex Financial and Principal Solutions Architect at AWS Professional Services.
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div className="space-y-2">
            <h2 className="font-headline text-xs uppercase font-bold tracking-wider text-[#77767b]">
              Core Executive Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                'Multi-Cloud FinOps & TCO Optimization',
                'Enterprise Architecture & Legacy Strangle',
                'Zero-Trust Security & Continuous SOC2',
                'Team Topologies & Engineering Org Design',
                'M&A Technical Diligence for PE/VC',
                'Private LLM Mesh & High-Throughput AI',
              ].map((comp, idx) => (
                <div key={idx} className="p-2 bg-[#fdf9f2] rounded border border-[#e4dec8] font-medium">
                  {comp}
                </div>
              ))}
            </div>
          </div>

          {/* Career Trajectory */}
          <div className="space-y-4">
            <h2 className="font-headline text-xs uppercase font-bold tracking-wider text-[#77767b]">
              Executive Roles &amp; Operational Leadership
            </h2>

            {EXECUTIVE_PROFILE.experienceHighlights.map((role, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex items-center justify-between flex-wrap">
                  <span className="font-headline font-bold text-sm text-black">
                    {role.role} — <span className="text-[#5a6400]">{role.firm}</span>
                  </span>
                  <span className="font-mono text-[#77767b]">{role.period}</span>
                </div>
                <p className="text-[#47464b] leading-relaxed">{role.summary}</p>
              </div>
            ))}
          </div>

          {/* Key Deliverables & Case Outcomes */}
          <div className="space-y-2">
            <h2 className="font-headline text-xs uppercase font-bold tracking-wider text-[#77767b]">
              Selected Signature Engagements
            </h2>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-[#fdf9f2] rounded border border-[#e4dec8]">
                <div className="font-headline font-bold text-black">
                  Global Tier-1 Commercial Bank Core Modernization
                </div>
                <div className="text-[#47464b] mt-0.5">
                  Re-architected monolithic IBM mainframe ledger into multi-region AWS EKS microservices. Achieved 38% annual OpEx reduction ($18.4M saved) with 4.2x deployment frequency lift.
                </div>
              </div>

              <div className="p-3 bg-[#fdf9f2] rounded border border-[#e4dec8]">
                <div className="font-headline font-bold text-black">
                  Clinical HealthTech SaaS Zero-Trust Migration
                </div>
                <div className="text-[#47464b] mt-0.5">
                  Architected HIPAA &amp; SOC2 Type II automated zero-trust pipeline serving 12M+ monthly active patients with automated cryptographic envelope encryption across three US regions.
                </div>
              </div>
            </div>
          </div>

          {/* Accreditations & Education */}
          <div className="space-y-2 pt-2 border-t border-[#e4dec8]">
            <h2 className="font-headline text-xs uppercase font-bold tracking-wider text-[#77767b]">
              Certifications &amp; Executive Education
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#27272a]">
              {EXECUTIVE_PROFILE.certifications.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-[#5a6400]">check_circle</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#e4dec8] flex items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-[#77767b] font-headline hidden sm:inline">
            Confidential Executive Dossier © Elena Vance Advisory
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#f1ede6] text-black text-xs font-headline font-semibold rounded-lg"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="px-4 py-2 bg-[#d9ef00] hover:bg-[#bed100] text-black text-xs font-headline font-bold uppercase rounded-lg"
            >
              Schedule Advisory Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
