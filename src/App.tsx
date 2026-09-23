import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { MainLayout } from '@/layouts/MainLayout';
import { About } from '@/pages/About';
import { Certificates } from '@/pages/Certificates';
import { Contact } from '@/pages/Contact';
import { Experience } from '@/pages/Experience';
import { Home } from '@/pages/Home';
import { Projects } from '@/pages/Projects';
import { Services } from '@/pages/Services';
import { Skills } from '@/pages/Skills';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <MainLayout>
        <Home />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </MainLayout>
    </>
  );
}
