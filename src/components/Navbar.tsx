import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08080a]/90 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line text element */}
        <a 
          href="#" 
          className="text-lg font-semibold tracking-wider uppercase text-white whitespace-nowrap shrink-0 font-serif hover:text-[#c5a880] transition-colors"
        >
          Aishwarya Sriram Srinivasachary
        </a>

        {/* Zone 2: 4-5 concise nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a 
            href="#expertise" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c5a880]"
          >
            Expertise
          </a>
          <a 
            href="#tombstones" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c5a880]"
          >
            Tombstones
          </a>
          <a 
            href="#models" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c5a880]"
          >
            Valuation Models
          </a>
          <a 
            href="#trajectory" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c5a880]"
          >
            Trajectory
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c5a880] text-left cursor-pointer"
          >
            Executive CV
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="group px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#0a0a0a] bg-[#c5a880] hover:bg-[#d8bc94] rounded transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-lg shadow-[#c5a880]/10 cursor-pointer"
          >
            <span>Mandate Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
