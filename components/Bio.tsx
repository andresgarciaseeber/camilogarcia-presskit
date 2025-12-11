import React from 'react';

export const Bio: React.FC = () => {
  return (
    <section className="min-h-screen py-16 px-6 max-w-4xl mx-auto border-t border-zinc-900 print:py-12">
      <div className="space-y-8 print:space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">Biografía</h2>
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
            DJ & Productor — Buenos Aires, 1971
          </p>
        </div>

        {/* Main Bio Text */}
        <div className="space-y-5 text-zinc-200 font-light text-lg leading-relaxed print:space-y-4">
          <p>
            <strong className="text-white font-normal">Camilo García</strong> es un DJ y productor argentino con más de una década de trayectoria en la escena electrónica.
            Su sonido fusiona el <span className="text-white">indie dance</span> con el <span className="text-white">house progresivo</span>, el <span className="text-white">techno</span> y el <span className="text-white">house melódico</span> con algunos elementos del <span className="text-white">synth-wave</span>.
            Sus atmósferas intrigantes y envolventes lo ha llevado a ser escuchado en más de <span className="text-white">89 países</span> según datos de Spotify y Soundcloud.
          </p>

          <p>
            Con lanzamientos en sellos como <span className="text-white">Universal Music</span>, <span className="text-white">De Konstrut</span> y <span className="text-white">Oxytech</span>, entre otros.
          </p>

          <p>
            Camilo García ha tenido una extensa trayectoria como <span className="text-white">periodista de radio y TV</span>.
            Sin embargo en los últimos 12 años ha consolidado una presencia de sostenido crecimiento dentro de la industria musical.
            Su rebeldía creativa para volverse inclasificable, la combina con una gran técnica a la hora de ejecutar un set al que suele agregarle <span className="text-white">sintetizadores en vivo</span>.
          </p>

          <p>
            Algunos de sus tracks han recibido el support de artistas como <span className="text-white">Øostil</span>, <span className="text-white">Kevin Di Serna</span> o <span className="text-white">Mariano Mellino</span> por citar algunos.
          </p>

          <blockquote className="border-l-2 border-indigo-500 pl-6 py-2 my-4 text-zinc-300 italic text-base">
            "Bailar es como reírse con el cuerpo"
          </blockquote>
        </div>

        {/* Info Grid + Support Combined */}
        <div className="pt-6 border-t border-zinc-800 space-y-6 print:pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="block text-zinc-400 text-[10px] uppercase tracking-widest mb-2">Origen</span>
              <span className="text-white font-mono text-sm">Buenos Aires, 1971</span>
            </div>
            <div>
              <span className="block text-zinc-400 text-[10px] uppercase tracking-widest mb-2">Estilos</span>
              <span className="text-white font-mono text-sm">Indie Dance, Progressive House, Melodic Techno</span>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">Support de Artistas</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded text-sm text-zinc-300">Øostil</span>
              <span className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded text-sm text-zinc-300">Kevin Di Serna</span>
              <span className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded text-sm text-zinc-300">Mariano Mellino</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};