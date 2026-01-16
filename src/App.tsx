import Navigation from "./components/Navigation";
import About from "./components/About";
import Info from "./components/Info";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";

import Idea from "./components/Idea";
import HeroTextOverlay from "./components/HeroTextOverlay";

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Navigation />

        {/* Imagen del hero fija */}
        <Hero />

        {/* Texto del hero (se desliza con scroll) */}
        <div className="relative z-10 h-[100svh]">
          <HeroTextOverlay />
        </div>

        {/* Contenido */}
        <main className="relative z-10">
          <Idea />
          <About />
          <Info />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
