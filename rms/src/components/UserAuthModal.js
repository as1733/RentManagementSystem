import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const UserAuthModal = (props) => {
  const [modalTitle, setModalTitle] = useState(false);

  useEffect(() => {
    setModalTitle(props.isTokenDetected);
  }, [props.isTokenDetected])

  return (
    <>
      <Modal
        size="sm"
        show={props.showModal}
        onHide={() => props.handleModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {
              modalTitle ? 'User Login' : 'User Sign Up'
            }
          </Modal.Title>
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

export default UserAuthModal;