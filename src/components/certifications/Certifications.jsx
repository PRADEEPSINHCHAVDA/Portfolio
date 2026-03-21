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
    verify: 'https://www.credly.com/earner/earned/badge/7d23fbd5-1c9b-4c6b-b94d-58d8db3502c7',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Foundational',
    issuer: 'Amazon Web Services',
    date: 'Expires Feb 6, 2028',
    badge: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    verify: 'https://www.credly.com/earner/earned/badge/09256b04-4ef7-47c4-b409-f83857364314',
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Cloud Architecting',
    issuer: 'AWS Academy',
    date: 'Issued Dec 8, 2025',
    badge: 'https://images.credly.com/images/fcafd0c9-42da-4703-a191-0c397203dc1b/blob',
    verify: 'https://www.credly.com/earner/earned/badge/df9f3be1-1028-44e6-9bec-e4ae09c1a539',
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Cloud Data Pipeline Builder',
    issuer: 'AWS Academy',
    date: 'Issued Oct 29, 2025',
    badge: 'https://images.credly.com/images/43f26cf1-0b54-41a3-9fa5-3d2f02fa5040/blob',
    verify: 'https://www.credly.com/earner/earned/badge/592e1a1c-1b7c-4aa8-b37d-a6b25e6c98f3',
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Microservices & CI/CD Pipeline',
    issuer: 'AWS Academy',
    date: 'Issued Oct 30, 2025',
    badge: 'https://images.credly.com/images/6ff76b93-852c-4f9e-a73a-fc10424a1007/blob',
    verify: 'https://www.credly.com/earner/earned/badge/9ca6d770-b072-4d09-9943-b2e6c53ce981',
  },
  {
    title: 'AWS Knowledge',
    subtitle: 'Networking Core',
    issuer: 'Amazon Web Services',
    date: 'Issued Nov 7, 2025',
    badge: 'https://images.credly.com/images/e1c202b1-bca1-469a-9149-127b4fe891d7/blob',
    verify: 'https://www.credly.com/earner/earned/badge/751a35aa-239d-4c8d-9d55-2658f9a416c0',
  },
  {
    title: 'Introduction to GitOps',
    subtitle: 'LFS169',
    issuer: 'The Linux Foundation',
    date: 'Issued Oct 4, 2025',
    badge: 'https://images.credly.com/images/032a65da-a036-4d05-ad80-8fc1274363ab/blob',
    verify: 'https://www.credly.com/earner/earned/badge/e304264c-1e91-4087-b0b8-dba253980bd4',
  },
];

const CertCard = ({ title, subtitle, issuer, date, badge, verify }) => {
  const ref = useScrollReveal();
  const isExpiry = date.startsWith('Expires');

  const handleImgError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <div ref={ref} className="cert__card reveal">
      <div className="cert__badge-wrap">
        <img
          src={badge}
          alt={`${title} ${subtitle}`}
          className="cert__badge-img"
          onError={handleImgError}
        />
        <div className="cert__badge-fallback" style={{ display: 'none' }}>
          <i className="bx bxl-aws cert__fallback-icon"></i>
        </div>
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
