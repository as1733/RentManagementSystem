import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuComponent from "../components/MenuComponent";

export default function About() {
  return (
    <div style={{ backgroundColor: "#282c34", height: "100vh" }}>
      <MenuComponent />
      <Container className="mt-5">
        <h1 className="text-white">About Us</h1>
        <Link to="/">Home </Link>

        <div className="bg-dark">
          <h3 className="mt-3 text-white py-3">Contact us</h3>
          <Row className="justify-content-center">
            <Col lg="6" md="8">
              <Form>
                <Form.Control type="text" placeholder="Name" className="mb-3" />
                <Form.Control
                  type="text"
                  placeholder="Email"
                  className="mb-3"
                />
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Message"
                  className="mb-3"
                />
              </Form>
              <Button variant="success" className="mb-3">
                SEND
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
