import { Nav, Navbar, Container } from 'react-bootstrap';

export const Home = () => {
    return (
        <>
        
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">C.H.K. Todo App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/users">users</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
   </>
    )
}







export default Home;
