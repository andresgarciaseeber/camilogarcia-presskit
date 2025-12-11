import { useState, useEffect } from 'react';
import type { Artist, LanguageContent } from '../types/artist';

interface UseArtistDataReturn {
  artist: Artist | null;
  content: LanguageContent | null;
  language: string;
  setLanguage: (lang: string) => void;
  isLoading: boolean;
  error: Error | null;
}

export const useArtistData = (artistSlug: string = 'camilo-garcia', initialLanguage?: string): UseArtistDataReturn => {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [language, setLanguage] = useState<string>(initialLanguage || 'es');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadArtistData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Cargar el JSON
        const response = await fetch('/data/artists.json');

        if (!response.ok) {
          throw new Error(`Failed to fetch artist data: ${response.statusText}`);
        }

        const data = await response.json();

        // Buscar el artista por slug
        const artistData = data.artists[artistSlug];

        if (!artistData) {
          throw new Error(`Artist not found: ${artistSlug}`);
        }

        setArtist(artistData);

        // Si no se especificó idioma inicial, usar el idioma por defecto del artista
        if (!initialLanguage && artistData.defaultLanguage) {
          setLanguage(artistData.defaultLanguage);
        }

      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Error loading artist data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadArtistData();
  }, [artistSlug, initialLanguage]);

  // Obtener el contenido en el idioma actual
  const content = artist && artist.content[language]
    ? artist.content[language]
    : null;

  return {
    artist,
    content,
    language,
    setLanguage,
    isLoading,
    error
  };
};
