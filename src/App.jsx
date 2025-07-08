import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CascudoSection from './components/CascudoSection';
import EnergiaSalgadaSection from './components/EnergiaSalgadaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <CascudoSection />
        <EnergiaSalgadaSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

