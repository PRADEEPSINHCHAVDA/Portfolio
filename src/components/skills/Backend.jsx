import React from 'react'

const skills = [
  { name: 'Java',     level: 'Intermediate', pct: 72 },
  { name: 'Python',   level: 'Intermediate', pct: 70 },
  { name: 'Node.js',  level: 'Intermediate', pct: 65 },
  { name: 'MySQL',    level: 'Advanced',     pct: 85 },
  { name: 'Firebase', level: 'Intermediate', pct: 68 },
  { name: 'PHP',      level: 'Intermediate', pct: 60 },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <i className="bx bx-server skills__title-icon"></i>
        Backend
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

export default Backend
