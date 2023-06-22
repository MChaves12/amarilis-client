import logo from '../assets/logo-amarilis.png';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid>
      <Navbar.Brand href="/">
          <img src={logo} alt="Logo Amarílis" className="logo-icon"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="guia-de-tamanhos">Guia de tamanhos</Nav.Link>
            <Nav.Link href="como-cuidar">Como cuidar</Nav.Link>
            <NavDropdown title="Nossos Produtos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="aneis">Anéis</NavDropdown.Item>
              <NavDropdown.Item href={`/category/name/brincos`}>
                Brincos
              </NavDropdown.Item>
              <NavDropdown.Item href="colares">
                Colares
              </NavDropdown.Item>
              <NavDropdown.Item href="piercings">
                Piercings
              </NavDropdown.Item>
              <NavDropdown.Item href="pulseiras">
                Pulseiras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
