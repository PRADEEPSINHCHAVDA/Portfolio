import './App.css';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/header/Header';
import Home from './home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Certifications from './components/certifications/Certifications';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import WaveDivider from './components/WaveDivider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Header />
      <main className='main'>
        <Home />
        <WaveDivider fill="var(--container-color)" />
        <About />
        <WaveDivider fill="var(--body-color)" bg="var(--container-color)" />
        <Skills />
        <WaveDivider fill="var(--container-color)" />
        <Certifications />
        <WaveDivider fill="var(--body-color)" bg="var(--container-color)" />
        <Qualification />
        <WaveDivider fill="var(--body-color)" bg="var(--container-color)" />
        <Projects />
        <WaveDivider fill="var(--container-color)" />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
