export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex items-center justify-center">
        
        {/* Menú para computadoras y laptops (Centrado perfecto y responsivo) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <nav className="flex items-center gap-4 lg:gap-8 text-xs lg:text-sm font-semibold uppercase tracking-wider text-white whitespace-nowrap">
            <a href="/" className="hover:text-orange-500 transition-colors">
              Inicio
            </a>
            <a href="/nosotros" className="hover:text-orange-500 transition-colors">Nosotros</a>
            <a 
              href="/catalogo.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              Catálogo
            </a>
            <a href="/marcas" className="hover:text-orange-500 transition-colors">Marcas</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contacto</a>
          </nav>

          <a
            href="https://wa.me/593962527347?text=Hola%20DILICAUSTRO,%20quisiera%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#f05a24] hover:bg-orange-600 text-white px-3.5 py-2 rounded-lg text-xs lg:text-sm font-bold uppercase tracking-wider shadow-sm transition-all whitespace-nowrap"
          >
            WhatsApp
          </a>
        </div>

        {/* MENÚ MÓVIL NATIVO CON CHECKBOX */}
        <div className="md:hidden relative w-full flex justify-end">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          
          <label 
            htmlFor="menu-toggle" 
            className="text-white p-2.5 block bg-black/80 rounded-md border border-white/30 cursor-pointer select-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <div className="hidden peer-checked:flex fixed inset-0 top-0 left-0 w-full h-screen bg-black/98 backdrop-blur-lg pt-20 px-6 pb-10 flex-col justify-center items-center gap-6 text-center shadow-2xl z-[999]">
            
            <label htmlFor="menu-toggle" className="absolute top-6 right-6 text-white text-3xl p-2 cursor-pointer">
              ✕
            </label>

            <a href="/" className="text-white hover:text-orange-500 text-xl font-semibold uppercase tracking-wider py-2">
              Inicio
            </a>
            <a href="/nosotros" className="text-white hover:text-orange-500 text-xl font-semibold uppercase tracking-wider py-2">
              Nosotros
            </a>
            <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 text-xl font-semibold uppercase tracking-wider py-2">
              Catálogo
            </a>
            <a href="/marcas" className="text-white hover:text-orange-500 text-xl font-semibold uppercase tracking-wider py-2">
              Marcas
            </a>
            <a href="#" className="text-white hover:text-orange-500 text-xl font-semibold uppercase tracking-wider py-2">
              Contacto
            </a>
            <a
              href="https://wa.me/593962527347?text=Hola%20DILICAUSTRO,%20quisiera%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-[#f05a24] text-white px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wider shadow-md"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}