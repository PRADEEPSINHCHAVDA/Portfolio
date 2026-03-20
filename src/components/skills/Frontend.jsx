import React from 'react'

const skills = [
  { name: 'HTML',       level: 'Advanced',      pct: 90 },
  { name: 'CSS',        level: 'Advanced',      pct: 85 },
  { name: 'JavaScript', level: 'Intermediate',  pct: 70 },
  { name: 'React',      level: 'Intermediate',  pct: 72 },
  { name: 'Bootstrap',  level: 'Intermediate',  pct: 68 },
  { name: 'Git',        level: 'Intermediate',  pct: 75 },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <i className="bx bx-code-alt skills__title-icon"></i>
        Frontend
      </h3>
      <div className="skills__list">
        {skills.map(({ name, level, pct }) => (
          <div className="skills__item" key={name}>
            <div className="skills__item-header">
              <span className="skills__name">{name}</span>
              <span className="skills__level">{level} — {pct}%</span>
            </div>
            <div className="skills__bar-track">
              <div
                className="skills__bar-fill"
                style={{ '--skill-pct': `${pct}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Frontend
