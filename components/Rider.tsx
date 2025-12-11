import React from 'react';
import { useArtist } from '../context/ArtistContext';

export const Rider: React.FC = () => {
  const { content } = useArtist();

  if (!content) return null;

  return (
    <section className="min-h-screen py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">{content.rider.title}</h2>
        <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
          {content.rider.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Requirements */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              {content.rider.technical.title}
            </h3>
            <div className="space-y-4">
              {content.rider.technical.setup && (
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">{content.rider.technical.setup.title}</p>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    {content.rider.technical.setup.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hospitality */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              {content.rider.hospitality.title}
            </h3>
            <div className="space-y-4">
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">{content.rider.hospitality.backstage.title}</p>
                <ul className="text-sm text-zinc-300 space-y-2">
                  {content.rider.hospitality.backstage.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">{content.rider.hospitality.catering.title}</p>
                <ul className="text-sm text-zinc-300 space-y-2">
                  {content.rider.hospitality.catering.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-900">
        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
          {content.rider.disclaimer}
        </p>
      </div>
    </section>
  );
};
