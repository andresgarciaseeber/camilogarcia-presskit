import React from 'react';
import { useArtist } from '../context/ArtistContext';

export const Music: React.FC = () => {
  const { artist, content } = useArtist();

  if (!artist || !content) return null;

  return (
    <section id="music" className="min-h-screen py-16 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-8">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">{content.music.sectionTitle}</h2>
        <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
          {content.music.sectionSubtitle}
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {/* Featured Releases */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            {content.ui.featuredReleases}
          </h3>

          <div className="space-y-3">
            {content.music.featuredReleases.map((release) => (
              <div key={release.id} className="bg-zinc-900/50 border border-zinc-800 p-3 rounded hover:border-indigo-900 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-indigo-400 transition-colors">{release.title}</h4>
                    <p className="text-zinc-400 text-sm font-mono">{release.artist} • {release.label} • {release.year}</p>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${release.type === 'Original' ? 'bg-indigo-900/50 text-indigo-300' : 'bg-zinc-700/50 text-zinc-300'}`}>{release.type}</span>
                </div>
                <a
                  href={release.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors print:text-zinc-400"
                >
                  {content.ui.listenOnSpotify}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify & Streaming */}
        <div className="space-y-4 print:hidden">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              {content.ui.streaming}
            </h3>

            <a
              href={artist.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-green-500/10 to-green-700/10 border border-green-900/50 p-4 rounded hover:border-green-500 transition-all duration-300 group print:hidden"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <div>
                  <p className="text-white font-bold text-base group-hover:text-green-400 transition-colors">Spotify</p>
                  <p className="text-zinc-400 text-xs font-mono">Escuchá ahora</p>
                </div>
              </div>
              <p className="text-zinc-400 text-xs">
                Discografía completa y playlists
              </p>
            </a>

            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded mt-3 print:hidden">
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">{content.ui.alsoAvailableOn}</p>
              <div className="flex flex-wrap gap-2">
                {content.music.platforms.map((platform, index) => (
                  <span key={index} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-full font-mono">{platform}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded print:hidden">
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">{content.ui.recordLabels}</p>
            <ul className="text-xs text-zinc-300 space-y-1">
              {content.music.labels.map((label, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Remixes Section */}
      <div className="mt-6 pt-6 border-t border-zinc-900">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">{content.ui.remixesCollaborations}</h3>
        {content.music.remixes.map((remix) => (
          <div key={remix.id} className="bg-zinc-900/50 border border-zinc-800 p-3 rounded hover:border-indigo-900 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-white font-bold text-base">{remix.title}</h4>
                <p className="text-zinc-400 text-sm font-mono">{remix.artist}</p>
              </div>
              <span className="text-[10px] bg-zinc-700/50 text-zinc-300 px-2 py-1 rounded font-bold uppercase">{remix.plays}</span>
            </div>
            <a
              href={remix.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              {content.ui.listenOnSoundcloud}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
