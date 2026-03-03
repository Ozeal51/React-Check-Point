import React from 'react';
// Importing necessary components from react-bootstrap
import {
  Navbar,
  Container,
  Nav,
  Card,
  Button,
  Row,
  Col,
  Form,
} from 'react-bootstrap';

function App() {
  // sample data for the cards that will be displayed in the UI
  const cards = [
    {
      title: 'GoMyCode',
      text: 'This is about GoMyCode, The best for Developers.',
      img:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMVFhUWFRUWFRYVFxcXFxUYFxUXFxUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGyslICUtLS01LS8tLy0tLS0tLS0tLy0tLTUtLS0tLTItLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABLEAACAQID...'
    },
    {
      title: 'Akpu 4 All',
      text: 'This is About a restuarant e-commerce web page with React.',
      img:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIWFhUXFxcXGBgVFxcWGBUVFxYYFxgXGBcYHCggGholGxYYITEhJikrLi4uFx8zODMuNygtLisBCgoKDg0OGxAQGy0lICUvLysvLS0tLS8uKy0tLTUtLy01LS0tLS0vLy0tLS0tLS0vKy0tLS0tLS0tLS8tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABDEAACAQMDAgMGAwYDBQgDAAABAhEAAyEEEjEFQSJRYQYTMnGBkUKhsRRSYsHR8AeCsiNykuHxFRZTc6KzwtIXM0P/...'
    },
    {
      title: 'JohoAutos',
      text: 'This is About JohoAutos using React Bootstrap.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxcczmUMv6bQOgs4sEvJ9-pUrs0RLKlkGyg&s',
    },
  ];

  return (
    <>
      {/* wrapper fragment to avoid adding extra nodes to the DOM */}
      <div className="App">
        {/* Navbar at the top of the page */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">My React Check Point</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Page heading */}
        <Container className="mt-4 text-center">
          <h1>Welcome to My React-App Check point</h1>
        </Container>

        {/* A simple contact form using react-bootstrap Form component */}
        <Container className="mt-4">
          <Form>
            <Row className="g-3">
              <Col md>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
            <Button className="mt-3" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>

        {/* Cards section showing example projects */}
        <Container className="mt-4">
          <Row xs={1} md={3} className="g-4">
            {cards.map((c, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={c.img} alt={c.title} />
                  <Card.Body>
                    <Card.Title>{c.title}</Card.Title>
                    <Card.Text>{c.text}</Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
