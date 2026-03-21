import React from 'react';
import "./skills.css";
import useScrollReveal from '../../hooks/useScrollReveal';

const R = 36;
const CIRC = Math.round(2 * Math.PI * R); // 226

const frontendSkills = [
  { name: 'HTML',       pct: 90 },
  { name: 'CSS',        pct: 85 },
  { name: 'JavaScript', pct: 70 },
  { name: 'React',      pct: 72 },
  { name: 'Bootstrap',  pct: 68 },
  { name: 'Git',        pct: 75 },
];

const backendSkills = [
  { name: 'Java',     pct: 72 },
  { name: 'Python',   pct: 70 },
  { name: 'Node.js',  pct: 65 },
  { name: 'MySQL',    pct: 85 },
  { name: 'Firebase', pct: 68 },
  { name: 'PHP',      pct: 60 },
];

const SkillRing = ({ name, pct }) => {
  const ref = useScrollReveal();
  const offset = Math.round(CIRC - (CIRC * pct) / 100);

  return (
    <div
      ref={ref}
      className="skill-ring reveal"
      style={{ '--offset': offset, '--circ': CIRC }}
    >
      <svg viewBox="0 0 100 100" className="skill-ring__svg">
        {/* Background track */}
        <circle cx="50" cy="50" r={R} className="skill-ring__track" />
        {/* Gradient definition */}
        <defs>
          <linearGradient id={`grad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(243,75%,59%)" />
            <stop offset="100%" stopColor="hsl(268,75%,60%)" />
          </linearGradient>
        </defs>
        {/* Animated fill */}
        <circle
          cx="50" cy="50" r={R}
          className="skill-ring__fill"
          stroke={`url(#grad-${name})`}
        />
        {/* Percentage text */}
        <text x="50" y="55" textAnchor="middle" className="skill-ring__pct">
          {pct}%
        </text>
      </svg>
      <p className="skill-ring__name">{name}</p>
    </div>
  );
};

const SkillGroup = ({ title, icon, skills }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="skills__card reveal">
      <h3 className="skills__card-title">
        <i className={`bx ${icon} skills__card-icon`}></i>
        {title}
      </h3>
      <div className="skills__rings">
        {skills.map(s => <SkillRing key={s.name} {...s} />)}
      </div>
    </div>
  );
};

const Skills = () => (
  <section className="skills section" id="skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My Technical Level</span>
    <div className="skills__container container grid">
      <SkillGroup title="Frontend"  icon="bx-code-alt" skills={frontendSkills} />
      <SkillGroup title="Backend"   icon="bx-server"   skills={backendSkills}  />
    </div>
  </section>
);

export default Skills;
