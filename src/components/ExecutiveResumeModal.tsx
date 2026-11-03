import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin, Globe } from 'lucide-react';
import { CAREER_TRAJECTORY, CREDENTIALS_DATA } from '../data/portfolioData';

interface ExecutiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveResumeModal: React.FC<ExecutiveResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0 print:m-0">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden" 
        onClick={onClose} 
      />

      {/* CV Sheet */}
      <div className="relative w-full max-w-4xl bg-[#0c0c10] border border-white/[0.15] rounded-xl shadow-2xl z-10 my-8 overflow-hidden print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Modal Controls Bar */}
        <div className="p-4 px-6 bg-[#14141a] border-b border-white/[0.08] flex items-center justify-between print:hidden">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#c5a880]">
            Curriculum Vitae · Public Systems & Financial Engineering
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-white/[0.08] hover:bg-white/[0.15] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible">
          {/* Header Lockup */}
          <div className="border-b border-white/[0.1] pb-6 print:border-black">
            <h1 className="text-3xl font-serif font-normal text-white print:text-black tracking-tight">
              Aishwarya Sriram Srinivasachary
            </h1>
            <div className="text-xs font-mono uppercase tracking-widest text-[#c5a880] print:text-stone-700 mt-1">
              Public Systems Architecture · Enterprise Data Scalability · Financial Modeling
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 print:text-stone-600 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880] print:text-black" />
                Chennai, India
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#c5a880] print:text-black" />
                ssaishwarya2021@gmail.com
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#c5a880] print:text-black" />
                linkedin.com/in/aishwarya-s
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] print:text-black mb-2 pb-1 border-b border-white/[0.08] print:border-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-stone-800 leading-relaxed">
              Systems engineer with 4 years of hands-on experience spanning public digital infrastructure governance at the Cabinet Secretariat (Govt. of India, interfacing with MeitY and the Ministry of Finance), enterprise data pipeline engineering at Tata Consultancy Services (TCS), and developer product analytics at DevRev. Combines practical distributed backend architecture, database latency reduction, and regulatory compliance with corporate financial modeling and valuation frameworks.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] print:text-black mb-4 pb-1 border-b border-white/[0.08] print:border-black">
              Professional Experience & Mandates
            </h2>
            <div className="space-y-6">
              {CAREER_TRAJECTORY.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-white print:text-black text-sm">
                      {exp.firm}
                    </span>
                    <span className="font-mono text-slate-400 print:text-stone-600 text-[11px]">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <div className="text-slate-300 print:text-stone-700 italic mt-0.5">
                    {exp.title}
                  </div>
                  <p className="text-slate-400 print:text-stone-600 mt-1">
                    {exp.summary}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {exp.keyAchievements.map((ach, i) => (
                      <li key={i} className="text-slate-300 print:text-stone-800 flex items-start gap-2">
                        <span className="text-[#c5a880] print:text-black">―</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Technical Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] print:text-black mb-3 pb-1 border-b border-white/[0.08] print:border-black">
                Education
              </h2>
              <div className="space-y-3 text-xs">
                {CREDENTIALS_DATA.education.map((edu, idx) => (
                  <div key={idx}>
                    <div className="font-semibold text-white print:text-black">{edu.institution}</div>
                    <div className="text-slate-300 print:text-stone-700">{edu.degree}</div>
                    <div className="text-[#c5a880] print:text-stone-600 text-[11px]">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] print:text-black mb-3 pb-1 border-b border-white/[0.08] print:border-black">
                Technical Focus & Systems Stack
              </h2>
              <div className="space-y-2.5 text-xs">
                {CREDENTIALS_DATA.technicalFocus.map((focus, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] print:border-stone-300">
                    <div className="text-white print:text-black font-medium">{focus.area}</div>
                    <div className="text-slate-400 print:text-stone-600 font-mono text-[11px] mt-0.5">{focus.technologies}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
