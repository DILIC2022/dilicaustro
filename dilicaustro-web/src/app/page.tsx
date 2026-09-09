import Header from "./components/Header";
import Hero from "./components/Hero";
import NovedadesModal from "./components/NovedadesModal";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#fcfdfd] flex flex-col antialiased selection:bg-orange-500 selection:text-white">

      {/* Ventana emergente de Novedades */}
      <NovedadesModal />

      {/* CONTENEDOR VITRINA: h-screen asegura que ocupe toda la pantalla */}
      <div 
        className="w-full h-screen bg-cover bg-center flex flex-col relative" 
        style={{ backgroundImage: "url('/pagina.jpeg')" }}
      >
        {/* Capa oscura uniforme */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col h-full">
          <Header />
          
          <div className="flex-grow flex flex-col pt-10">
            <Hero />
          </div>
        </div>
      </div>

      {/* BARRA DE BENEFICIOS */}
      <section className="w-full max-w-5xl mx-auto px-40 -mt-20 relative z-30">
        <div className="bg-[#0a1435] text-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 py-5 px-8 rounded-2xl shadow-xl border border-white/5 backdrop-blur-sm">
           {/* ... tus beneficios ... */}
        </div>
      </section>
    </main>
  );
}