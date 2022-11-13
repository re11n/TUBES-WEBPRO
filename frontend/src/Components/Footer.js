import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function ContainerOutsideExample() {
  return (
    <Navbar fixed="Bottom" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >© 2022 Copyright: AIMBOT</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default ContainerOutsideExample;