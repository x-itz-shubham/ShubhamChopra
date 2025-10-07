import { useEffect } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <MatrixBackground />
      <ScrollAnimations />
      <Navigation />
      <main className="relative z-10" style={{ paddingTop: '120px' }}>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
