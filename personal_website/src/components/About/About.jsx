import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Pdf from '../../documents/Peter_Weckend_Resume.pdf';
import Video from '../../documents/i_play_piano.mp4';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThreeLinkText, resume } = about;

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

  // todo: find a more elegant way of doing this
  const link = (
    <a target="_blank" rel="noopener noreferrer" className="link" href={Video}>
      {paragraphThreeLinkText}
    </a>
  );

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <br />
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <br />
                <p className="about-wrapper__info-text">
                  I love to play around with code - currently I&apos;m sharpening my skills with
                  React, GraphQL, and Swift. When I&apos;m not coding, I spend my free time
                  travelling, bouldering, and {link}.
                </p>
                <br />
                <span className="d-flex mt-3 resumeButton">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={Pdf}
                  >
                    {resume}
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
