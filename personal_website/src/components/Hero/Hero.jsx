import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              <span className="text-color-main" data-heading={name} id="hero-introduction">
                {name}
              </span>
              <br />
              {title}
            </h1>
            <p className="hero-subtitle">
              I&apos;m a full-stack{' '}
              <span className="simple-highlight highlight-red">software developer</span> with with a
              passion for learning and experience in a variety of software projects. Currently, I
              work at <span className="simple-highlight highlight-yellow">Haemonetics</span>, where
              I write hospital medical software.
            </p>
          </Fade>
          <br />
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" offset={-50} smooth duration={500}>
                  {cta} <i className="fa fa-arrow-down fa-inverse" />
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    </div>
  );
};

export default Header;
