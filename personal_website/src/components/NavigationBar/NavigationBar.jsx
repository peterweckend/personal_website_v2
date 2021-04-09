import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Pdf from '../../documents/Peter.Weckend_Resume(*).pdf';

const NavigationBar = () => {
  const { navigationBar } = useContext(PortfolioContext);
  const { title, about, experience, contact, resume } = navigationBar;
  const [navbarOpen, setNavbarOpen] = useState(false);

  // todo: clean up the conditionals below so there's less duplicated code
  return (
    <nav>
      <Link className="title" to="hero" smooth duration={500}>
        <h1>{title}</h1>
      </Link>
      <div
        className="toggle"
        navbarOpen={navbarOpen}
        onKeyDown={() => setNavbarOpen(!navbarOpen)}
        onClick={() => setNavbarOpen(!navbarOpen)}
        role="button"
        tabIndex="0"
      >
        {navbarOpen ? <div className="hamburger open" /> : <div className="hamburger" />}
      </div>
      {navbarOpen ? (
        <div className="navbox">
          <Link className="navItem" to="about" smooth duration={500} offset={-90}>
            {about}
          </Link>
          <Link className="navItem" to="projects" smooth duration={600} offset={-90}>
            {experience}
          </Link>
          <Link className="navItem" to="contact" smooth duration={700} offset={-90}>
            {contact}
          </Link>
          <a target="_blank" rel="noopener noreferrer" className="navItem resumeLink" href={Pdf}>
            {resume}
          </a>
        </div>
      ) : (
        <div className="navbox open">
          <Link className="navItem" to="about" smooth duration={500} offset={-90}>
            {about}
          </Link>
          <Link className="navItem" to="projects" smooth duration={600} offset={-90}>
            {experience}
          </Link>
          <Link className="navItem" to="contact" smooth duration={700} offset={-90}>
            {contact}
          </Link>
          <a target="_blank" rel="noopener noreferrer" className="navItem resumeLink" href={Pdf}>
            {resume}
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
