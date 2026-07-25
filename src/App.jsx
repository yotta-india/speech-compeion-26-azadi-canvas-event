import React, { useEffect } from 'react';
import Icons from './components/Icons';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Format from './components/Format';
import Rewards from './components/Rewards';
import Rules from './components/Rules';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegisterBand from './components/RegisterBand';

function App() {
  useEffect(() => {
    // Theme toggle script
    const themeToggle = document.getElementById('themeToggle');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('navLinks');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
            localStorage.setItem('acv-theme', isDark ? 'light' : 'dark');
        });
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('open');
        });
        
        // close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
            });
        });
    }
  }, []);

  return (
    <>
      <Icons />
      <Header />
      <main>
          <Hero />
          <About />
          <Timeline />
          <Format />
          <Rewards />
          <Rules />
          <RegisterBand />
          <FAQ />
          <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
