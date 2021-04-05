import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const NavigationBar = () => {
  const { navigationBar } = useContext(PortfolioContext);
  const { title, about, experience, contact, resume } = navigationBar; // todo change to use data values

  return (
    <Navbar className="navigationBar" bg="custom" expand="lg">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="about" smooth duration={500}>
              {about}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="projects" smooth duration={600}>
              {experience}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact" smooth duration={700}>
              {contact}
            </Link>
          </Nav.Link>
          <Nav.Link href="">{resume}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
