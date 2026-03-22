"use client";

import Image from "next/image";


import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTop } from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(
          (e.currentTarget as HTMLAnchorElement).getAttribute('href') as string
        );
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    window.addEventListener('mousemove', () => {}); // Dummy to prevent lint error or empty effect
    return () => window.removeEventListener('mousemove', () => {});
  }, []);

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Premium Cursor Effect */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
