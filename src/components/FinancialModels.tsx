import React, { useState, useMemo } from 'react';
import { Calculator, Table2, Sliders, ArrowUpRight, TrendingUp, Layers } from 'lucide-react';

export const FinancialModels: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dcf' | 'lbo' | 'comps'>('dcf');

  // --- DCF Valuation State ---
  const [dcfBaseFcf, setDcfBaseFcf] = useState<number>(65); // $M
  const [dcfGrowthRate, setDcfGrowthRate] = useState<number>(14); // %
  const [dcfWacc, setDcfWacc] = useState<number>(9.5); // %
  const [dcfTerminalGrowth, setDcfTerminalGrowth] = useState<number>(2.5); // %
  const [dcfNetDebt, setDcfNetDebt] = useState<number>(110); // $M
  const [dcfShares, setDcfShares] = useState<number>(45); // Millions

  // DCF Calculations
  const dcfResults = useMemo(() => {
    const years = [1, 2, 3, 4, 5];
    const projections = years.map((yr) => {
      const fcf = dcfBaseFcf * Math.pow(1 + dcfGrowthRate / 100, yr);
      const discountFactor = Math.pow(1 + dcfWacc / 100, yr);
      const pv = fcf / discountFactor;
      return { year: yr, fcf, pv };
    });

    const sumPvFcf = projections.reduce((acc, curr) => acc + curr.pv, 0);
    const year5Fcf = projections[4].fcf;
    const terminalWaccDiff = (dcfWacc - dcfTerminalGrowth) / 100;
    
    // Gordon Growth terminal value
    const terminalValue = terminalWaccDiff > 0.005 
      ? (year5Fcf * (1 + dcfTerminalGrowth / 100)) / terminalWaccDiff 
      : year5Fcf * 15;
      
    const pvTerminalValue = terminalValue / Math.pow(1 + dcfWacc / 100, 5);
    const enterpriseValue = sumPvFcf + pvTerminalValue;
    const equityValue = enterpriseValue - dcfNetDebt;
    const impliedSharePrice = Math.max(0.1, equityValue / dcfShares);

    return {
      projections,
      sumPvFcf,
      terminalValue,
      pvTerminalValue,
      enterpriseValue,
      equityValue,
      impliedSharePrice
    };
  }, [dcfBaseFcf, dcfGrowthRate, dcfWacc, dcfTerminalGrowth, dcfNetDebt, dcfShares]);

  // Sensitivity Matrix for DCF (WACC vs Terminal Growth)
  const waccRange = [8.5, 9.0, 9.5, 10.0, 10.5];
  const gRange = [2.0, 2.5, 3.0];

  // --- LBO Returns State ---
  const [lboEntryEbitda, setLboEntryEbitda] = useState<number>(85); // $M
  const [lboEntryMultiple, setLboEntryMultiple] = useState<number>(11.5); // x
  const [lboExitMultiple, setLboExitMultiple] = useState<number>(12.0); // x
  const [lboLeverage, setLboLeverage] = useState<number>(4.5); // x
  const [lboAnnualPaydown, setLboAnnualPaydown] = useState<number>(40); // $M / yr
  const [lboExitEbitda, setLboExitEbitda] = useState<number>(140); // $M at yr 5
  const lboHoldYears = 5;

  // LBO Calculations
  const lboResults = useMemo(() => {
    const entryEv = lboEntryEbitda * lboEntryMultiple;
    const entryDebt = lboEntryEbitda * lboLeverage;
    const entrySponsorEquity = Math.max(10, entryEv - entryDebt);

    const exitEv = lboExitEbitda * lboExitMultiple;
    const totalDebtPaid = lboAnnualPaydown * lboHoldYears;
    const exitDebt = Math.max(0, entryDebt - totalDebtPaid);
    const exitSponsorEquity = Math.max(1, exitEv - exitDebt);

    const moic = exitSponsorEquity / entrySponsorEquity;
    // IRR = (MOIC)^(1/years) - 1
    const irr = (Math.pow(moic, 1 / lboHoldYears) - 1) * 100;

    return {
      entryEv,
      entryDebt,
      entrySponsorEquity,
      exitEv,
      exitDebt,
      exitSponsorEquity,
      moic,
      irr
    };
  }, [lboEntryEbitda, lboEntryMultiple, lboExitMultiple, lboLeverage, lboAnnualPaydown, lboExitEbitda]);

  // --- Trading Comps Universe ---
  const compsUniverse = [
    { ticker: 'CRWD', name: 'CrowdStrike Holdings', evSales: '17.8x', evEbitda: '54.2x', pe: '68.4x', revGrowth: '+31%', grossMargin: '78%' },
    { ticker: 'DDOG', name: 'Datadog Inc.', evSales: '14.2x', evEbitda: '46.8x', pe: '58.1x', revGrowth: '+26%', grossMargin: '81%' },
    { ticker: 'NOW', name: 'ServiceNow Inc.', evSales: '13.5x', evEbitda: '36.4x', pe: '48.9x', revGrowth: '+22%', grossMargin: '82%' },
    { ticker: 'SNOW', name: 'Snowflake Inc.', evSales: '12.1x', evEbitda: '42.0x', pe: '52.3x', revGrowth: '+29%', grossMargin: '74%' },
    { ticker: 'MDB', name: 'MongoDB Inc.', evSales: '11.8x', evEbitda: '39.5x', pe: '49.8x', revGrowth: '+24%', grossMargin: '77%' }
  ];

  return (
    <section id="models" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-3">
            Financial Modeling & Analytical Rigor
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Interactive Financial Modeling & Valuation Sandbox
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Test real financial mechanics directly in your browser. Adjust growth assumptions, discount rates, and leverage to see how enterprise value, debt paydowns, and equity returns shift in real time.
          </p>
        </div>

        {/* Tab Selection Switcher (Functional buttons) */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          <div className="p-1 bg-[#101014] border border-white/[0.08] rounded-lg inline-flex items-center">
            <button
              onClick={() => setActiveTab('dcf')}
              className={`px-4 py-2 text-xs font-medium rounded transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'dcf'
                  ? 'bg-[#c5a880] text-[#0a0a0a] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>DCF Valuation & Sensitivity Heatmap</span>
            </button>

            <button
              onClick={() => setActiveTab('lbo')}
              className={`px-4 py-2 text-xs font-medium rounded transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'lbo'
                  ? 'bg-[#c5a880] text-[#0a0a0a] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Sponsor LBO Returns & Debt Waterfall</span>
            </button>

            <button
              onClick={() => setActiveTab('comps')}
              className={`px-4 py-2 text-xs font-medium rounded transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'comps'
                  ? 'bg-[#c5a880] text-[#0a0a0a] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Table2 className="w-3.5 h-3.5" />
              <span>Public Trading Comps Benchmarking</span>
            </button>
          </div>
        </div>

        {/* --- TAB 1: DCF Valuation Sandbox --- */}
        {activeTab === 'dcf' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls Card */}
            <div className="lg:col-span-5 bg-[#101014] border border-white/[0.1] rounded-xl p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#c5a880]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-white">
                    Valuation Assumptions
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Dynamic 5-Yr Engine</span>
              </div>

              {/* Base FCF */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Base Year Free Cash Flow</span>
                  <span className="text-white font-mono font-medium">${dcfBaseFcf}M</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
                  value={dcfBaseFcf}
                  onChange={(e) => setDcfBaseFcf(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* 5-Yr CAGR Growth */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">5-Yr Projected FCF CAGR</span>
                  <span className="text-[#c5a880] font-mono font-medium">{dcfGrowthRate}%</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="35"
                  step="1"
                  value={dcfGrowthRate}
                  onChange={(e) => setDcfGrowthRate(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* WACC Discount Rate */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Discount Rate (WACC)</span>
                  <span className="text-white font-mono font-medium">{dcfWacc}%</span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="14.0"
                  step="0.25"
                  value={dcfWacc}
                  onChange={(e) => setDcfWacc(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Terminal Growth Rate */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Terminal Growth Rate (g)</span>
                  <span className="text-white font-mono font-medium">{dcfTerminalGrowth}%</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="4.0"
                  step="0.25"
                  value={dcfTerminalGrowth}
                  onChange={(e) => setDcfTerminalGrowth(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Balance Sheet Adjustments */}
              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Net Debt ($M)</label>
                  <input
                    type="number"
                    value={dcfNetDebt}
                    onChange={(e) => setDcfNetDebt(Number(e.target.value))}
                    className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2 text-xs font-mono text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Shares Out (M)</label>
                  <input
                    type="number"
                    value={dcfShares}
                    onChange={(e) => setDcfShares(Number(e.target.value))}
                    className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2 text-xs font-mono text-white"
                  />
                </div>
              </div>
            </div>

            {/* Output Summary & Live Sensitivity Matrix */}
            <div className="lg:col-span-7 space-y-6">
              {/* Valuation Dashboard Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-[#101014] border border-white/[0.1]">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                    Enterprise Value
                  </div>
                  <div className="text-2xl font-light font-mono text-white mt-1 tabular-nums">
                    ${Math.round(dcfResults.enterpriseValue)}M
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Present Value of UFCF + TV
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#101014] border border-white/[0.1]">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                    Implied Equity Value
                  </div>
                  <div className="text-2xl font-light font-mono text-white mt-1 tabular-nums">
                    ${Math.round(dcfResults.equityValue)}M
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Less net debt (${dcfNetDebt}M)
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#14141a] border border-[#c5a880]/40 shadow-lg">
                  <div className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                    Implied Share Price
                  </div>
                  <div className="text-3xl font-light font-mono text-[#c5a880] mt-1 tabular-nums">
                    ${dcfResults.impliedSharePrice.toFixed(2)}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                    Target baseline valuation
                  </div>
                </div>
              </div>

              {/* 5-Year Cash Flow Projection Waterfall */}
              <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                    5-Year Unlevered Free Cash Flow Forecast
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Figures in $ millions</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/[0.08] text-slate-400">
                        <th className="pb-2">Metric</th>
                        {dcfResults.projections.map((p) => (
                          <th key={p.year} className="pb-2 text-right">Yr {p.year}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      <tr>
                        <td className="py-2.5 text-slate-300">Projected FCF</td>
                        {dcfResults.projections.map((p) => (
                          <td key={p.year} className="py-2.5 text-right text-white">
                            ${p.fcf.toFixed(1)}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-2.5 text-slate-400">PV of FCF (@{dcfWacc}%)</td>
                        {dcfResults.projections.map((p) => (
                          <td key={p.year} className="py-2.5 text-right text-[#c5a880]">
                            ${p.pv.toFixed(1)}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2D Sensitivity Heatmap Table (WACC vs g) */}
              <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                    Valuation Sensitivity Matrix: WACC vs. Terminal Growth Rate
                  </span>
                  <span className="text-[11px] text-slate-400">Implied Share Price ($)</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-center text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/[0.08] text-slate-400">
                        <th className="p-2 text-left">WACC \ g</th>
                        {gRange.map((g) => (
                          <th key={g} className="p-2">{g.toFixed(1)}%</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {waccRange.map((w) => (
                        <tr key={w}>
                          <td className="p-2 text-left font-medium text-slate-300">{w.toFixed(1)}%</td>
                          {gRange.map((g) => {
                            // Compute sensitivity cell
                            const denom = (w - g) / 100;
                            const tv = denom > 0.005 ? (dcfResults.projections[4].fcf * (1 + g / 100)) / denom : 500;
                            const pvTv = tv / Math.pow(1 + w / 100, 5);
                            const sumPv = dcfResults.projections.reduce((acc, curr) => {
                              return acc + curr.fcf / Math.pow(1 + w / 100, curr.year);
                            }, 0);
                            const eqVal = sumPv + pvTv - dcfNetDebt;
                            const sharePrice = Math.max(0.1, eqVal / dcfShares);
                            const isBaseCase = w === dcfWacc && g === dcfTerminalGrowth;

                            return (
                              <td
                                key={g}
                                className={`p-2 transition-colors ${
                                  isBaseCase
                                    ? 'bg-[#c5a880]/20 text-[#c5a880] font-bold border border-[#c5a880]/60'
                                    : 'text-slate-300 hover:bg-white/[0.04]'
                                }`}
                              >
                                ${sharePrice.toFixed(2)}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: Sponsor LBO Returns Sandbox --- */}
        {activeTab === 'lbo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LBO Inputs */}
            <div className="lg:col-span-5 bg-[#101014] border border-white/[0.1] rounded-xl p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#c5a880]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-white">
                    LBO Transaction Assumptions
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">5-Yr Sponsor Horizon</span>
              </div>

              {/* Target EBITDA */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Entry EBITDA</span>
                  <span className="text-white font-mono font-medium">${lboEntryEbitda}M</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="250"
                  step="5"
                  value={lboEntryEbitda}
                  onChange={(e) => setLboEntryEbitda(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Entry Multiple */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Entry EV / EBITDA Multiple</span>
                  <span className="text-white font-mono font-medium">{lboEntryMultiple}x</span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="18.0"
                  step="0.5"
                  value={lboEntryMultiple}
                  onChange={(e) => setLboEntryMultiple(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Leverage Ratio */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Total Debt / EBITDA Leverage</span>
                  <span className="text-[#c5a880] font-mono font-medium">{lboLeverage}x</span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="6.5"
                  step="0.25"
                  value={lboLeverage}
                  onChange={(e) => setLboLeverage(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Exit Multiple */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Exit EV / EBITDA Multiple</span>
                  <span className="text-white font-mono font-medium">{lboExitMultiple}x</span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="18.0"
                  step="0.5"
                  value={lboExitMultiple}
                  onChange={(e) => setLboExitMultiple(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Exit EBITDA */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Exit Year 5 EBITDA</span>
                  <span className="text-white font-mono font-medium">${lboExitEbitda}M</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="400"
                  step="5"
                  value={lboExitEbitda}
                  onChange={(e) => setLboExitEbitda(Number(e.target.value))}
                  className="w-full accent-[#c5a880] bg-white/[0.1] h-1.5 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* LBO Results & Capital Waterfall */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Sponsor Return Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-[#14141a] border border-[#c5a880]/50 shadow-xl">
                  <div className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                    Projected 5-Year Sponsor Net IRR
                  </div>
                  <div className="text-4xl font-light font-mono text-[#c5a880] mt-2 tabular-nums">
                    {lboResults.irr.toFixed(1)}%
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Target hurdle: 20.0%+ for Private Equity
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1]">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Multiple on Invested Capital (MOIC)
                  </div>
                  <div className="text-4xl font-light font-mono text-white mt-2 tabular-nums">
                    {lboResults.moic.toFixed(2)}x
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    ${Math.round(lboResults.entrySponsorEquity)}M Equity Check → ${Math.round(lboResults.exitSponsorEquity)}M Exit Value
                  </div>
                </div>
              </div>

              {/* Sources & Uses Capital Teardown */}
              <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1]">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-4">
                  Sources & Uses / Capital Structure Evolution
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                  <div className="p-4 rounded bg-white/[0.02] border border-white/[0.04] space-y-2">
                    <div className="text-slate-400 font-semibold uppercase text-[11px] pb-1 border-b border-white/[0.06]">
                      Entry Valuation (${Math.round(lboResults.entryEv)}M EV)
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Total Senior & Sub Debt:</span>
                      <span className="text-white">${Math.round(lboResults.entryDebt)}M ({lboLeverage}x)</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Sponsor Equity Invested:</span>
                      <span className="text-[#c5a880] font-bold">${Math.round(lboResults.entrySponsorEquity)}M</span>
                    </div>
                  </div>

                  <div className="p-4 rounded bg-white/[0.02] border border-white/[0.04] space-y-2">
                    <div className="text-slate-400 font-semibold uppercase text-[11px] pb-1 border-b border-white/[0.06]">
                      Year 5 Exit Realization (${Math.round(lboResults.exitEv)}M EV)
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Remaining Term Debt:</span>
                      <span className="text-white">${Math.round(lboResults.exitDebt)}M</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Sponsor Proceeds at Exit:</span>
                      <span className="text-emerald-400 font-bold">${Math.round(lboResults.exitSponsorEquity)}M</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Creation Attribution Breakdown */}
              <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1] text-xs">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-3">
                  Return Value Creation Attribution
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-slate-400 text-[10px] uppercase">EBITDA Growth</div>
                    <div className="text-sm font-mono text-white mt-1">+${lboExitEbitda - lboEntryEbitda}M</div>
                  </div>
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-slate-400 text-[10px] uppercase">Debt De-leveraging</div>
                    <div className="text-sm font-mono text-white mt-1">+${lboAnnualPaydown * 5}M</div>
                  </div>
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-slate-400 text-[10px] uppercase">Multiple Expansion</div>
                    <div className="text-sm font-mono text-[#c5a880] mt-1">{(lboExitMultiple - lboEntryMultiple).toFixed(1)}x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: Public Comps Benchmarking --- */}
        {activeTab === 'comps' && (
          <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.08] gap-2">
              <div>
                <h3 className="text-base font-serif font-medium text-white">
                  Tier-1 Enterprise Infrastructure & Cybersecurity Peer Universe
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Normalized multiples benchmarked against LTM and NTM consensus Wall Street estimates.
                </p>
              </div>
              <div className="text-xs font-mono text-[#c5a880] whitespace-nowrap">
                Median EV/Sales: 13.5x · Median EV/EBITDA: 42.0x
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/[0.08] text-slate-400">
                    <th className="pb-3 font-medium">Ticker</th>
                    <th className="pb-3 font-medium">Company Name</th>
                    <th className="pb-3 font-medium text-right">EV / Revenue</th>
                    <th className="pb-3 font-medium text-right">EV / EBITDA</th>
                    <th className="pb-3 font-medium text-right">P/E Multiple</th>
                    <th className="pb-3 font-medium text-right">YoY Revenue Growth</th>
                    <th className="pb-3 font-medium text-right">Gross Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {compsUniverse.map((c) => (
                    <tr key={c.ticker} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 font-bold text-[#c5a880]">{c.ticker}</td>
                      <td className="py-3 text-slate-200">{c.name}</td>
                      <td className="py-3 text-right text-white font-medium">{c.evSales}</td>
                      <td className="py-3 text-right text-white">{c.evEbitda}</td>
                      <td className="py-3 text-right text-slate-300">{c.pe}</td>
                      <td className="py-3 text-right text-emerald-400">{c.revGrowth}</td>
                      <td className="py-3 text-right text-slate-300">{c.grossMargin}</td>
                    </tr>
                  ))}
                  {/* Benchmark Row */}
                  <tr className="bg-white/[0.04] font-semibold text-white">
                    <td className="py-3 text-white">MEDIAN</td>
                    <td className="py-3 text-slate-300">Peer Group Median</td>
                    <td className="py-3 text-right text-[#c5a880]">13.5x</td>
                    <td className="py-3 text-right text-[#c5a880]">42.0x</td>
                    <td className="py-3 text-right text-white">52.3x</td>
                    <td className="py-3 text-right text-emerald-400">+26.0%</td>
                    <td className="py-3 text-right text-white">78.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
