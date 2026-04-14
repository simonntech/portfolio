import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App(){
  return (
    <div className='bg-slate-900 text-slate-100 min-h-screen font-sans'>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
      </main>
      
      <Contact />

      <Footer />
    </div>
  );
};

export default App;