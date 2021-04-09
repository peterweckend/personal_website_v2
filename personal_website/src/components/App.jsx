import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  navigationBarData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../data/data';

function App() {
  const [navigationBar, setNavigationBar] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavigationBar({ ...navigationBarData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ navigationBar, hero, about, projects, contact, footer }}>
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
