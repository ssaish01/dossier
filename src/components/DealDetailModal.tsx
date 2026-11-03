import React, { useEffect } from 'react';
import { DealTombstone } from '../types/finance';
import { X, CheckCircle, TrendingUp, Layers, Terminal, Building2, Cpu } from 'lucide-react';

interface DealDetailModalProps {
  deal: DealTombstone | null;
  onClose: () => void;
}

export const DealDetailModal: React.FC<DealDetailModalProps> = ({ deal, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (deal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [deal, onClose]);

  if (!deal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0e0e12] border border-white/[0.15] rounded-xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Top Metallic Border Header */}
        <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] relative bg-gradient-to-b from-white/[0.03] to-transparent">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close project dossier"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Institutional Header Format */}
          <div className="text-center max-w-xl mx-auto py-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#c5a880] mb-2 font-medium">
              Technical Mandate Dossier · {deal.institution} · {deal.codeName}
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-tight">
              {deal.targetName}
            </h2>
            
            <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
              {deal.targetDescription}
            </p>

            {/* Divider Hairline */}
            <div className="w-24 h-px bg-[#c5a880]/40 mx-auto my-4" />

            <div className="text-xs uppercase tracking-wider text-slate-400">
              Department / Institutional Stakeholders
            </div>
            <div className="text-base font-medium text-white mt-1">
              {deal.acquirerOrSponsor}
            </div>

            {/* Scale & Mandate Type */}
            <div className="mt-5 inline-flex items-center gap-4 px-4 py-2 rounded bg-white/[0.04] border border-white/[0.08] text-xs">
              <span className="font-mono text-sm font-semibold text-[#c5a880]">
                {deal.valueUsd}
              </span>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <span className="text-slate-300 font-medium">{deal.dealType}</span>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <span className="text-slate-400">{deal.date}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          {/* Key Outcome Highlight */}
          <div className="p-5 rounded-lg bg-[#c5a880]/[0.06] border border-[#c5a880]/20">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#c5a880]">
                  Project Outcome & Systems Impact
                </div>
                <div className="text-sm sm:text-base font-medium text-white mt-1 leading-relaxed">
                  {deal.headlineOutcome}
                </div>
              </div>
            </div>
          </div>

          {/* Role & Engineering Execution */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              <Terminal className="w-4 h-4 text-[#c5a880]" />
              <span>Engineering Execution & Core Responsibilities</span>
            </div>
            <div className="text-xs font-medium text-slate-300 mb-3">
              {deal.role}
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {deal.executionSummary.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded bg-white/[0.02] border border-white/[0.04]"
                >
                  <CheckCircle className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Context */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              <Building2 className="w-4 h-4 text-[#c5a880]" />
              <span>Context & Strategic Rationale</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed p-4 rounded bg-white/[0.02] border border-white/[0.04]">
              {deal.strategicRationale}
            </p>
          </div>

          {/* Technical Stack & Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Technical Stack */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                <Cpu className="w-4 h-4 text-[#c5a880]" />
                <span>Technical Stack & Infrastructure</span>
              </div>
              <div className="space-y-3 text-xs">
                {deal.technicalStack?.languagesAndFrameworks && (
                  <div>
                    <div className="text-slate-400 font-medium">Languages & Frameworks:</div>
                    <div className="text-slate-200 font-mono mt-0.5">{deal.technicalStack.languagesAndFrameworks}</div>
                  </div>
                )}
                {deal.technicalStack?.databasesAndPipelines && (
                  <div>
                    <div className="text-slate-400 font-medium">Data Storage & Pipelines:</div>
                    <div className="text-slate-200 font-mono mt-0.5">{deal.technicalStack.databasesAndPipelines}</div>
                  </div>
                )}
                {deal.technicalStack?.securityAndProtocols && (
                  <div>
                    <div className="text-slate-400 font-medium">Protocols & Standards:</div>
                    <div className="text-[#c5a880] font-mono mt-0.5">{deal.technicalStack.securityAndProtocols}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Benchmarks */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                <Layers className="w-4 h-4 text-[#c5a880]" />
                <span>Performance & Verification Metrics</span>
              </div>
              <div className="space-y-3 text-xs font-mono">
                {deal.multiples.uptimeSla && (
                  <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400 font-sans">Availability SLA</span>
                    <span className="text-emerald-400 font-semibold">{deal.multiples.uptimeSla}</span>
                  </div>
                )}
                {deal.multiples.latencyReduction && (
                  <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400 font-sans">Latency Performance</span>
                    <span className="text-[#c5a880] font-semibold">{deal.multiples.latencyReduction}</span>
                  </div>
                )}
                {deal.multiples.scopeMetrics && (
                  <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400 font-sans">Operational Scope</span>
                    <span className="text-white">{deal.multiples.scopeMetrics}</span>
                  </div>
                )}
                {deal.multiples.benchmark && (
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400 font-sans">Compliance Standard</span>
                    <span className="text-slate-300">{deal.multiples.benchmark}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 bg-white/[0.02] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
          <div>
            Status: <span className="text-slate-200 font-medium">{deal.status}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] rounded transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
