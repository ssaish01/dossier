import React, { useState } from 'react';
import { ADVISORY_COMPETENCIES } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Layers, TrendingUp, DollarSign, ShieldAlert, Cpu } from 'lucide-react';

export const AdvisoryServices: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(ADVISORY_COMPETENCIES[0].id);
  const activeCompetency = ADVISORY_COMPETENCIES.find((c) => c.id === selectedId) || ADVISORY_COMPETENCIES[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'ma':
        return <Layers className="w-5 h-5 text-[#c5a880]" />;
      case 'lbo':
        return <TrendingUp className="w-5 h-5 text-[#c5a880]" />;
      case 'valuation':
        return <Cpu className="w-5 h-5 text-[#c5a880]" />;
      case 'capital-markets':
        return <DollarSign className="w-5 h-5 text-[#c5a880]" />;
      case 'due-diligence':
        return <ShieldAlert className="w-5 h-5 text-[#c5a880]" />;
      default:
        return <Layers className="w-5 h-5 text-[#c5a880]" />;
    }
  };

  return (
    <section id="expertise" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-3">
            Core Advisory Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight leading-tight">
            Hands-on technical engineering meets financial valuation discipline.
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            From stress-testing sovereign infrastructure to building dynamic DCF models, I bring practical systems expertise and clear financial thinking to complex institutional challenges.
          </p>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 5 Pillars Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {ADVISORY_COMPETENCIES.map((comp, idx) => {
              const isSelected = comp.id === selectedId;
              const formattedIdx = String(idx + 1).padStart(2, '0');

              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedId(comp.id)}
                  className={`text-left p-5 rounded-lg border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.06] border-[#c5a880]/50 shadow-lg shadow-black/40'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-slate-300">
                      {formattedIdx}.
                    </span>
                    <div>
                      <div className={`text-base font-medium transition-colors ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {comp.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {comp.dealCount} Closed Mandates & Engagements
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? 'text-[#c5a880] translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Work Product & Methodology Pane */}
          <div className="lg:col-span-7 bg-[#101014] border border-white/[0.1] rounded-xl p-8 shadow-2xl relative overflow-hidden">
            {/* Background metallic accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial-subtle pointer-events-none -z-0 opacity-40" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-white/[0.05] border border-white/[0.08]">
                    {getPillarIcon(activeCompetency.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white font-serif">
                      {activeCompetency.title}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {activeCompetency.dealCount} Related Transactions
                    </div>
                  </div>
                </div>
              </div>

              {/* Scope & Strategic Focus */}
              <div className="py-6">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Advisory Scope
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeCompetency.description}
                </p>
              </div>

              {/* Work Products & Key Deliverables */}
              <div className="pt-4 pb-6 border-t border-white/[0.08]">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
                  Key Work Products & Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCompetency.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded bg-white/[0.02] border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantitative Methodologies Applied */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                  Analytical Methodologies & Frameworks
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  {activeCompetency.methodologies.map((method, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-slate-300 font-mono">
                        {method}
                      </span>
                      {idx < activeCompetency.methodologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
