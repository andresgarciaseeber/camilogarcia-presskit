import React from 'react';
import { useArtist } from '../context/ArtistContext';

export const Booking: React.FC = () => {
  const { artist, content } = useArtist();

  if (!artist || !content) return null;

  return (
    <section className="min-h-screen py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900 flex flex-col justify-center">
      <div className="mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">{content.booking.title}</h2>
        <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
          {content.booking.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
        {/* Management & Booking */}
        <div className="space-y-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              {content.booking.management.title}
            </h3>
            <div className="space-y-4">
              <div>
                {content.booking.management.name && (
                  <p className="text-white font-bold text-xl mb-2">{content.booking.management.name}</p>
                )}
                {content.booking.management.phone && (
                  <a href={`tel:${content.booking.management.phone.replace(/\s/g, '')}`} className="text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                    {content.booking.management.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              {content.booking.bookingPromo.title}
            </h3>
            <div>
              {content.booking.bookingPromo.email && (
                <a href={`mailto:${content.booking.bookingPromo.email}`} className="text-white font-bold text-xl hover:text-indigo-400 transition-colors">
                  {content.booking.bookingPromo.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="space-y-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              {content.booking.socialMedia.title}
            </h3>
            <div className="space-y-4">
              <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer" className="block text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                Instagram: {content.booking.socialMedia.instagram}
              </a>
              <a href={artist.social.soundcloud} target="_blank" rel="noopener noreferrer" className="block text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                {content.booking.socialMedia.soundcloud}
              </a>
              <a href={artist.social.spotify} target="_blank" rel="noopener noreferrer" className="block text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                {content.booking.socialMedia.spotify}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
