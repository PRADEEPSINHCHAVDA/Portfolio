import React, { useState } from 'react';
import './projects.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const categories = ['All', 'Web', 'AI', 'Cloud'];

const projectsData = [
  {
    id: 1,
    filename: 'insidetracker.py',
    title: 'InsideTracker',
    category: 'Web',
    description:
      "Real-time financial data platform with 15s refresh cycles, WebSocket sync, and distributed workers for 109+ companies' SEC filings.",
    tech: ['FastAPI', 'React', 'Redis', 'Celery', 'PostgreSQL'],
    github: 'https://github.com/PRADEEPSINHCHAVDA/InsideTracker',
  },
  {
    id: 2,
    filename: 'debugr.tsx',
    title: 'Debugr',
    category: 'AI',
    description:
      'RAG-based DevOps assistant — 500+ pages indexed, 30% retrieval gain, 65% prompt precision boost at under 2s p99.',
    tech: ['LangChain', 'ChromaDB', 'FastAPI', 'AWS Lambda', 'React'],
    github: 'https://github.com/PRADEEPSINHCHAVDA/Debugr',
  },
  {
    id: 3,
    filename: 'cloud-infra-pipeline.tf',
    title: 'Cloud Infra Automation',
    category: 'Cloud',
    description:
      'GitOps pipeline for multi-env AWS infra (VPC, EKS, RDS) with Terraform, OIDC auth, and Checkov — 85% fewer deploy errors.',
    tech: ['Terraform', 'AWS EKS', 'GitHub Actions', 'Checkov', 'Datadog'],
    github: 'https://github.com/PRADEEPSINHCHAVDA/cloud-infra-automation-pipeline',
  },
  {
    id: 4,
    filename: 'log-analytics.py',
    title: 'Intelligent Log Analytics',
    category: 'Cloud',
    description:
      'Kafka → Lambda → OpenSearch pipeline for 2GB+ daily logs — 52% faster debugging, 73% cost reduction across 8 microservices.',
    tech: ['Apache Kafka', 'AWS Lambda', 'OpenSearch', 'Python', 'CloudWatch'],
    github: 'https://github.com/PRADEEPSINHCHAVDA/intelligent-log-analytics',
  },
  {
    id: 5,
    filename: 'azure-voting.yaml',
    title: 'Azure Voting Microservices',
    category: 'Cloud',
    description:
      'Cloud-native voting app deployed on AKS with containerized microservices and automated CI/CD pipelines.',
    tech: ['Azure', 'Kubernetes', 'Docker', 'AKS'],
    github: 'https://github.com/PRADEEPSINHCHAVDA/azure-voting-microservices',
  },
  {
    id: 6,
    filename: 'edge-cloud.tf',
    title: 'Edge-to-Cloud Infrastructure',
    category: 'Cloud',
    description:
      'End-to-end IaC bridging edge and cloud for seamless distributed data flow and processing.',
    tech: ['Terraform', 'AWS', 'Edge Computing', 'IaC'],
    github: 'https://github.com/PRADEEPSINHCHAVDA/Edge-to-Cloud-Infrastructure',
  },
];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtersRef = useScrollReveal();

  const filtered =
    active === 'All'
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
        {filtered.map(p => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ filename, title, description, tech, github, demo }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="terminal reveal">
      <div className="terminal__bar">
        <div className="terminal__dots">
          <span className="terminal__dot terminal__dot--red"></span>
          <span className="terminal__dot terminal__dot--yellow"></span>
          <span className="terminal__dot terminal__dot--green"></span>
        </div>
        <span className="terminal__filename">{filename}</span>
      </div>

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
              <span className="terminal__hash">#</span>
              {t}
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