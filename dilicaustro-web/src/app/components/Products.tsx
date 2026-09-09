"use client";

export default function Products() {
  const brands = [
    { name: "John Morris", image: "/MORRIS.png" },
    { name: "Azteca Tequila", image: "/AZTECA.png" },
    { name: "Tribute Gin", image: "/TRIBUTE.png" },
    { name: "Baldore Liqueur", image: "/BALDORE.jpg" },
    { name: "grafandina", image: "/grafandina.png" },
    { name: "Licores", image: "" }, 
    { name: "EPB", image: "EPB.webp" },
    { name: "Bebidas", image: "" },
    { name: "Espumantes", image: "" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-16 w-full flex-1 flex flex-col justify-center">
      
      {/* Título de la Sección Elegante */}
      <div className="text-center mb-10 space-y-1">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-4 bg-orange-500"></span>
          <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">
            Portafolio Exclusivo
          </span>
          <span className="h-[1px] w-4 bg-orange-500"></span>
        </div>
        <h2 className="text-2xl font-black text-[#11224d] tracking-tight">
          Nuestras Marcas Distribuidas
        </h2>
      </div>

      {/* Cuadrícula Minimalista */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {brands.map((brand) => (
          <div 
            key={brand.name} 
            className="group bg-white h-40 rounded-2xl border border-gray-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center p-6 transition-all duration-300 hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-orange-500/20 cursor-pointer relative overflow-hidden"
          >
            {/* Efecto de brillo de fondo al pasar el mouse */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="h-full w-full flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
              {brand.image ? (
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                /* Marcador temporal minimalista (sin la caja gris de antes) */
                <div className="flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-xl opacity-40 group-hover:animate-pulse">🍾</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-orange-500 transition-colors">
                    {brand.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}