import React from 'react';
import { Gamepad2, Sparkles } from 'lucide-react';
import { discordInviteLink } from '@/data/links';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-magic-primary/20 border border-magic-primary/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-magic-glow animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-magic-glow uppercase">
                Greetings!
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Community <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-magic-glow via-magic-secondary to-magic-primary text-glow">
                The Flying Boat
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-lg leading-relaxed">
              Not an airship, but a magical boat sailing the river among the stars. Games, coding, and the best memes await on board.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <a 
                href={discordInviteLink}
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-magic-primary to-magic-secondary rounded-xl text-white font-bold shadow-lg shadow-magic-primary/25 hover:shadow-magic-primary/40 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>Join us</span>
              </a>
              <a 
                href="#features" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 rounded-xl text-slate-200 font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>
            
            <div className="pt-4 flex items-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Ukrainian
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <span>English</span>
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <span>Russian</span>
            </div>
          </div>

          {/* Visual Content - Magical Boat Abstract Representation */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center perspective-1000">
            {/* The "Water" / Magic River */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-t from-magic-primary/10 to-transparent blur-xl rounded-[100%]"></div>
            
            {/* The Boat Container */}
            <div className="relative w-full max-w-md aspect-square animate-float">
               {/* Glow effect behind boat */}
               <div className="absolute inset-0 bg-gradient-to-tr from-magic-secondary/20 to-magic-accent/20 rounded-full blur-[60px] animate-pulse-glow"></div>
               
               {/* Boat Illustration Construction (CSS Art-ish) */}
               <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  
                  {/* Sail / Magic Symbol */}
                  <div className="relative w-48 h-64 mb-4">
                     {/* Mast */}
                     <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-slate-300 to-slate-600 rounded-full -translate-x-1/2"></div>
                     
                     {/* Cloth Sail */}
                     <div className="absolute top-4 left-1/2 w-40 h-48 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-tr-[50%] rounded-br-[10%] rounded-bl-[80%] rounded-tl-[10%] -translate-x-1"></div>
                     
                     {/* Magic Runes floating */}
                     <div className="absolute top-10 right-0 animate-bounce text-magic-glow text-2xl font-display opacity-80">✧</div>
                     <div className="absolute bottom-20 -left-8 animate-pulse text-magic-secondary text-xl font-display opacity-60">✶</div>
                  </div>

                  {/* Hull */}
                  <div className="relative w-64 h-24 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-[4rem] rounded-t-lg border-t-2 border-magic-accent/50 shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Wood texture lines */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_50%,transparent_100%)]"></div>
                    {/* Glowing Water Line */}
                    <div className="absolute bottom-0 w-full h-2 bg-magic-glow/50 blur-[2px]"></div>
                  </div>

                  {/* Magic Particles under boat */}
                  <div className="absolute -bottom-8 flex space-x-4 opacity-50">
                    <div className="w-2 h-2 bg-magic-accent rounded-full animate-[ping_2s_linear_infinite]"></div>
                    <div className="w-3 h-3 bg-magic-secondary rounded-full animate-[ping_3s_linear_infinite_0.5s]"></div>
                    <div className="w-2 h-2 bg-magic-primary rounded-full animate-[ping_2s_linear_infinite_1s]"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};