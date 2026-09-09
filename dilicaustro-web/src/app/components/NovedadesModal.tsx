"use client";
import { useState, useEffect } from "react";

export default function NovedadesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

  useEffect(() => {
    // Al quitar el localStorage, aparecerá siempre que recargues la página
    setIsOpen(true);
  }, []);

  const handleMenorEdad = () => {
    setBloqueado(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-zinc-900 border-2 border-orange-500/40 rounded-3xl p-6 md:p-8 text-white text-center shadow-2xl my-auto">
        
        {!bloqueado ? (
          <>
            <div className="inline-block bg-orange-500/10 text-orange-500 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 border border-orange-500/20">
              Restricción de Edad
            </div>

            <h3 className="text-2xl md:text-3xl font-black mb-2">¿Eres mayor de 18 años?</h3>
            <p className="text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
              Este sitio web contiene contenido y distribución exclusiva para mayores de edad. Por favor, confirma tu edad para ingresar.
            </p>

            <div className="space-y-3">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Sí, soy mayor de 18 años
              </button>
              
              <button 
                onClick={handleMenorEdad}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold py-3.5 rounded-2xl transition-all active:scale-95 cursor-pointer"
              >
                No, soy menor de edad
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-red-500 text-4xl md:text-5xl mb-3">⚠️</div>
            <h3 className="text-xl md:text-2xl font-black mb-2 text-red-400">Acceso Denegado</h3>
            <p className="text-zinc-400 text-xs md:text-sm mb-4">
              Lo sentimos, debes ser mayor de edad para ingresar a este sitio web de distribución de licores.
            </p>
          </>
        )}

      </div>
    </div>
  );
}