import { Nav, Navbar, Container, Button, Row, Col, FloatingLabel, Form } from 'react-bootstrap';

export const Home = () => {
    return (
        <>
        
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">C.H.K. Todo App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/users">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <Container>

<Col xs={12} md={12} lg={12}>

</Col>

    <Row xs={12} md={12} lg={12}>
        <Col xs={12} md={12} lg={12}>

        <Button variant="secondary">new todo</Button>

        <>
  <FloatingLabel controlId="floatingTextarea" label="Title" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Todo Notes">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Button variant="success">add todo</Button>
</>

        </Col>
    </Row>

  </Container>
   </>
    )
}







export default Home;
