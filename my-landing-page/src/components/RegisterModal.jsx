
import { X } from 'lucide-react';

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-serif text-brand-navy mb-1.5">
            Register your Interest
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Fill in your details and we'll get in touch with you about Owner Driver Collective.
          </p>

          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-brand-navy mb-1">
                Full Name <span className="text-brand-orange">*</span>
              </label>
              <input 
                type="text" 
                id="fullName" 
                required
                placeholder="Enter your full name" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-brand-navy mb-1">
                Email Address <span className="text-brand-orange">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                required
                placeholder="you@example.com" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-1">
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="04XX XXX XXX" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            {/* Company / Business Name */}
            <div>
              <label htmlFor="company" className="block text-sm font-bold text-brand-navy mb-1">
                Company / Business Name
              </label>
              <input 
                type="text" 
                id="company" 
                placeholder="Your company name" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-bold text-brand-navy mb-1">
                Role
              </label>
              <div className="relative">
                <select 
                  id="role" 
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all appearance-none bg-white text-gray-700 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Select your role</option>
                  <option value="driver">Owner Driver</option>
                  <option value="operator">Fleet Operator</option>
                  <option value="other">Other</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-brand-navy mb-1">
                Message
              </label>
              <textarea 
                id="message" 
                rows="2"
                placeholder="Tell us a bit about your interest in ODC..." 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400 resize-none text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-brand-navy text-white py-2.5 rounded-lg font-bold text-base hover:bg-brand-navy-mid transition-colors duration-300"
              >
                Submit Interest
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
