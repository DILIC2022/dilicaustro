export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-between bg-black py-8">
      
      {/* 
        - En celulares: usa un zoom horizontal (bg-[length:170%_100%]) para enfocar la parte central.
        - En computadoras (md:): se mantiene exactamente igual a como lo tenías (contain).
      */}
      <div
        className="absolute inset-0 z-0 bg-[url('/pagina.jpeg')] bg-no-repeat bg-[length:170%_100%] bg-center md:bg-[length:contain] md:bg-center"
      />
      
      {/* Espaciador superior */}
      <div className="w-full h-12 z-10"></div>

      {/* Botones en su posición elevada */}
      <div className="w-full absolute bottom-28 left-0 right-0 z-10 flex justify-center px-4">
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          <a
            href="/catalogo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f05a24] hover:bg-orange-600 text-white font-bold text-base md:text-xl uppercase tracking-wider px-6 py-3 md:px-10 md:py-5 rounded-sm shadow-lg transition-all"
          >
            Ver Catálogo
          </a>
          <a 
            href="https://wa.me/593962527347?text=Hola%20DILICAUSTRO,%20quisiera%20información." 
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/60 bg-black/60 hover:bg-white/20 text-white font-bold text-base md:text-xl uppercase tracking-wider px-6 py-3 md:px-10 md:py-5 rounded-sm transition-all shadow-lg"
          >
            Contactos
          </a>
        </div>
      </div>
      
    </section>
  );
}