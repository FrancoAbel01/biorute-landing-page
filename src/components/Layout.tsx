import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { LanguageProvider } from "../context/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen flex flex-col">
        {/* Navbar fijo */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Contenido */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer siempre abajo y visible */}
        <footer className="relative z-10">
          <Footer />
        </footer>
      </div>
    </LanguageProvider>
  );
}
