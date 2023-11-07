import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css'

function NavProjeto() {
  return (
    <Navbar bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand href="/">HomeStyle</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/Entrar">Entrar</Nav.Link>
            <Nav.Link href="/Cadastro">Cadastro Produto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavProjeto;