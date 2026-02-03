import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Globe } from 'lucide-react';

const data = [
  { name: 'Ukrainian (Primary)', value: 70, color: '#22d3ee' }, // magic-glow
  { name: 'English (Text)', value: 20, color: '#818cf8' }, // indigo-400
  { name: 'Russian', value: 10, color: '#94a3b8' }, // slate-400
];

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-24 bg-slate-900/20 border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-magic-primary/10 blur-[100px]" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-magic-secondary/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
        
        {/* Chart Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full h-[300px] bg-slate-800/30 rounded-full border border-white/5 backdrop-blur-sm p-4 relative">
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Globe className="w-12 h-12 text-slate-700 opacity-50" />
             </div>
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
              {data.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-slate-300 font-medium">{item.name}</span>
                  </div>
              ))}
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
             Language <span className="text-magic-secondary">Policy</span>
           </h2>
           <p className="text-lg text-slate-300 mb-6 leading-relaxed">
             We are a community that respects diversity but has clear roots.
             <br /><br />
             <strong className="text-magic-glow">Ukrainian</strong> is the primary language for voice chats and main text channels.
           </p>
           <ul className="space-y-4 text-slate-400 text-left mx-auto lg:mx-0 max-w-md">
             <li className="flex items-start">
               <span className="mr-3 text-magic-primary font-bold">✓</span>
               English friendly community.
             </li>
             <li className="flex items-start">
               <span className="mr-3 text-magic-primary font-bold">✓</span>
               Tolerance towards newcomers.
             </li>
             <li className="flex items-start">
               <span className="mr-3 text-magic-primary font-bold">✓</span>
               Adequate moderation and no politics.
             </li>
           </ul>
        </div>
      </div>
    </section>
  );
};