'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Something went wrong');
      }

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Form Container */}
      <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-md p-4 sm:p-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-xl sm:rounded-[2rem] shadow-2xl border border-white/10">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl sm:rounded-[2rem] pointer-events-none"></div>
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-5 sm:top-5 text-gray-300 hover:text-white transition-colors"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold tracking-wide text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all outline-none text-white placeholder-gray-400 text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold tracking-wide text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all outline-none text-white placeholder-gray-400 text-sm"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold tracking-wide text-gray-200 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={3}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all outline-none text-white placeholder-gray-400 text-sm"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-bold tracking-wide rounded-lg sm:rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/20 hover:shadow-black/30 text-sm"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Social Contact Options */}
        <div className="mt-4 pt-3 sm:mt-6 sm:pt-4 border-t border-white/10 text-center">
          <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide mb-3">
            <span className="inline-block mx-2 h-[1px] w-6 sm:w-8 bg-gray-700"></span>
            connect with us on
            <span className="inline-block mx-2 h-[1px] w-6 sm:w-8 bg-gray-700"></span>
          </p>
          <a 
            href="https://discordapp.com/users/446534444493307906" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-2.5 px-4 sm:px-6 bg-gradient-to-r from-[#1a237e] to-[#202c94] hover:from-[#283593] hover:to-[#2f3ba0] text-white rounded-lg sm:rounded-xl transition-all group hover:scale-[1.02] border border-[#5865F2]/40 hover:border-[#5865F2]/80 shadow-[0_0_15px_rgba(88,101,242,0.2)] hover:shadow-[0_0_25px_rgba(88,101,242,0.35)] relative text-sm"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#5865F2] group-hover:scale-110 transition-transform group-hover:brightness-125 relative z-10"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="font-bold tracking-wide">
              Chat with us on Discord
            </span>
          </a>
          
          <a 
            href="https://t.me/investfoxy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-2.5 px-4 sm:px-6 bg-gradient-to-r from-[#1c92d2] to-[#2086c1] hover:from-[#2298d8] hover:to-[#239bd8] text-white rounded-lg sm:rounded-xl transition-all group hover:scale-[1.02] border border-[#64B5F6]/40 hover:border-[#64B5F6]/80 shadow-[0_0_15px_rgba(100,181,246,0.2)] hover:shadow-[0_0_25px_rgba(100,181,246,0.35)] relative text-sm"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#64B5F6] group-hover:scale-110 transition-transform group-hover:brightness-125 relative z-10"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="font-bold tracking-wide">
              Message us on Telegram
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
