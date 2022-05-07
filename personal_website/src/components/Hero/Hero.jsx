import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, nameIntro, cta } = hero;
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

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
              <span className="text-color-main" data-heading={nameIntro} id="hero-introduction">
                {nameIntro}
              </span>
              <br />
              {title}
            </h1>
            <p className="hero-subtitle">
              I&apos;m a Vancouver-based full-stack developer with a passion for learning and collaboration.
              Currently I work at <span className="simple-highlight highlight-yellow">Dotdash Meredith</span>
              .
            </p>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="hero-social-links">
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name}`} />
                    </a>
                  );
                })}
            </div>
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" offset={-50} smooth duration={500}>
                  {cta} <i className="fa fa-arrow-down" />
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
