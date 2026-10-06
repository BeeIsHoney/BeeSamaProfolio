import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
