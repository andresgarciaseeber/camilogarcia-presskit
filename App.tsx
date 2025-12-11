import React from 'react';
import { Bio } from './components/Bio';
import { Gallery } from './components/Gallery';
import { Music } from './components/Music';
import { Rider } from './components/Rider';
import { Booking } from './components/Booking';
import { Button } from './components/Button';
import { Logo } from './components/Logo';
import { ArtistProvider, useArtist } from './context/ArtistContext';
import html2pdf from 'html2pdf.js';

function AppContent() {
  const { artist, content, language, setLanguage, isLoading, error } = useArtist();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-zinc-400 font-mono text-sm">Cargando...</p>
        </div>
      </div>
    );
  }

  if (error || !artist || !content) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-mono text-sm mb-2">Error al cargar datos</p>
          <p className="text-zinc-400 text-xs">{error?.message}</p>
        </div>
      </div>
    );
  }
  // Obtener mes y año actuales en español
  const getCurrentDate = () => {
    const now = new Date();
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const mes = meses[now.getMonth()];
    const año = now.getFullYear();
    return `Buenos Aires — ${mes} — ${año}`;
  };

  const handleDownloadPDF = () => {
    // Crear un contenedor temporal con los estilos de print aplicados
    const printContainer = document.createElement('div');
    printContainer.className = 'print-mode';
    printContainer.innerHTML = document.body.innerHTML;

    // Agregar estilos temporales para simular @media print
    const style = document.createElement('style');
    style.innerHTML = `
      .print-mode .print\\:hidden { display: none !important; }
      .print-mode .print\\:flex { display: flex !important; }
      .print-mode .print\\:py-8 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
      .print-mode .print\\:py-12 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
      .print-mode .print\\:h-screen { height: 100vh !important; }
      .print-mode .print\\:w-full { width: 100% !important; }
      .print-mode .print\\:mb-4 { margin-bottom: 1rem !important; }
      .print-mode .print\\:pb-3 { padding-bottom: 0.75rem !important; }
      .print-mode .print\\:pt-4 { padding-top: 1rem !important; }
      .print-mode .print\\:space-y-4 > * + * { margin-top: 1rem !important; }
      .print-mode .print\\:space-y-6 > * + * { margin-top: 1.5rem !important; }

      .print-mode { background: black; color: white; }

      /* Ocultar todas las clases hidden en print */
      .print-mode .hidden { display: none !important; }

      /* Mostrar elementos con print:flex */
      .print-mode .hidden.print\\:flex { display: flex !important; }

      /* Mostrar la galería de imágenes en print */
      .print-mode .gallery-images-grid { display: grid !important; }
      .print-mode .gallery-image-item { display: block !important; }

      .print-mode .grid {
        display: grid !important;
      }
      .print-mode section {
        page-break-after: always !important;
        page-break-inside: avoid !important;
      }
      .print-mode header {
        page-break-after: always !important;
      }
      .print-mode ul, .print-mode ol {
        list-style: none !important;
        padding-left: 0 !important;
        margin-left: 0 !important;
      }
      .print-mode li {
        line-height: 1.8 !important;
        margin-bottom: 0.5rem !important;
        padding-left: 0 !important;
      }
      .print-mode span[class*="rounded"]:not([class*="rounded-full"]),
      .print-mode span[class*="px-"],
      .print-mode span[class*="bg-"]:not([class*="rounded-full"]),
      .print-mode a[class*="rounded"],
      .print-mode a[class*="px-"],
      .print-mode div[class*="rounded"][class*="px-"],
      .print-mode button[class*="px-"] {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
        line-height: 1.2 !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        vertical-align: middle !important;
        min-height: fit-content !important;
      }
      /* Resetear estilos para círculos decorativos */
      .print-mode span.rounded-full,
      .print-mode span[class*="rounded-full"] {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        line-height: normal !important;
        display: inline-block !important;
        align-items: initial !important;
        justify-content: initial !important;
        vertical-align: baseline !important;
        min-height: auto !important;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(printContainer);

    const opt = {
      margin: 0,
      filename: `${artist.name.replace(/\s+/g, '_')}_EPK.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#000000',
        imageTimeout: 0,
        allowTaint: true
      },
      jsPDF: {
        unit: 'mm' as const,
        format: 'a4' as const,
        orientation: 'portrait' as const
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf()
      .set(opt)
      .from(printContainer)
      .save()
      .then(() => {
        // Limpiar elementos temporales
        document.body.removeChild(printContainer);
        document.head.removeChild(style);
      });
  };
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-black/10 print:hidden">
        <h1 className="text-xl font-bold tracking-tighter uppercase glitch-hover cursor-default">
          CG
        </h1>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#bio" className="hover:text-zinc-400 transition-colors">{content.ui.nav.bio}</a>
          <a href="#music" className="hover:text-zinc-400 transition-colors">{content.ui.nav.music}</a>
          <a href="#gallery" className="hover:text-zinc-400 transition-colors">{content.ui.nav.gallery}</a>
          <a href="#rider" className="hover:text-zinc-400 transition-colors">{content.ui.nav.rider}</a>
          <a href="#booking" className="hover:text-zinc-400 transition-colors">{content.ui.nav.contact}</a>
        </div>
        <Button
          variant="outline"
          className="text-[10px] py-2 px-4 border-zinc-600 hover:bg-white hover:text-black"
          onClick={handleDownloadPDF}
        >
          {content.ui.downloadEPK}
        </Button>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center px-6 relative overflow-hidden print:h-screen print:w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={artist.images.cover}
            alt={artist.name}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Background ambient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-60 z-0 print:hidden"></div>
        {/* Subtle animated gradient orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full z-0 pointer-events-none animate-pulse duration-[10000ms] print:hidden"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-4">
            {getCurrentDate()}
          </p>
          <div className="w-full max-w-5xl">
            <Logo />
          </div>
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between border-t border-zinc-800 pt-8">
            <div className="max-w-xl">
              <p className="text-xl text-zinc-200 font-light leading-snug">
                {content.tagline}. <span className="text-zinc-400">{content.subtitle}</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400 font-mono max-w-md">
                {content.description}
                <br/>{content.specialMention}
              </p>
            </div>
            
            <div className="mt-8 md:mt-0 flex gap-4">
              <a href={artist.social.spotify} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 border border-zinc-800 rounded-full hover:bg-white hover:border-white transition-all duration-300">
                <span className="sr-only">Spotify</span>
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              </a>
              <a href={artist.social.soundcloud} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 border border-zinc-800 rounded-full hover:bg-white hover:border-white transition-all duration-300">
                <span className="sr-only">SoundCloud</span>
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M11.56 8.87V17h1.38V9.04c-.44-.06-.9-.12-1.38-.17zm-9.06 4.38c0 1.05.82 1.91 1.83 1.91h.78v-4.5c-.32.19-.62.43-.87.72-.45.54-.69 1.18-.74 1.87zm3.12 3.75h1.38V9.33c-.47.16-.93.36-1.38.61v7.06zm13.52-2.39c-.06-.51-.27-.98-.59-1.36-.29-.36-.67-.62-1.09-.76V9.07c0-1.87-1.46-3.39-3.29-3.39-1.63 0-2.98 1.19-3.24 2.74l-.06 8.58h6.29c1.09 0 1.98-.89 1.98-2 .03-.5-.14-.97-.47-1.35l.47.35zM7.5 17h1.38V8.14c-.46.36-.92.77-1.38 1.22V17zm-1.84 0h1.38v-5.83c-.47.46-.93 1-1.38 1.63V17z"/></svg>
              </a>
              <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 border border-zinc-800 rounded-full hover:bg-white hover:border-white transition-all duration-300">
                 <span className="sr-only">Instagram</span>
                 <svg className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={artist.social.drive} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 border border-zinc-800 rounded-full hover:bg-white hover:border-white transition-all duration-300">
                <span className="sr-only">Google Drive</span>
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 1.485c-.14 0-.28.037-.4.106L3.05 7.186c-.247.144-.4.41-.4.701v8.228c0 .292.153.557.4.7l8.56 5.596c.247.162.554.162.802 0l8.56-5.595c.247-.144.4-.41.4-.701V7.887c0-.292-.153-.557-.4-.7l-8.56-5.596c-.12-.07-.26-.106-.4-.106zm-.01 2.095l6.96 4.548-3.08 1.786-6.962-4.548 3.082-1.786zm-1.595.923L3.443 9.05l3.08 1.786 6.962-4.548-3.08-1.785zm-6.307 3.66v7.296l6.307 4.12v-7.295L4.098 8.164zm15.804 0l-6.307 4.12v7.294l6.307-4.12V8.164z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div id="bio">
        <Bio />
      </div>

      <div id="music">
        <Music />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="rider">
        <Rider />
      </div>

      <div id="booking">
        <Booking />
      </div>
    </div>
  );
}

function App() {
  return (
    <ArtistProvider artistSlug="camilo-garcia" initialLanguage="es">
      <AppContent />
    </ArtistProvider>
  );
}

export default App;