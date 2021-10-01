import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const LoginModal = (props) => {
  return (
    <>
      <Modal
        size="sm"
        show={props.showModal}
        onHide={() => props.handleModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="my-4" controlId="email">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" placeholder="Please enter email" />
            </Form.Group>
            <Form.Group className="my-4" controlId="password">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" placeholder="Please enter password" />
            </Form.Group>
            <Button className="mt-2" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoginModal;