import Header from "../components/Header";
import Image from "next/image";

export default function nosotrosPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#0d0705] antialiased">
      {/* Barra de navegación superior */}
      <div className="w-full bg-[#0d0705] relative z-50">
        <Header />
      </div>

      {/* Vista para Computadoras (Escritorio) */}
      <section className="w-full relative flex-grow py-4 px-2 hidden md:flex items-center justify-center" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="relative w-full h-full max-w-[110rem] aspect-[16/9]">
          <Image
            src="/pagina22.png"
            alt="DILICAUSTRO CIA. LTDA. Misión y Visión"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </section>

      {/* Vista para Teléfonos (Móviles - Solo Misión y Visión, sin sello y alejada) */}
      <section className="w-full relative flex-grow py-4 px-4 flex md:hidden items-center justify-center" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="relative w-full max-w-sm aspect-[4/5] mx-auto overflow-hidden">
          <Image
            src="/pagina22.png" 
            alt="DILICAUSTRO CIA. LTDA. Misión y Visión Móvil"
            fill
            className="object-cover object-[82%_center]" 
            priority
          />
        </div>
      </section>
    </main>
  );
}