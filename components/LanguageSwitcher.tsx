import React from 'react';
import { useArtist } from '../context/ArtistContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, artist } = useArtist();

  if (!artist) return null;

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-zinc-900/80 border border-zinc-700 rounded-lg text-white font-mono text-sm uppercase tracking-wider hover:bg-zinc-800 hover:border-indigo-500 transition-all duration-300 backdrop-blur-sm"
      aria-label="Switch language"
    >
      {language === 'es' ? '🇬🇧 EN' : '🇦🇷 ES'}
    </button>
  );
};
