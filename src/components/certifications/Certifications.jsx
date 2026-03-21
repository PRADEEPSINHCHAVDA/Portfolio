import React from 'react';
import './certifications.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const certs = [
  {
    title: 'AWS Certified Solutions Architect',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    icon: 'bxl-aws',
    color: '#FF9900',
    verify: 'https://aws.amazon.com/certification/',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Foundational',
    issuer: 'Amazon Web Services',
    icon: 'bxl-aws',
    color: '#FF9900',
    verify: 'https://aws.amazon.com/certification/',
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Cloud Data Pipeline Builder',
    issuer: 'AWS Academy',
    icon: 'bxl-aws',
    color: '#FF9900',
    verify: 'https://aws.amazon.com/training/awsacademy/',
  },
];

const CertCard = ({ title, subtitle, issuer, icon, color, verify }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="cert__card reveal">
      <div className="cert__card-left">
        <div className="cert__icon-wrap" style={{ '--cert-color': color }}>
          <i className={`bx ${icon} cert__icon`}></i>
        </div>
      </div>
      <div className="cert__card-body">
        <h3 className="cert__title">{title}</h3>
        <span className="cert__subtitle">{subtitle}</span>
        <p className="cert__issuer">
          <i className="bx bx-building-house"></i> {issuer}
        </p>
      </div>
      <div className="cert__card-right">
        <span className="cert__badge">
          <i className="bx bx-check-shield"></i> Certified
        </span>
        <a href={verify} target="_blank" rel="noreferrer" className="cert__verify">
          Verify <i className="bx bx-link-external"></i>
        </a>
      </div>
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
