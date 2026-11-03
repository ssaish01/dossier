/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdvisoryServices } from './components/AdvisoryServices';
import { DealTombstones } from './components/DealTombstones';
import { FinancialModels } from './components/FinancialModels';
import { CareerTrajectory } from './components/CareerTrajectory';
import { ContactSection } from './components/ContactSection';
import { ExecutiveResumeModal } from './components/ExecutiveResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 bg-financial-grid selection:bg-[#c5a880]/30 selection:text-white">
      {/* Institutional Top Bar Navigation */}
      <Navbar 
        onOpenContact={handleOpenContact}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section with Career Highlights Ticker */}
        <Hero 
          onOpenContact={handleOpenContact}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Professional Profile & Advisory Competencies */}
        <AdvisoryServices />

        {/* Featured Deal Tombstones / Case Studies (The Core) */}
        <DealTombstones />

        {/* Financial Models & Quantitative Artifacts */}
        <FinancialModels />

        {/* Career Trajectory & Institutional Pedigree */}
        <CareerTrajectory />

        {/* Contact Section & Regulatory Disclosures */}
        <ContactSection />
      </main>

      {/* Executive CV / Resume Modal */}
      <ExecutiveResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
