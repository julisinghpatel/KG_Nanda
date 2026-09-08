import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', region: 'US', displayCode: 'EN' },
  { code: 'hi', label: 'हिन्दी', region: 'IN', displayCode: 'HI' },
  { code: 'bn', label: 'বাংলা', region: 'IN', displayCode: 'BN' },
  { code: 'mr', label: 'मराठी', region: 'IN', displayCode: 'MR' },
  { code: 'te', label: 'తెలుగు', region: 'IN', displayCode: 'TE' },
  { code: 'ta', label: 'தமிழ்', region: 'IN', displayCode: 'TA' },
  { code: 'gu', label: 'ગુજરાતી', region: 'IN', displayCode: 'GU' },
  { code: 'ur', label: 'اردو', region: 'IN', displayCode: 'UR' },
  { code: 'kn', label: 'ಕನ್ನಡ', region: 'IN', displayCode: 'KN' },
  { code: 'or', label: 'ଓଡ଼ିଆ', region: 'IN', displayCode: 'OR' },
  { code: 'ml', label: 'മലയാളം', region: 'IN', displayCode: 'ML' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', region: 'IN', displayCode: 'PA' }
];

const LanguageTranslator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Initialize selected language from cookie if available
    const match = document.cookie.match(/googtrans=\/[a-z]{2}\/([a-z]{2})/);
    if (match && match[1]) {
      setSelectedLang(match[1]);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    
    // Set Google Translate cookie as a fallback
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname};`;

    // Trigger Google Translate
    const selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
      // If going back to English and it's the page language, sometimes value needs to be cleared or set to 'en'
      selectField.value = langCode;
      // Google translate listens for change event with bubbles
      selectField.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    } else {
      // If combo box is not found, a reload might be needed to apply the cookie
      window.location.reload();
    }
  };

  const currentLang = languages.find(l => l.code === selectedLang) || languages[0];

  return (
    <div className="notranslate relative" translate="no" ref={dropdownRef}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white hover:bg-slate-50 transition-all duration-300 px-1.5 py-1.5 pr-3.5 rounded-full border border-slate-200 shadow-sm group"
      >
        <div className="bg-[#e6f7f6] group-hover:bg-[#d0f0ef] transition-colors p-1 rounded-full flex items-center justify-center">
          <Globe size={16} className="text-[#35b6b4]" />
        </div>
        <span className="text-slate-700 font-bold text-[13px] tracking-wide">{currentLang.displayCode}</span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Panel */}
      <div className={`absolute top-full right-0 mt-2 w-52 bg-[#f8f9fa] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-slate-200 overflow-hidden transition-all duration-300 origin-top-right z-[100] ${isOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/60 bg-white">
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.15em] uppercase">Translate</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
        </div>

        {/* List */}
        <div className="max-h-[340px] overflow-y-auto py-1.5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          {languages.map((lang) => {
            const isActive = selectedLang === lang.code;
            return (
              <div key={lang.code} className="px-1.5 py-0.5">
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-[#2563eb] text-white shadow-sm' : 'hover:bg-slate-200/60 text-[#334155]'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[11px] font-bold ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                      {lang.region}
                    </span>
                    <span className={`text-[15px] font-medium ${isActive ? 'text-white' : 'text-[#334155]'}`}>
                      {lang.label}
                    </span>
                  </div>
                  {isActive && <Check size={16} className="text-white" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageTranslator;