import { Nav ,Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function NavbarDefault() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-control='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' />
          <Nav className="me-auto">
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/productos" >Productos</Link>
              </li>
              <li>
                <Link to="/CreateProduct" > Crear nuevo Producto </Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDefault;