import React, { createContext, useContext, ReactNode } from 'react';
import { useArtistData } from '../hooks/useArtistData';
import type { Artist, LanguageContent } from '../types/artist';

interface ArtistContextValue {
  artist: Artist | null;
  content: LanguageContent | null;
  language: string;
  setLanguage: (lang: string) => void;
  isLoading: boolean;
  error: Error | null;
}

const ArtistContext = createContext<ArtistContextValue | undefined>(undefined);

interface ArtistProviderProps {
  children: ReactNode;
  artistSlug?: string;
  initialLanguage?: string;
}

export const ArtistProvider: React.FC<ArtistProviderProps> = ({
  children,
  artistSlug = 'camilo-garcia',
  initialLanguage = 'es'
}) => {
  const artistData = useArtistData(artistSlug, initialLanguage);

  return (
    <ArtistContext.Provider value={artistData}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtist = (): ArtistContextValue => {
  const context = useContext(ArtistContext);

  if (context === undefined) {
    throw new Error('useArtist must be used within an ArtistProvider');
  }

  return context;
};
