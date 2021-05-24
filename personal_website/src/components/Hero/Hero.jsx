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
              <span data-heading={name} id="hero-introduction">
                {name}
              </span>
              <br />
              {title}
            </h1>
            <p className="hero-subtitle">
              I&apos;m a full-stack developer with{' '}
              <span className="simple-highlight highlight-red">a proven record</span> of delivering
              performant and <span className="simple-highlight highlight-green">maintainable</span>{' '}
              software. When it comes to developing a product, I can work from gathering{' '}
              <span className="simple-highlight highlight-yellow">requirements</span>, to organizing
              a team, to designing, writing, and testing code -{' '}
              <span className="simple-highlight highlight-purple">and everything in between</span>.
            </p>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={500} offset={-90}>
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
