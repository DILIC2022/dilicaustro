import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilicaustro",
  description: "Distribuidora de licores del Austro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0d0705] m-0 p-0 overflow-x-hidden flex flex-col min-h-screen`}>
        {/* Contenido principal que cambia según la página */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* Pie de página corporativo fijo para todas las hojas */}
        <footer className="w-full bg-[#080403] border-t border-amber-900/30 py-8 px-4 text-center text-amber-100/80">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 text-sm">
            <div>
              <p className="font-semibold text-orange-500 mb-1 uppercase tracking-wider">Dirección</p>
              <p>Cuenca, Calle Guayas 8-57 y Amazonas</p>
            </div>
            <div>
              <p className="font-semibold text-orange-500 mb-1 uppercase tracking-wider">Contacto / WhatsApp</p>
              <p>+593 9965433476</p>
            </div>
            <div>
              <p className="font-semibold text-orange-500 mb-1 uppercase tracking-wider">Correo Electrónico</p>
              <p>info@dilicaustro.com</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}