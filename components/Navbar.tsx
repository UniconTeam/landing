import React, { useState, useEffect } from 'react';
import { Ship, Menu, X } from 'lucide-react';
import { Logo } from './icons/Logo';
import { discordInviteLink } from '@/data/links';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#features' },
    { name: 'Languages', href: '#languages' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'glass-panel shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo className="w-8 h-8 text-magic-glow" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-magic-glow transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-magic-glow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={discordInviteLink}
              target="_blank"
              className="px-4 py-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] backdrop-blur-sm"
            >
              Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#020617]/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a
              href={discordInviteLink}
              target="_blank"
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold text-white bg-magic-primary/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Discord
            </a>
        </div>
      </div>
    </nav>
  );
};