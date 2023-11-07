import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'/src/App.css'
 
function Cabecalho() {
  return (
<>
<Navbar bg="secondary" variant="secondary">
<Container>
<Navbar.Brand href="/" >
<img
  class="justify-content-center"
  alt="HomeStyle"
  src="/logo.png"
  width="120"
  height="120"
            />{' '}
</Navbar.Brand>
</Container>
</Navbar>
</>
  );
}
 
export default Cabecalho;