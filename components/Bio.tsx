import React from 'react';
import { useArtist } from '../context/ArtistContext';

export const Bio: React.FC = () => {
  const { artist, content } = useArtist();

  if (!artist || !content) return null;

  return (
    <section className="min-h-screen py-16 px-6 max-w-4xl mx-auto border-t border-zinc-900 print:py-12">
      <div className="space-y-8 print:space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">{content.ui.biography}</h2>
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
            {content.tagline} — {artist.birthPlace}, {artist.birthYear}
          </p>
        </div>

        {/* Main Bio Text */}
        <div className="space-y-5 text-zinc-200 font-light text-lg leading-relaxed print:space-y-4">
          {content.bio.paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(new RegExp(`\\b${artist.name}\\b`, 'g'), `<strong class="text-white font-normal">${artist.name}</strong>`) }} />
          ))}

          <blockquote className="border-l-2 border-indigo-500 pl-6 py-2 my-4 text-zinc-300 italic text-base">
            "{content.bio.quote}"
          </blockquote>
        </div>

        {/* Info Grid + Support Combined */}
        <div className="pt-6 border-t border-zinc-800 space-y-6 print:pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="block text-zinc-400 text-[10px] uppercase tracking-widest mb-2">{content.ui.origin}</span>
              <span className="text-white font-mono text-sm">{content.bio.origin}</span>
            </div>
            <div>
              <span className="block text-zinc-400 text-[10px] uppercase tracking-widest mb-2">{content.ui.styles}</span>
              <span className="text-white font-mono text-sm">{content.bio.styles}</span>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">{content.ui.supportArtists}</h3>
            <div className="flex flex-wrap gap-3">
              {content.bio.supportArtists.map((artist, index) => (
                <span key={index} className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded text-sm text-zinc-300">{artist}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};