import React, { useEffect, useRef, useState } from 'react';
import "./about.css";
import AboutImg from "../../assets/about1.jpg";
import CV from "../../assets/CV_PC.pdf";
import useScrollReveal from '../../hooks/useScrollReveal';

const useCounter = (target, duration = 1500) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(interval); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
};

const About = () => {
  const bentoRef = useScrollReveal();
  const [exp, expRef]   = useCounter(2);
  const [proj, projRef] = useCounter(10);
  const [certs, certsRef] = useCounter(7);

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div ref={bentoRef} className="bento container reveal">

        {/* Photo */}
        <div className="bento__cell bento__photo">
          <img src={AboutImg} alt="Pradeepsinh Chavda" className="bento__img" />
          <div className="bento__photo-overlay">
            <span className="bento__avail-dot"></span>
            <span className="bento__avail-text">Open to work</span>
          </div>
        </div>

        {/* Bio */}
        <div className="bento__cell bento__bio">
          <p className="bento__bio-label">whoami</p>
          <h3 className="bento__bio-name">Pradeepsinh Chavda</h3>
          <p className="bento__bio-role">Full-Stack Developer & Cloud Engineer</p>
          <p className="bento__bio-desc">
            I build scalable web platforms and cloud-native systems — from real-time financial
            dashboards to RAG-based AI assistants. Passionate about clean architecture,
            DevOps automation, and shipping products that actually matter.
          </p>
          <a download href={CV} className="button button--flex bento__cv-btn">
            <i className="bx bx-download"></i> Download CV
          </a>
        </div>

        {/* Stat — Experience */}
        <div ref={expRef} className="bento__cell bento__stat">
          <i className="bx bx-code-alt bento__stat-icon"></i>
          <span className="bento__stat-num">{exp}+</span>
          <span className="bento__stat-label">Years Exp.</span>
        </div>

        {/* Stat — Projects */}
        <div ref={projRef} className="bento__cell bento__stat">
          <i className="bx bx-layer bento__stat-icon"></i>
          <span className="bento__stat-num">{proj}+</span>
          <span className="bento__stat-label">Projects</span>
        </div>

        {/* Stat — Certs */}
        <div ref={certsRef} className="bento__cell bento__stat">
          <i className="bx bxs-badge-check bento__stat-icon"></i>
          <span className="bento__stat-num">{certs}</span>
          <span className="bento__stat-label">Certs</span>
        </div>

        {/* Location */}
        <div className="bento__cell bento__location">
          <i className="bx bx-map-pin bento__loc-icon"></i>
          <div>
            <span className="bento__loc-city">San Francisco, CA</span>
            <span className="bento__loc-country">United States</span>
          </div>
        </div>

        {/* Currently building */}
        <div className="bento__cell bento__building">
          <span className="bento__building-label">
            <span className="bento__pulse"></span> Currently building
          </span>
          <p className="bento__building-text">
            Cloud-native DevOps tooling &amp; AI-powered developer productivity apps
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
