import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

export default function Header() {
  const handleNavLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Navbar expand="lg" className="bg-custom-color">
      <Container>
        <Navbar.Brand href="/">
          <img src='src/assets/logoGato.png' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/*"ms-auto" para alinear a la derecha */}
            <a className='navLink' href="/about"
              onClick={(e) => handleNavLinkClick(e, 'about')}>
              Sobre mi
            </a>
            <a className='navLink' href="/proyectos"
              onClick={(e) => handleNavLinkClick(e, 'proyectos')}>
              Proyectos
            </a>
            <Link className='navLink' to="#link">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
