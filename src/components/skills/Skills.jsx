import React from 'react';
import "./skills.css";
import useScrollReveal from '../../hooks/useScrollReveal';

const skillGroups = [
  {
    category: 'Languages',
    icon: 'bx-code',
    skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'Bash'],
  },
  {
    category: 'Frontend',
    icon: 'bx-palette',
    skills: ['React.js', 'Next.js 15', 'Redux', 'React Query', 'Tailwind CSS', 'SSR/SSG', 'Jest', 'Cypress', 'Code Splitting', 'Lazy Loading'],
  },
  {
    category: 'Backend & Systems',
    icon: 'bx-server',
    skills: ['FastAPI', 'Django REST Framework', 'Node.js', 'gRPC', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Databases & Storage',
    icon: 'bx-data',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'bx-cloud',
    skills: ['AWS (Lambda, EC2, S3, SQS)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD'],
  },
  {
    category: 'AI Integration',
    icon: 'bx-brain',
    skills: ['LangChain', 'RAG Pipelines', 'OpenAI GPT-4', 'Vector Databases (ChromaDB)'],
  },
];

const SkillGroup = ({ category, icon, skills }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="skills__group reveal">
      <div className="skills__group-header">
        <i className={`bx ${icon} skills__group-icon`}></i>
        <h3 className="skills__group-title">{category}</h3>
      </div>
      <div className="skills__tags">
        {skills.map(skill => (
          <span key={skill} className="skills__tag">{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => (
  <section className="skills section" id="skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">Technologies I Work With</span>
    <div className="skills__container container">
      {skillGroups.map(g => <SkillGroup key={g.category} {...g} />)}
    </div>
  </section>
);

export default Skills;
