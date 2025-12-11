import React from 'react';

const IMAGES = [
  { id: 1, url: "/1.jpg", caption: "Press Photo 1" },
  { id: 2, url: "/2.jpg", caption: "Press Photo 2" },
  { id: 3, url: "/3.jpg", caption: "Press Photo 3" },
  { id: 4, url: "/4.jpg", caption: "Press Photo 4" },
  { id: 5, url: "/5.jpg", caption: "Press Photo 5" },
  { id: 6, url: "/6.jpg", caption: "Press Photo 6" },
  { id: 7, url: "/7.jpg", caption: "Press Photo 7" },
  { id: 8, url: "/8.jpg", caption: "Press Photo 8" },
  { id: 9, url: "/9.jpg", caption: "Press Photo 9" }
];

export const Gallery: React.FC = () => {
  return (
    <section className="min-h-screen py-12 px-6 max-w-6xl mx-auto print:py-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-zinc-800 pb-4 gap-4 print:mb-4 print:pb-3">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Galería de Prensa</h2>
          <p className="mt-2 text-zinc-400 font-mono text-xs uppercase tracking-widest">
            Imágenes Promocionales & Live Sets
          </p>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1jq9u3zaHCeVn4YpSjya7drFqus9DqMVM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition-colors"
        >
          Ir al Drive
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid gallery-images-grid">
        {IMAGES.map((img, i) => (
          <div key={img.id} className="relative group overflow-hidden bg-zinc-900 aspect-square gallery-image-item">
            {/* Dark overlay for inactive state */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>

            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ filter: 'grayscale(100%) contrast(125%) brightness(0.75)' }}
            />
            
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex justify-between items-end">
               <span className="text-white font-mono text-xs uppercase">{img.caption}</span>
               <span className="text-[10px] bg-white text-black px-2 py-1 font-bold uppercase tracking-wider">
                 JPG
               </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-between items-center border-t border-zinc-900 pt-3 print:mt-2 print:pt-2">
        <p className="text-zinc-600 text-[10px] font-mono uppercase">
          * Uso autorizado únicamente para prensa y promoción de eventos.
        </p>
      </div>
    </section>
  );
};