import React from 'react';
import './certifications.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const certs = [
  {
    title: 'AWS Certified Solutions Architect',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    date: 'Expires Feb 6, 2028',
    badge: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    verify: 'https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Foundational',
    issuer: 'Amazon Web Services',
    date: 'Expires Feb 6, 2028',
    badge: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    verify: 'https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner',
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Cloud Architecting',
    issuer: 'AWS Academy',
    date: 'Issued Dec 8, 2025',
    badge: 'https://images.credly.com/size/340x340/images/519a6dfe-f0e3-4b99-ba6b-bfe6c6b1b5ae/image.png',
    verify: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-architecting',
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Cloud Data Pipeline Builder',
    issuer: 'AWS Academy',
    date: 'Issued Oct 29, 2025',
    badge: 'https://images.credly.com/size/340x340/images/44994cda-b9b4-48d0-b38e-537a74ab6f83/image.png',
    verify: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-data-pipeline-builder',
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Microservices & CI/CD Pipeline',
    issuer: 'AWS Academy',
    date: 'Issued Oct 30, 2025',
    badge: 'https://images.credly.com/size/340x340/images/0a6d331e-8abf-4272-a949-33f754569a76/image.png',
    verify: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-microservices-and-ci-cd-pipeline-builder',
  },
  {
    title: 'AWS Knowledge',
    subtitle: 'Networking Core',
    issuer: 'Amazon Web Services',
    date: 'Issued Nov 7, 2025',
    badge: 'https://images.credly.com/size/340x340/images/e75f222d-959a-496d-8f60-7d714d4ce977/image.png',
    verify: 'https://www.credly.com/org/amazon-web-services/badge/aws-knowledge-networking-core',
  },
  {
    title: 'Introduction to GitOps',
    subtitle: 'LFS169',
    issuer: 'The Linux Foundation',
    date: 'Issued Oct 4, 2025',
    badge: 'https://images.credly.com/size/340x340/images/acb4f091-8a7a-4c3f-8e65-78c79b7aa3e6/image.png',
    verify: 'https://www.credly.com/org/the-linux-foundation/badge/lfs169-introduction-to-gitops',
  },
];

const CertCard = ({ title, subtitle, issuer, date, badge, verify }) => {
  const ref = useScrollReveal();
  const isExpiry = date.startsWith('Expires');

  return (
    <div ref={ref} className="cert__card reveal">
      <div className="cert__badge-wrap">
        <img src={badge} alt={`${title} ${subtitle}`} className="cert__badge-img" />
      </div>
      <div className="cert__info">
        <h3 className="cert__title">{title}</h3>
        <span className="cert__subtitle">{subtitle}</span>
        <p className="cert__issuer">
          <i className="bx bx-buildings"></i> {issuer}
        </p>
        <p className={`cert__date ${isExpiry ? 'cert__date--expiry' : ''}`}>
          <i className={`bx ${isExpiry ? 'bx-time' : 'bx-calendar-check'}`}></i> {date}
        </p>
      </div>
      <a href={verify} target="_blank" rel="noreferrer" className="cert__verify-btn">
        <i className="bx bx-check-shield"></i> Verify
      </a>
    </div>
  );
};

const Certifications = () => (
  <section className="certifications section" id="certifications">
    <h2 className="section__title">Certifications</h2>
    <span className="section__subtitle">Verified Credentials</span>
    <div className="certifications__container container">
      {certs.map(c => <CertCard key={c.title + c.subtitle} {...c} />)}
    </div>
  </section>
);

export default Certifications;
