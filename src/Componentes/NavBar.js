import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

function NavBar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#1">TecnologyNet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#2">Home</Nav.Link>
            <Nav.Link href="#3">Productos</Nav.Link>
            <Nav.Link href="#4">Contacto</Nav.Link>
            <Nav.Link href="#5">Nosotros</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
  );
}

export default NavBar;