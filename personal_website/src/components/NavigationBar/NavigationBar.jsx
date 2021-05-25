import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import Helmet from 'react-helmet';
import PortfolioContext from '../../context/context';
import Pdf from '../../documents/Peter_Weckend_Resume.pdf';

const NavigationBar = () => {
  const { navigationBar } = useContext(PortfolioContext);
  const { title, about, experience, contact, resume } = navigationBar;
  const [navbaropen, setNavbarOpen] = useState(false);

  const navbarLinkHandler = () => {
    setNavbarOpen(false);
  };

  // todo: clean up the conditionals below so there's less duplicated code
  return (
    <nav>
      <Helmet>
        <body className={navbaropen ? 'freeze' : ''} />
      </Helmet>
      <Link className="title" to="hero" smooth duration={500}>
        <h1>{title}</h1>
      </Link>
      <div
        className="toggle"
        onKeyDown={() => setNavbarOpen(!navbaropen)}
        onClick={() => setNavbarOpen(!navbaropen)}
        role="button"
        tabIndex="0"
      >
        {navbaropen ? <div className="hamburger open" /> : <div className="hamburger" />}
      </div>
      {navbaropen ? (
        <div className="navbox">
          <Link
            className="navItem"
            to="about"
            offset={-50}
            onClick={navbarLinkHandler}
            smooth
            duration={500}
          >
            {about}
          </Link>
          <Link
            className="navItem"
            to="projects"
            offset={-50}
            onClick={navbarLinkHandler}
            smooth
            duration={600}
          >
            {experience}
          </Link>
          <Link
            className="navItem"
            to="contact"
            offset={-50}
            onClick={navbarLinkHandler}
            smooth
            duration={700}
          >
            {contact}
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={navbarLinkHandler}
            className="navItem resumeLink openResumeLink"
            href={Pdf}
          >
            {resume}
          </a>
        </div>
      ) : (
        <div className="navbox open">
          <Link
            className="navItem"
            to="about"
            offset={-90}
            onClick={navbarLinkHandler}
            smooth
            duration={500}
          >
            {about}
          </Link>
          <Link
            className="navItem"
            to="projects"
            offset={-90}
            onClick={navbarLinkHandler}
            smooth
            duration={600}
          >
            {experience}
          </Link>
          <Link
            className="navItem"
            to="contact"
            offset={-90}
            onClick={navbarLinkHandler}
            smooth
            duration={700}
          >
            {contact}
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={navbarLinkHandler}
            className="navItem resumeLink"
            href={Pdf}
          >
            {resume}
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
