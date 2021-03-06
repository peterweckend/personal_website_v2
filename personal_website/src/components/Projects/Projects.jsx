import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Highlighted = ({ text = '', highlight = '', highlightClassName = '' }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <p>
      {parts
        .filter((part) => part)
        // safe to use key=part here - the text is essentially static and I feel
        // doing something like generating a unique ID in this situation is overkill
        .map((part) =>
          regex.test(part) ? (
            <span className={highlightClassName} key={part}>
              {part}
            </span>
          ) : (
            <span key={part}>{part}</span>
          )
        )}
    </p>
  );
};
Highlighted.propTypes = {
  text: PropTypes.string,
  highlight: PropTypes.string,
  highlightClassName: PropTypes.string,
};

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Experience" />
          {projects.map((project) => {
            const {
              title,
              info,
              info2,
              url,
              urlLinkText,
              repo,
              img,
              id,
              highlight,
              highlightClassName,
            } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={100}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={100}
                    distance="30px"
                  >
                    <div className="project-wrapper__text projectText">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <Highlighted
                          text={info}
                          highlight={highlight}
                          highlightClassName={highlightClassName}
                        />
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <br />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero projectLink"
                        href={url}
                      >
                        {urlLinkText}
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                      <br />
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
