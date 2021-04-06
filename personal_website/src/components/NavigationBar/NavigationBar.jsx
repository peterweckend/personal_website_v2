import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const NavigationBar = () => {
  const { navigationBar } = useContext(PortfolioContext);
  const { title, about, experience, contact } = navigationBar; // todo change to use data values, add resume here
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <h1 className="title">{title}</h1>
      <div
        className="toggle"
        navbarOpen={navbarOpen}
        onKeyDown={() => setNavbarOpen(!navbarOpen)}
        onClick={() => setNavbarOpen(!navbarOpen)}
        role="button"
        tabIndex="0"
      >
        {navbarOpen ? <div className="hamburger" open /> : <div />}
      </div>
      {navbarOpen ? (
        <div className="navbox">
          <Link className="navItem" to="about" smooth duration={500}>
            {about}
          </Link>
          <Link className="navItem" to="projects" smooth duration={600}>
            {experience}
          </Link>
          <Link className="navItem" to="contact" smooth duration={700}>
            {contact}
          </Link>
        </div>
      ) : (
        <div className="navbox" open>
          <Link className="navItem" to="about" smooth duration={500}>
            {about}
          </Link>
          <Link className="navItem" to="projects" smooth duration={600}>
            {experience}
          </Link>
          <Link className="navItem" to="contact" smooth duration={700}>
            {contact}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
