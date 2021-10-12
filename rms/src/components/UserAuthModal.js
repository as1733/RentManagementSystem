import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';



class UserAuthModal extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      email: "",
      password: "",
    }
    this.handleLogin = this.handleLogin.bind(this);
}
  handleLogin(event){
    event.preventDefault();
    
    fetch('/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: this.state.email, password: this.state.password})
  }).then(response => response.json())
  .then(data => console.log(data))
  .catch(error=>{
    console.log("Backend Server is not responding")
    console.log(error)

  })
  .finally((e)=>{


  }) ;
  this.setState({email:"", password:""});
  }


  render(){
    return (
      <>
        <Modal
          size="sm"
          show={this.props.showModal}
          onHide={() => this.props.handleModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              User Login 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form  onSubmit={this.handleLogin}>
              <Form.Group className="my-4" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} placeholder="Please enter email" />
              </Form.Group>
              <Form.Group className="my-4" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} placeholder="Please enter password" />
              </Form.Group>
              <Button className="mt-2" type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )
  }

}
export default UserAuthModal;