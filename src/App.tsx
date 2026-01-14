import Navigation from './components/Navigation';

import About from './components/About';
import Info from './components/Info';


import Footer from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';
import Idea from './components/Idea';
import Hero from './components/Hero';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Idea />
        <About />
        <Info />       
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;





