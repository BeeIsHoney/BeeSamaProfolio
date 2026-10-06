import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioShowcase from './components/PortfolioShowcase';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getProjectSlug(hash) {
  const match = hash.match(/^#project\/([^/?#]+)/i);
  return match ? decodeURIComponent(match[1]) : null;
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const projectSlug = useMemo(() => getProjectSlug(hash), [hash]);

  useEffect(() => {
    document.documentElement.classList.toggle('project-detail-open', Boolean(projectSlug));

    if (projectSlug) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return () => document.documentElement.classList.remove('project-detail-open');
    }

    const targetId = hash.replace(/^#/, '');
    if (!targetId || targetId === 'home') return undefined;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, projectSlug]);

  if (projectSlug) {
    return (
      <>
        <Header />
        <main className="project-detail-main">
          <ProjectDetail slug={projectSlug} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
