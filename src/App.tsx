import Navigation from "./components/Navigation";
import SolutionSection from "./components/SolutionSection";
import ProductPresentation from "./components/ProductPresentation";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";

import ChileanAgroExportChallenge from "./components/ChileanAgroExportChallenge";
import HeroTextOverlay from "./components/HeroTextOverlay";

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Navigation />

      
        <Hero />

      
        <div className="relative z-10 h-[100svh]">
          <HeroTextOverlay />
        </div>

     
        <main className="relative z-10">
          <ChileanAgroExportChallenge />
          <SolutionSection />
          <ProductPresentation />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
