import React, { useState, useMemo } from 'react';
import { DEALS_DATA } from '../data/dealsData';
import { DealTombstone, DealSector, DealInstitution } from '../types/finance';
import { DealDetailModal } from './DealDetailModal';
import { Search, ArrowUpRight, TrendingUp, Building2, ShieldCheck, Cpu } from 'lucide-react';

const INSTITUTIONS: ('All' | DealInstitution)[] = [
  'All',
  'Cabinet Secretariat',
  'Tata Consultancy Services',
  'DevRev'
];

export const DealTombstones: React.FC = () => {
  const [selectedInstitution, setSelectedInstitution] = useState<'All' | DealInstitution>('All');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDeal, setActiveDeal] = useState<DealTombstone | null>(null);

  // Dynamic counts
  const cabSecCount = DEALS_DATA.filter(d => d.institution === 'Cabinet Secretariat').length;
  const tcsCount = DEALS_DATA.filter(d => d.institution === 'Tata Consultancy Services').length;
  const devRevCount = DEALS_DATA.filter(d => d.institution === 'DevRev').length;

  const filteredDeals = useMemo(() => {
    return DEALS_DATA.filter((deal) => {
      const matchesInstitution = selectedInstitution === 'All' || deal.institution === selectedInstitution;
      const matchesSector = selectedSector === 'All' || deal.sector === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        deal.targetName.toLowerCase().includes(q) ||
        deal.codeName.toLowerCase().includes(q) ||
        deal.acquirerOrSponsor.toLowerCase().includes(q) ||
        deal.institution.toLowerCase().includes(q) ||
        deal.dealType.toLowerCase().includes(q) ||
        deal.sector.toLowerCase().includes(q) ||
        deal.headlineOutcome.toLowerCase().includes(q);
      return matchesInstitution && matchesSector && matchesSearch;
    });
  }, [selectedInstitution, selectedSector, searchQuery]);

  const getInstitutionIcon = (inst: DealInstitution) => {
    switch (inst) {
      case 'Cabinet Secretariat':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />;
      case 'Tata Consultancy Services':
        return <Building2 className="w-3.5 h-3.5 text-[#c5a880]" />;
      case 'DevRev':
        return <Cpu className="w-3.5 h-3.5 text-[#c5a880]" />;
      default:
        return null;
    }
  };

  return (
    <section id="tombstones" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-3">
              Representative Transactions & Mandates
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
              Selected Deal Tombstones
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
              A curated record of 9 pivotal technical mandates: 7 delivering public digital systems and infrastructure at the Cabinet Secretariat (Govt. of India, interfacing with MeitY and the Ministry of Finance), 1 scaling enterprise banking data rails at TCS, and 1 driving quantitative product telemetry at DevRev.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search target, code name, or scope..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121216] border border-white/[0.1] rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c5a880] transition-colors"
            />
          </div>
        </div>

        {/* Institution Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            onClick={() => { setSelectedInstitution('All'); setSelectedSector('All'); }}
            className={`px-4 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedInstitution === 'All'
                ? 'bg-[#c5a880] text-[#0a0a0a] font-semibold shadow-sm'
                : 'bg-[#101014] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            <span>All Mandates</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${selectedInstitution === 'All' ? 'bg-[#0a0a0a]/20 text-[#0a0a0a]' : 'bg-white/[0.08] text-slate-300'}`}>
              9
            </span>
          </button>

          <button
            onClick={() => { setSelectedInstitution('Cabinet Secretariat'); }}
            className={`px-4 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedInstitution === 'Cabinet Secretariat'
                ? 'bg-[#c5a880] text-[#0a0a0a] font-semibold shadow-sm'
                : 'bg-[#101014] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Cabinet Secretariat (Govt. of India)</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${selectedInstitution === 'Cabinet Secretariat' ? 'bg-[#0a0a0a]/20 text-[#0a0a0a]' : 'bg-white/[0.08] text-slate-300'}`}>
              {cabSecCount}
            </span>
          </button>

          <button
            onClick={() => { setSelectedInstitution('Tata Consultancy Services'); }}
            className={`px-4 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedInstitution === 'Tata Consultancy Services'
                ? 'bg-[#c5a880] text-[#0a0a0a] font-semibold shadow-sm'
                : 'bg-[#101014] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Tata Consultancy Services (TCS)</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${selectedInstitution === 'Tata Consultancy Services' ? 'bg-[#0a0a0a]/20 text-[#0a0a0a]' : 'bg-white/[0.08] text-slate-300'}`}>
              {tcsCount}
            </span>
          </button>

          <button
            onClick={() => { setSelectedInstitution('DevRev'); }}
            className={`px-4 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedInstitution === 'DevRev'
                ? 'bg-[#c5a880] text-[#0a0a0a] font-semibold shadow-sm'
                : 'bg-[#101014] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>DevRev</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${selectedInstitution === 'DevRev' ? 'bg-[#0a0a0a]/20 text-[#0a0a0a]' : 'bg-white/[0.08] text-slate-300'}`}>
              {devRevCount}
            </span>
          </button>
        </div>

        {/* Tombstone Grid (3 columns on desktop) */}
        {filteredDeals.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-xl bg-[#101014] border border-white/[0.08]">
            <p className="text-slate-400 text-sm">No transaction matches your criteria.</p>
            <button
              onClick={() => {
                setSelectedInstitution('All');
                setSelectedSector('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-[#c5a880] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.map((deal) => (
              <div
                key={deal.id}
                onClick={() => setActiveDeal(deal)}
                className="tombstone-frame rounded-xl p-6 flex flex-col justify-between transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Classical Tombstone Header */}
                  <div className="pb-4 border-b border-white/[0.06] text-center">
                    <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                      {getInstitutionIcon(deal.institution)}
                      <span>{deal.institution}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {deal.date} · {deal.sector}
                    </div>
                  </div>

                  {/* Target Company / Mandate */}
                  <div className="py-5 text-center">
                    <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#c5a880] transition-colors leading-snug">
                      {deal.targetName}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">
                      {deal.targetDescription}
                    </p>
                  </div>

                  {/* Transaction Value Callout */}
                  <div className="py-4 text-center border-y border-white/[0.06] bg-white/[0.01]">
                    <div className="text-2xl font-light font-mono text-white tabular-nums tracking-tight">
                      {deal.valueUsd}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5 font-medium">
                      {deal.dealType}
                    </div>
                  </div>

                  {/* Counterparty / Acquirer / Governing Entity */}
                  <div className="pt-4 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">
                      Entity & Stakeholder Scope
                    </div>
                    <div className="text-sm font-medium text-slate-200 mt-1 line-clamp-1">
                      {deal.acquirerOrSponsor}
                    </div>
                  </div>

                  {/* Strategic Value Lift (Unboxed clean text) */}
                  <div className="mt-5 p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {deal.headlineOutcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors font-mono">
                    {deal.codeName}
                  </span>
                  <span className="text-[#c5a880] flex items-center gap-1 font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect Memo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Deal Detail Modal */}
      <DealDetailModal deal={activeDeal} onClose={() => setActiveDeal(null)} />
    </section>
  );
};
