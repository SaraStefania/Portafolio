
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-custom-color">
      <Container>
        <Navbar.Brand href="#home">
          <img src='src/assets/logoGato.png' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/*"ms-auto" para alinear a la derecha */}
            <Nav.Link className='navLink' href="/">Inicio</Nav.Link>
            <Nav.Link className='navLink' href="/about">Sobre mi</Nav.Link>
            <Nav.Link className='navLink' href="#link">Proyectos</Nav.Link>
            <Nav.Link className='navLink' href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
