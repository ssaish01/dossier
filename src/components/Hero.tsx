import React from 'react';
import { ArrowRight, ShieldCheck, Download, BarChart3, ChevronDown } from 'lucide-react';
import { CAREER_STATS } from '../data/dealsData';
import myPhoto from '../assets/images/myPhoto.jpeg'

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden border-b border-white/[0.08]">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-subtle pointer-events-none -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-radial-blue pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Split Hero Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet institutional kicker (unboxed) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-4">
              <span>Public Systems Architecture</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Enterprise Data Scalability</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Financial Modeling</span>
            </div>

            {/* Display headline with balanced wrapping */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12] mb-6 font-serif">
              Evaluating complex <span className="font-medium text-white underline decoration-[#c5a880]/50 decoration-1 underline-offset-8">systems risk</span>, backend scalability, and <span className="italic text-[#c5a880]">financial valuation</span>.
            </h1>

            {/* Body lead narrative framed through finance & institutional lens */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-8">
              I evaluate technical systems risk, backend data scalability, and digital asset valuation. My background unites 3 years of public digital infrastructure oversight with the Government of India (Cabinet Secretariat, interfacing with MeitY and the Ministry of Finance), enterprise data pipeline engineering at TCS, and quantitative product telemetry at DevRev.
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#tombstones"
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0a0a0a] bg-[#c5a880] hover:bg-[#d8bc94] rounded transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#c5a880]/15"
              >
                <span>View Track Record & Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#models"
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
              >
                <BarChart3 className="w-4 h-4 text-[#c5a880]" />
                <span>Financial & DCF Models</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 text-xs font-medium tracking-wide text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Executive CV (PDF)</span>
              </button>
            </div>

            {/* Trust Markers without unearned licenses */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                <span className="text-slate-300 font-medium">Cabinet Secretariat (3 Yrs)</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Tata Consultancy Services (TCS)</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>DevRev Product Telemetry</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>B.Tech in Engineering</span>
            </div>
          </div>

          {/* Right Column: Visual Container with High-End Framing */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl bg-[#121216] group">
              <img
                src={myPhoto}
                alt="Aishwarya Sriram Srinivasachary — Public Systems Architecture & Financial Modeling"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
              />
              
              {/* Subtle luxury vignette & highlight scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/20 pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#08080a] via-[#08080a]/90 to-transparent">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-1">
                  Public Infrastructure & Technical Risk
                </div>
                <div className="text-lg font-serif font-medium text-white">
                  Aishwarya Sriram Srinivasachary
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Public Sector Data Systems · Enterprise Scalability · Financial Modeling
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono tabular-nums">
              14 Ministries
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              Inter-Departmental Scope
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Public sector data systems & cloud portals
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-[#c5a880] font-mono tabular-nums">
              9 Key Mandates
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              Track Record
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              7 CabSec · 1 TCS · 1 DevRev
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono tabular-nums">
              -32%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              Processing Overhead Reduction
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Optimized backend pipelines for Tier-1 corporate clients
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono tabular-nums">
              99.999%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              System Availability & Compliance
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              High-availability public sector architecture
            </div>
          </div>
        </div>
      </div>

      {/* Downward indicator */}
      <div className="flex justify-center mt-12">
        <a 
          href="#expertise" 
          aria-label="Scroll to technical capabilities" 
          className="text-slate-400 hover:text-[#c5a880] transition-colors p-2"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
