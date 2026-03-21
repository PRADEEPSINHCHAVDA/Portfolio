import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const words = ['Developer', 'Engineer', 'Builder', 'Creator', 'Architect', 'Innovator', 'Problem Solver', 'Full-Stack'];

const LoadingScreen = () => {
  const [hiding, setHiding]   = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [flip, setFlip]       = useState(false);

  useEffect(() => {
    // Subtitle line appears after name
    const subTimer = setTimeout(() => setShowSub(true), 400);

    // Word cycling starts shortly after subtitle
    let interval;
    const cycleTimer = setTimeout(() => {
      interval = setInterval(() => {
        setFlip(true);
        setTimeout(() => {
          setWordIdx(i => (i + 1) % words.length);
          setFlip(false);
        }, 80);
      }, 170);
    }, 600);

    // Fade out
    const hideTimer = setTimeout(() => setHiding(true), 1500);

    return () => {
      clearTimeout(subTimer);
      clearTimeout(cycleTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`loader${hiding ? ' loader--hide' : ''}`}>
      <div className="loader__content">
        <h1 className="loader__name">Pradeepsinh Chavda</h1>

        <div className={`loader__sub${showSub ? ' loader__sub--visible' : ''}`}>
          <span className="loader__title">Software Engineer</span>
          <span className="loader__sep">·</span>
          <span className={`loader__word${flip ? ' loader__word--flip' : ''}`}>
            {words[wordIdx]}
          </span>
        </div>

        <div className={`loader__bar-wrap${showSub ? ' loader__bar-wrap--visible' : ''}`}>
          <div className="loader__bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
