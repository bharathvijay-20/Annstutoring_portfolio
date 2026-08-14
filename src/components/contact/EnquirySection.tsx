import React, { useState } from 'react';
import { Send, MessageCircle, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { EnquiryFormData } from '../../types';

interface EnquirySectionProps {
  initialSubject?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    target: 'Class 10',
    subject: initialSubject,
    mode: 'Online',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const phoneNumber = '910000000000'; // Placeholder - easily editable
    const messageText = `Hello ANNS TUTORING, I would like to enquire:\n- Name: ${formData.name || 'Student / Parent'}\n- Class/Course: ${formData.target}\n- Subject: ${formData.subject || 'Not specified'}\n- Mode: ${formData.mode}\n- Note: ${formData.message || 'Looking for course details'}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  const handleDirectCall = () => {
    alert('Phone enquiry line placeholder - phone number will be configured.');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="GET IN TOUCH"
          title="Ready to Learn with Clarity?"
          subtitle="Whether you are a school student, parent or Civil Engineering student, start with a simple enquiry and find the right learning path for you."
        />

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            type="button"
            onClick={() => {
              const formEl = document.getElementById('enquiry-form');
              formEl?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-brand-900 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4 text-amber-400" />
            <span>ENQUIRE NOW</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="px-6 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-subtle"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WHATSAPP</span>
          </button>

          <button
            type="button"
            onClick={handleDirectCall}
            className="px-6 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-600" />
            <span>CALL</span>
          </button>
        </div>

        {/* Main Enquiry Form Container */}
        <div id="enquiry-form" className="max-w-3xl mx-auto bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-navy-900">
                Enquiry Received Successfully
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to ANNS TUTORING. We will review your learning requirements for <span className="font-semibold text-navy-900">{formData.target}</span> and connect with you shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:bg-white"
                >
                  Send another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                    Student / Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-sm"
                  />
                </div>

                {/* Class / Course Dropdown */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                    I am enquiring for: *
                  </label>
                  <select
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-sm"
                  >
                    <option value="Class 10">Class 10 (CBSE Mathematics)</option>
                    <option value="Class 9">Class 9 (CBSE Mathematics)</option>
                    <option value="Class 8">Class 8 (CBSE Mathematics)</option>
                    <option value="Class 7">Class 7 (CBSE Mathematics)</option>
                    <option value="Class 6">Class 6 (CBSE Mathematics)</option>
                    <option value="Civil Engineering">Civil Engineering (Theory Subjects)</option>
                    <option value="Other">Other Academic Guidance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Specific Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                    Specific Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Real Numbers, SOM, Structural Analysis..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-sm"
                  />
                </div>

                {/* Preferred Learning Mode */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                    Preferred Learning Mode *
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-sm"
                  >
                    <option value="Online">Online Interactive</option>
                    <option value="Offline">Offline Classroom</option>
                    <option value="Not sure yet">Not sure yet / Needs consultation</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                  Message / Learning Needs
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about current academic focus, specific chapters needing assistance, or examination goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-sm"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-brand-900 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-500">
                  Your academic inquiry will be handled with complete privacy and personal attention.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
