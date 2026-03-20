import React, { useState, useEffect } from 'react'
import "./header.css";

const sections = ['home', 'about', 'skills', 'qualification', 'projects', 'contact'];

const Header = () => {
  // ── Scroll-shadow ──
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Scroll-based active nav ──
  const [activeNav, setActiveNav] = useState("#home");
  useEffect(() => {
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveNav(`#${id}`); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  // ── Dark mode ──
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // ── Mobile menu ──
  const [Toggle, showMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="#home" className='nav__logo'>Pradeepsinh</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            {[
              { href: '#home',          icon: 'uil-estate',        label: 'Home' },
              { href: '#about',         icon: 'uil-user',          label: 'About' },
              { href: '#skills',        icon: 'uil-file-alt',      label: 'Skills' },
              { href: '#qualification', icon: 'uil-scenery',       label: 'Journey' },
              { href: '#projects',      icon: 'uil-briefcase-alt', label: 'Projects' },
              { href: '#contact',       icon: 'uil-message',       label: 'Contact' },
            ].map(({ href, icon, label }) => (
              <li className='nav__item' key={href}>
                <a
                  href={href}
                  onClick={() => { setActiveNav(href); showMenu(false); }}
                  className={activeNav === href ? "nav__link active-link" : "nav__link"}
                >
                  <i className={`uil ${icon} nav__icon`}></i>{label}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        <div className="nav__actions">
          {/* Dark mode toggle */}
          <button
            className="nav__theme-toggle"
            onClick={() => setDarkMode(d => !d)}
            aria-label="Toggle dark mode"
          >
            <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
          </button>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
