import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function NavbarDefault() {
  return (
    <>
      <Navbar bg="dark" className='navbarDefault' data-bs-theme="dark">
      <Navbar.Brand href="#home">🌏 Navbar</Navbar.Brand>
      <div className='campo-rutas' >
          <div className='campoRuta' >
              <Link to="/" >Home</Link>
          </div>
          <div className='campoRuta' >
              <Link to="/productos" >Productos</Link>
          </div>
          <div className='campoRuta' >
              <Link to="/CreateProduct" > Crear nuevo Producto </Link>
          </div>
      </div>
      </Navbar>
    </>
  );
}

export default NavbarDefault;