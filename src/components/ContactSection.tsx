import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, ShieldCheck, Lock, Send, UserCheck, Download } from 'lucide-react';

interface ContactSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: '',
    firm: '',
    email: '',
    mandateType: 'Sell-Side M&A Auction',
    dealSize: '$250M — $500M EV',
    ndaStatus: 'Mutual NDA Ready',
    message: ''
  });

  const professionalEmail = 'ssaishwarya2021@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(professionalEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Aishwarya Sriram Srinivasachary
N:S.;Aishwarya;;;
ORG:Public Infrastructure & Technology Systems
TITLE:Public Systems & Financial Engineering Specialist
EMAIL;TYPE=INTERNET,WORK:ssaishwarya2021@gmail.com
ADR;TYPE=WORK:;;Chennai;Chennai;;India
NOTE:Cabinet Secretariat, Tata Consultancy Services, DevRev, Enterprise Systems & Valuation
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aishwarya_S_Advisory.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer id="contact" className="pt-24 pb-16 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-3">
            Confidential Advisory Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Whether you are evaluating a complex technology transaction, conducting systems due diligence, or discussing financial modeling and risk frameworks, I welcome the dialogue.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Direct Institutional Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            {/* Email Copy Card */}
            <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1] shadow-xl">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                Primary Direct Desk
              </div>
              <div className="text-sm font-mono text-white break-all mb-4">
                {professionalEmail}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] rounded flex items-center gap-2 transition-all cursor-pointer relative"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownloadVCard}
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>vCard (.vcf)</span>
                </button>
              </div>
            </div>

            {/* Office & Direct Verification */}
            <div className="p-6 rounded-xl bg-[#101014] border border-white/[0.1] shadow-xl space-y-4 text-xs">
              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  Advisory Headquarters
                </div>
                <div className="text-slate-200 mt-1 font-serif text-sm">
                  Strategic Advisory Desk
                </div>
                <div className="text-slate-400">
                  Chennai · India
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08]">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  Professional Channels & Verification
                </div>
                <div className="mt-2 space-y-2">
                  <a
                    href="https://www.linkedin.com/in/aishwaryasriramsrinivasachary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1 text-slate-300 hover:text-[#c5a880] transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                 
                  <div className="flex items-center justify-between py-1 text-slate-400">
                    <span>Direct Communication</span>
                    <span className="font-mono text-slate-300">ssaishwarya2021@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Strict Confidentiality Notice */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 text-xs text-slate-400">
              <Lock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
              <span>
                All communications and project deliverables are protected under strict customary investment banking confidentiality obligations.
              </span>
            </div>
          </div>

          {/* Right: Interactive Mandate Inquiry Form */}
          <div className="lg:col-span-7 bg-[#101014] border border-white/[0.12] rounded-xl p-8 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 flex items-center justify-center mx-auto text-[#c5a880]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-white">
                  Inquiry Received
                </h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I personally review all advisory inquiries and will follow up with you directly within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 text-xs font-medium text-[#c5a880] hover:underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#c5a880]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-white">
                      Confidential Mandate Registration
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Encrypted Queue</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1.5">Full Name & Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Sterling, CEO"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1.5">Company / Sponsor Firm *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Strategic Holdings"
                      value={formState.firm}
                      onChange={(e) => setFormState({ ...formState, firm: e.target.value })}
                      className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1.5">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@apexholdings.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1.5">Advisory Mandate Type</label>
                    <select
                      value={formState.mandateType}
                      onChange={(e) => setFormState({ ...formState, mandateType: e.target.value })}
                      className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                    >
                      <option>Sell-Side M&A Auction</option>
                      <option>Buy-Side Strategic Acquisition</option>
                      <option>Financial Sponsor LBO & Debt Syndication</option>
                      <option>Corporate Carve-Out & Divestiture</option>
                      <option>Board Valuation & Fairness Opinion</option>
                      <option>Growth Capital & Recapitalization</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1.5">Anticipated Enterprise Value</label>
                    <select
                      value={formState.dealSize}
                      onChange={(e) => setFormState({ ...formState, dealSize: e.target.value })}
                      className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                    >
                      <option>$100M — $250M EV</option>
                      <option>$250M — $500M EV</option>
                      <option>$500M — $1.0B EV</option>
                      <option>$1.0B+ Large Cap</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1.5">NDA / Protocol Status</label>
                    <select
                      value={formState.ndaStatus}
                      onChange={(e) => setFormState({ ...formState, ndaStatus: e.target.value })}
                      className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                    >
                      <option>Mutual NDA Ready</option>
                      <option>Standard Advisor NDA Required</option>
                      <option>Preliminary Exploration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1.5">Strategic Context & Scope</label>
                  <textarea
                    rows={3}
                    placeholder="Brief overview of transaction objectives, timing requirements, and key stakeholders..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#18181e] border border-white/[0.08] rounded p-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c5a880] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#0a0a0a] bg-[#c5a880] hover:bg-[#d8bc94] rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/15 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Confidential Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Regulatory Disclaimer */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] text-center text-[11px] text-slate-400 space-y-2">
          <p>
            © {new Date().getFullYear()} Aishwarya Sriram Srinivasachary All rights reserved.
          </p>
      
        </div>
      </div>
    </footer>
  );
};
