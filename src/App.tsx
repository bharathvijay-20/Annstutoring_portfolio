import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { TrustStrip } from './components/hero/TrustStrip';
import { AboutSection } from './components/about/AboutSection';
import { SchoolMathSection } from './components/school/SchoolMathSection';
import { CivilEngSection } from './components/engineering/CivilEngSection';
import { LearningApproach } from './components/features/LearningApproach';
import { VideoLessons } from './components/resources/VideoLessons';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content - 7 Core Sections */}
      <main className="flex-grow">
        {/* 1. HOME */}
        <Hero />
        <TrustStrip />

        {/* 2. ABOUT */}
        <AboutSection />

        {/* 3. SCHOOL MATHEMATICS */}
        <SchoolMathSection />

        {/* 4. CIVIL ENGINEERING */}
        <CivilEngSection />

        {/* 5. LEARNING APPROACH */}
        <LearningApproach />

        {/* 6. VIDEOS / RESOURCES */}
        <VideoLessons />

        {/* 7. CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Conversion Action */}
      <StickyMobileCTA />
    </div>
  );
};

export default App;
