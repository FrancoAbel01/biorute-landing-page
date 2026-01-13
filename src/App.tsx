import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Info from './components/Info';
import Financing from './components/Financing';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Info />
       {/*  <Financing />
        <Ecosystem /> */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
