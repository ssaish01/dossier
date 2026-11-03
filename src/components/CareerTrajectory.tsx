import React from 'react';
import { CAREER_TRAJECTORY, CREDENTIALS_DATA } from '../data/portfolioData';
import { Terminal, GraduationCap, Briefcase } from 'lucide-react';

export const CareerTrajectory: React.FC = () => {
  return (
    <section id="trajectory" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-3">
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Professional Experience & Systems Track Record
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Demonstrated engineering and systems risk track record across public sector platforms (Cabinet Secretariat), Tier-1 corporate banking pipelines (TCS), and developer telemetry (DevRev).
          </p>
        </div>

        {/* 2-Column Layout: Left Timeline, Right Education & Systems Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#c5a880]" />
              <span>Professional Roles & Mandates</span>
            </div>

            <div className="relative border-l border-white/[0.1] pl-6 ml-2 space-y-10">
              {CAREER_TRAJECTORY.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#c5a880] ring-4 ring-[#08080a] group-hover:scale-125 transition-transform" />

                  {/* Period & Location (Unboxed text with bullet) */}
                  <div className="text-xs font-mono text-[#c5a880] mb-1 flex items-center gap-2">
                    <span>{milestone.period}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{milestone.location}</span>
                  </div>

                  {/* Title & Firm */}
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#c5a880] transition-colors">
                    {milestone.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-300 mt-0.5">
                    {milestone.firm}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {milestone.summary}
                  </p>

                  {/* Key Achievements */}
                  <ul className="mt-3 space-y-1.5">
                    {milestone.keyAchievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-[#c5a880] shrink-0 mt-0.5">―</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Technical Competency */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Institutional Card */}
            <div className="rounded-xl overflow-hidden border border-white/[0.12] bg-[#121216] relative shadow-2xl group">
              <div className="aspect-[16/10] relative">
                <img
                  src="/src/assets/images/institutional_boardroom_1793434593801.jpg"
                  alt="Public Sector Systems & Digital Infrastructure"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-105 brightness-90 group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#c5a880]">
                    Public Sector Systems Architecture
                  </div>
                  <div className="text-sm font-serif font-medium text-white mt-0.5">
                    Central Civil Ministries · Chennai, India
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Background Card */}
            <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1] shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 pb-3 border-b border-white/[0.08]">
                <GraduationCap className="w-4 h-4 text-[#c5a880]" />
                <span>Academic Foundation</span>
              </div>
              <div className="space-y-4">
                {CREDENTIALS_DATA.education.map((edu, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-serif font-medium text-white text-sm">
                      {edu.institution}
                    </div>
                    <div className="text-slate-300 mt-0.5 font-medium">
                      {edu.degree}
                    </div>
                    <div className="text-[#c5a880] text-[11px] mt-0.5">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Focus & Core Systems Proficiency (Replaced unearned licenses) */}
            <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1] shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 pb-3 border-b border-white/[0.08]">
                <Terminal className="w-4 h-4 text-[#c5a880]" />
                <span>Core Systems & Engineering Focus</span>
              </div>
              <div className="space-y-3">
                {CREDENTIALS_DATA.technicalFocus.map((focus, idx) => (
                  <div key={idx} className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-xs font-medium text-white">
                      {focus.area}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono leading-relaxed">
                      {focus.technologies}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
