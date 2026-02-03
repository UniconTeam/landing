import React from 'react';
import { Terminal, Gamepad2, Smile, Zap, MessageCircle, Music } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <div className="group relative p-8 rounded-2xl bg-slate-800/30 border border-white/5 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
    {/* Hover Glow */}
    <div className={`absolute -inset-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className={`w-14 h-14 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-display font-bold mb-3 text-slate-100">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm flex-grow">
        {description}
      </p>
    </div>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
      title: "Gaming",
      description: "From The Finals to Minecraft, indie to AAA projects. Find teammates and discuss industry news.",
      color: "from-purple-600 to-indigo-600"
    },
    {
      icon: <Terminal className="w-8 h-8 text-cyan-400" />,
      title: "Programming",
      description: "Code help, tech discussions, project showcases. C/C++, Java, C#, Python, JS/TS and much more.",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: <Smile className="w-8 h-8 text-yellow-400" />,
      title: "Memes & Chat",
      description: "A separate cabin for humor, shitposting, and simple human interaction without toxicity.",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: "Events",
      description: "Regular game nights, group movie watch parties, and coding challenges.",
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: "Multilingual",
      description: "Primary language is Ukrainian, but we welcome everyone. English speaking available.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Music className="w-8 h-8 text-red-400" />,
      title: "Music & Lo-Fi",
      description: "Music bots and chill channels to relax while you work or play.",
      color: "from-red-600 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What's on <span className="text-magic-glow">Board</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our magical schooner is equipped with everything needed for a comfortable journey through digital worlds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};