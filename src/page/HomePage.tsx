import Hero from "../components/Hero";
import HeroTextOverlay from "../components/HeroTextOverlay";
import ChileanAgroExportChallenge from "../components/ChileanAgroExportChallenge";
import SolutionSection from "../components/SolutionSection";
import ProductPresentation from "../components/ProductPresentation";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Hero />
        <div className="relative z-10 h-[100svh]">
          <HeroTextOverlay />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <ChileanAgroExportChallenge />
        <SolutionSection />
        <ProductPresentation />
      </div>
    </>
  );
}

 