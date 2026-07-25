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
    const root = document.documentElement;

    function reflectTheme(){
      if(!themeToggle) return;
      var isDark = root.getAttribute("data-theme") === "dark";
      themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    if (themeToggle) {
        reflectTheme();
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
            try { localStorage.setItem('acv-theme', isDark ? 'light' : 'dark'); } catch(e){}
            reflectTheme();
        });
    }

    if(window.matchMedia){
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e){
        var hasManualChoice;
        try{ hasManualChoice = !!localStorage.getItem("acv-theme"); }catch(err){ hasManualChoice = false; }
        if(!hasManualChoice){
          root.setAttribute("data-theme", e.matches ? "dark" : "light");
          reflectTheme();
        }
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

    /* ---- FAQ accordion ---- */
    document.querySelectorAll(".faq-item").forEach(function(item){
      var btn = item.querySelector(".faq-q");
      var panel = item.querySelector(".faq-a");
      var inner = item.querySelector(".faq-a-inner");
      if(btn && panel && inner) {
        btn.addEventListener("click", function(){
          var isOpen = item.getAttribute("aria-expanded") === "true";
    
          /* close any other open item for a clean single-open accordion */
          document.querySelectorAll(".faq-item").forEach(function(other){
            if(other !== item){
              other.setAttribute("aria-expanded","false");
              var otherPanel = other.querySelector(".faq-a");
              if(otherPanel) otherPanel.style.maxHeight = null;
            }
          });
    
          if(isOpen){
            item.setAttribute("aria-expanded","false");
            panel.style.maxHeight = null;
          }else{
            item.setAttribute("aria-expanded","true");
            panel.style.maxHeight = inner.offsetHeight + 24 + "px";
          }
        });
      }
    });

    /* ---- gentle scroll-reveal for sections ---- */
    var revealEls = document.querySelectorAll(".reveal");
    if("IntersectionObserver" in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function(el){ io.observe(el); });
    }else{
      revealEls.forEach(function(el){ el.classList.add("is-visible"); });
    }

    /* ---- scroll-spy: highlight the nav link for the section in view ---- */
    var spySections = document.querySelectorAll("section[id]");
    var spyLinks = document.querySelectorAll(".nav-links a[href^='#']");
    if("IntersectionObserver" in window && spySections.length){
      var spy = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            var id = entry.target.getAttribute("id");
            spyLinks.forEach(function(a){
              a.classList.toggle("active", a.getAttribute("href") === "#" + id);
            });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      spySections.forEach(function(s){ spy.observe(s); });
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
