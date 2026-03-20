import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import useScrollReveal from '../../hooks/useScrollReveal';

const Skills = () => {
  const frontRef = useScrollReveal();
  const backRef  = useScrollReveal();

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <div ref={frontRef} className="reveal reveal-left">
          <Frontend />
        </div>
        <div ref={backRef} className="reveal reveal-right">
          <Backend />
        </div>
      </div>
    </section>
  )
}

export default Skills
