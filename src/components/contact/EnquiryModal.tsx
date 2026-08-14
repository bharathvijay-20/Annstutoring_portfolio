import React, { useState, useEffect } from 'react';
import { X, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { EnquiryFormData } from '../../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialSubject = ''
}) => {
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

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject,
        target: initialSubject.toLowerCase().includes('civil') ? 'Civil Engineering' : prev.target
      }));
    }
  }, [initialSubject]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const phoneNumber = '910000000000'; // Placeholder
    const messageText = `Hello ANNS TUTORING, I would like to enquire:\n- Name: ${formData.name || 'Student / Parent'}\n- Target: ${formData.target}\n- Subject: ${formData.subject || 'Course Enquiry'}\n- Mode: ${formData.mode}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center text-white font-bold text-xs">
              <span className="text-amber-400">A</span>T
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-navy-900">
                Academic Enquiry
              </h3>
              <p className="text-xs text-slate-500">
                ANNS TUTORING • Learn. Understand. Excel.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-xl text-navy-900">
              Thank you for enquiring!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              We have received your enquiry for <span className="font-semibold text-navy-900">{formData.target}</span> and will reach out with structured course information shortly.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Student or Parent Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                  Enquiring For *
                </label>
                <select
                  value={formData.target}
                  onChange={(e) => setFormData({ ...formData, target: e.target.value as any })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                >
                  <option value="Class 10">Class 10 (CBSE Mathematics)</option>
                  <option value="Class 9">Class 9 (CBSE Mathematics)</option>
                  <option value="Class 8">Class 8 (CBSE Mathematics)</option>
                  <option value="Class 7">Class 7 (CBSE Mathematics)</option>
                  <option value="Class 6">Class 6 (CBSE Mathematics)</option>
                  <option value="Civil Engineering">Civil Engineering Theory</option>
                  <option value="Other">Other Query</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                  Preferred Mode
                </label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                >
                  <option value="Online">Online Interactive</option>
                  <option value="Offline">Offline Classroom</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                Subject / Specific Topic
              </label>
              <input
                type="text"
                placeholder="e.g. Real Numbers, SOM, Mechanics..."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-academic">
                Brief Note (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention chapters needing help or target exams..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-brand-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-75"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>SUBMIT ENQUIRY</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
