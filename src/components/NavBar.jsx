import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="success" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="containerButtons">
          <Nav className="me-auto">
            <Link className="nav-item nav-link text-white" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link text-white" to="/favorites">
              Favoritos
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="containerBrand">
          <Link className="nav-item nav-link text-white" to="/">
            Personajes de Rick and Morty
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
