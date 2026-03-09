import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col, Form, Button } from 'react-bootstrap';

// This is the main App component
function App() {
  return (
    // Using a React fragment to group multiple elements
    <>
      <div className="App">
        {/* This is the Navbar component from react-bootstrap */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* This is the heading */}
        <Container className="mt-3">
          <h1>Welcome to my React App!</h1>
        </Container>

        {/* These are the cards from react-bootstrap */}
        <Container className="mt-3">
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                  This is the first card.
                
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                  This is the second card.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  {/* This is a form from react-bootstrap */}
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
