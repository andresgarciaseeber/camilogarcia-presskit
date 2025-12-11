import React from 'react';

export const Rider: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">Rider Técnico</h2>
        <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
          Requerimientos para presentaciones en vivo
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Requirements */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Equipamiento Técnico
            </h3>
            <div className="space-y-4">
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Setup Técnico</p>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• Mixer: Pioneer DJM-900NXS2 o superior</li>
                  <li>• CDJs: 2x Pioneer CDJ-3000 NX o CDJ-3000 o CDJ-2000NXS2</li>
                  <li>• Monitores de escenario de calidad profesional</li>
                  <li>• Iluminación programable sincronizada</li>
                  <li>• Pantallas background LEDs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Hospitality */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Hospitalidad
            </h3>
            <div className="space-y-4">
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Backstage</p>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• Backstage privado para el artista y 2 personas adicionales</li>
                  <li>• Toallas limpias y amenities básicos</li>
                  <li>• Acceso a WiFi de alta velocidad</li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Catering</p>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• 6 botellas de agua mineral (sin gas)</li>
                  <li>• Frutas frescas de estación</li>
                  <li>• Café y té</li>
                  <li>• Canasta de frutas secas</li>
                  <li>• 3 energizantes</li>
                  <li>• 3 cervezas</li>
                  <li>• 3 gaseosas Coca Cola Zero + Fernet Branca</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-900">
        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
          * Este rider es orientativo. Los detalles finales se acordarán según las características del evento.
        </p>
      </div>
    </section>
  );
};
