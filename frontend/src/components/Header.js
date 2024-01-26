import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Container>
      <Navbar bg="dark" expand="md" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">suppleMentor</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;