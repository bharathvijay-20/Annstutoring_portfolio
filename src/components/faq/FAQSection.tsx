import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { faqsData } from '../../data/faqs';

interface FAQSectionProps {
  onOpenEnquiry: (targetSubject?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="FREQUENTLY ASKED QUESTIONS"
          title="Clear answers to your academic queries."
          subtitle="Everything you need to know about our CBSE Mathematics tutoring, Civil Engineering theory curriculum, and enquiry process."
        />

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 shadow-subtle overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-navy-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-brand-50 text-brand-700' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Strip */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy-900">Have a specific question not listed here?</div>
              <div className="text-xs text-slate-500">Reach out directly and we will be glad to assist you.</div>
            </div>
          </div>

          <button
            onClick={() => onOpenEnquiry('General Query from FAQ')}
            className="px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-brand-900 text-white text-xs font-semibold shrink-0 transition-colors"
          >
            Ask a Question
          </button>
        </div>

      </div>
    </section>
  );
};
