import React, { useState } from 'react';
import './projects.css';
import useScrollReveal from '../../hooks/useScrollReveal';

import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';
import Work5 from '../../assets/work5.jpg';

const categories = ['All', 'Web', 'Mobile', 'Cloud'];

const projectsData = [
  {
    id: 1,
    img: Work1,
    title: 'Classroom Manager',
    category: 'Web',
    description: 'A web app to manage students in a class built with Spring Boot backend and Angular frontend.',
    github: 'https://github.com/PRADEEPSINHCHAVDA',
    demo: '',
  },
  {
    id: 2,
    img: Work2,
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'Full-stack e-commerce application with product listings, cart, and payment integration.',
    github: 'https://github.com/PRADEEPSINHCHAVDA',
    demo: '',
  },
  {
    id: 3,
    img: Work3,
    title: 'Cloud Dashboard',
    category: 'Cloud',
    description: 'AWS-based cloud monitoring dashboard with real-time metrics and alerting system.',
    github: 'https://github.com/PRADEEPSINHCHAVDA',
    demo: '',
  },
  {
    id: 4,
    img: Work4,
    title: 'Flutter Mobile App',
    category: 'Mobile',
    description: 'Cross-platform mobile application built with Flutter for Android and iOS.',
    github: 'https://github.com/PRADEEPSINHCHAVDA',
    demo: '',
  },
  {
    id: 5,
    img: Work5,
    title: 'Portfolio Website',
    category: 'Web',
    description: 'Personal portfolio site built with React showcasing skills, experience and projects.',
    github: 'https://github.com/PRADEEPSINHCHAVDA',
    demo: 'https://pradeepsinh-portfolio.vercel.app/',
  },
];

const Projects = () => {
  const [active, setActive] = useState('All');
  const titleRef = useScrollReveal();

  const filtered = active === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === active);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most Recent Work</span>

      {/* Filter tabs */}
      <div ref={titleRef} className="projects__filters reveal">
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

      {/* Cards grid */}
      <div className="projects__container container grid">
        {filtered.map(({ id, img, title, description, github, demo }) => (
          <ProjectCard key={id} img={img} title={title} description={description} github={github} demo={demo} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ img, title, description, github, demo }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="projects__card reveal">
      <div className="projects__card-img-wrap">
        <img src={img} alt={title} className="projects__card-img" />
        <div className="projects__card-overlay">
          <div className="projects__card-links">
            <a href={github} target="_blank" rel="noreferrer" className="projects__card-link" title="GitHub">
              <i className="bx bxl-github"></i>
            </a>
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="projects__card-link" title="Live Demo">
                <i className="bx bx-link-external"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="projects__card-body">
        <h3 className="projects__card-title">{title}</h3>
        <p className="projects__card-desc">{description}</p>
        <a href={github} target="_blank" rel="noreferrer" className="projects__card-btn button button--flex">
          GitHub Repository <i className="bx bx-right-arrow-alt button__icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Projects;
