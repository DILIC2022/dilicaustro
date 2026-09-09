import Header from "../components/Header";
import Products from "../components/Products";

export default function MarcasPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#0d0705] antialiased relative">
      {/* Barra de navegación superior */}
      <div className="w-full bg-[#0d0705] relative z-50">
        <Header />
      </div>

      {/* Contenido de Marcas */}
      <div className="flex-grow flex flex-col justify-center pt-24 relative z-10">
        <Products />
      </div>
    </main>
  );
}