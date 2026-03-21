import React, { useState } from 'react';
import './projects.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const categories = ['All', 'Web', 'Mobile', 'Cloud'];

const projectsData = [
  {
    id: 1,
    filename: 'classroom-manager.java',
    title: 'Classroom Manager',
    category: 'Web',
    description: 'A web app to manage students in a class with Spring Boot backend and Angular frontend.',
    tech: ['Angular', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/PRADEEPSINHCHAVDA',
  },
  {
    id: 2,
    filename: 'ecommerce-app.js',
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'Full-stack e-commerce application with product listings, cart, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/PRADEEPSINHCHAVDA',
  },
  {
    id: 3,
    filename: 'cloud-dashboard.py',
    title: 'Cloud Dashboard',
    category: 'Cloud',
    description: 'AWS-based cloud monitoring dashboard with real-time metrics and alerting system.',
    tech: ['AWS', 'Python', 'React'],
    github: 'https://github.com/PRADEEPSINHCHAVDA',
  },
  {
    id: 4,
    filename: 'mobile-app.dart',
    title: 'Flutter Mobile App',
    category: 'Mobile',
    description: 'Cross-platform mobile application built with Flutter for Android and iOS.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/PRADEEPSINHCHAVDA',
  },
  {
    id: 5,
    filename: 'portfolio.jsx',
    title: 'Portfolio Website',
    category: 'Web',
    description: 'Personal portfolio site built with React showcasing skills, experience and projects.',
    tech: ['React', 'CSS3', 'EmailJS'],
    github: 'https://github.com/PRADEEPSINHCHAVDA',
    demo: 'https://pradeepsinh-portfolio.vercel.app/',
  },
];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtersRef = useScrollReveal();

  const filtered = active === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === active);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div ref={filtersRef} className="projects__filters reveal">
        {categories.map(cat => (
          <button
            key={cat}
            className={`projects__filter-btn${active === cat ? ' projects__filter-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects__container container grid">
        {filtered.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  );
};

const ProjectCard = ({ filename, title, description, tech, github, demo }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="terminal reveal">
      {/* Title bar */}
      <div className="terminal__bar">
        <div className="terminal__dots">
          <span className="terminal__dot terminal__dot--red"></span>
          <span className="terminal__dot terminal__dot--yellow"></span>
          <span className="terminal__dot terminal__dot--green"></span>
        </div>
        <span className="terminal__filename">{filename}</span>
      </div>

      {/* Body */}
      <div className="terminal__body">
        <p className="terminal__prompt">
          <span className="terminal__user">pradeep</span>
          <span className="terminal__at">@</span>
          <span className="terminal__host">portfolio</span>
          <span className="terminal__tilde"> ~/projects</span>
          <span className="terminal__dollar"> $</span>
        </p>
        <h3 className="terminal__title">{title}</h3>
        <p className="terminal__desc">{description}</p>

        <div className="terminal__tags">
          {tech.map(t => (
            <span key={t} className="terminal__tag">
              <span className="terminal__hash">#</span>{t}
            </span>
          ))}
        </div>

        <div className="terminal__links">
          <a href={github} target="_blank" rel="noreferrer" className="terminal__link">
            <i className="bx bxl-github"></i> GitHub
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="terminal__link terminal__link--demo">
              <i className="bx bx-link-external"></i> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
