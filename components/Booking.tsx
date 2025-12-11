import React from 'react';

export const Booking: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900 flex flex-col justify-center">
      <div className="mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">Contacto</h2>
        <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
          Booking • Management • Colaboraciones
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
        {/* Management & Booking */}
        <div className="space-y-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Management
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-bold text-xl mb-2">Eduardo Polito</p>
                <a href="tel:+5491153875891" className="text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                  +54 9 11 5387-5891
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Booking & Promo
            </h3>
            <div>
              <a href="mailto:gcamilomartin@gmail.com" className="text-white font-bold text-xl hover:text-indigo-400 transition-colors">
                gcamilomartin@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="space-y-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Redes Sociales
            </h3>
            <div className="space-y-4">
              <a href="https://www.instagram.com/camilogarcia1971/" target="_blank" rel="noopener noreferrer" className="block text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                Instagram: @camilogarcia1971
              </a>
              <a href="https://soundcloud.com/camilo-martin-garcia-ii" target="_blank" rel="noopener noreferrer" className="block text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                SoundCloud
              </a>
              <a href="https://open.spotify.com/intl-es/artist/7m1c4h1YmipNM0GwKEkb5H" target="_blank" rel="noopener noreferrer" className="block text-zinc-300 text-lg hover:text-indigo-400 transition-colors">
                Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
