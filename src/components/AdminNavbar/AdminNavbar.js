import logo from '../assets/logo-amarilis.png';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function adminNavbar() {
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
            <NavDropdown title="Produtos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/admin/products">Todos os Produtos</NavDropdown.Item>
              <NavDropdown.Item href="/admin/products/create">Adicionar produto</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/admin/category">Todos as categorias</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Adicionar categoria</NavDropdown.Item>
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

export default adminNavbar;
