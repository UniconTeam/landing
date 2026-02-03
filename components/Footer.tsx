import React from 'react';
import { Ship, Github, Twitter } from 'lucide-react';
import { githubLink, websiteDeveloperWebsite } from '@/data/links';
import { communityDescription } from '@/data/strings';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#020617] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <Ship className="text-magic-glow w-6 h-6" />
               <span className="font-display font-bold text-xl text-white">The Flying Boat</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs mb-6">
              {communityDescription}
            </p>
            <div className="flex space-x-4">
              <a href={githubLink} className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-magic-glow transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-magic-glow transition-colors">About</a></li>
              <li><a href="#languages" className="hover:text-magic-glow transition-colors">Languages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Other</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {/* <li><a href="#" className="hover:text-magic-glow transition-colors">Rules</a></li>
              <li><a href="#" className="hover:text-magic-glow transition-colors">Partners</a></li> */}
              <li><a href={websiteDeveloperWebsite} className="hover:text-magic-glow transition-colors">Developer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} The Flying Boat Community. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-slate-600">
             <span>Made with Love, TypeScript and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};