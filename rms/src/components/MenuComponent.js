import React, {Component} from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Navbar,Container,FormGroup, Nav, Form, FormControl ,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import LoginModal from './loginModal.js';
//
// const Styles = styled.div`
//   .navbar { background-color: #222; }
//   a, .navbar-nav, .navbar-light .nav-link {
//     color: #9FFFCB;
//     &:hover { color: white; }
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: #9FFFCB;
//     &:hover { color: white; }
//   }
//   .form-center {
//     position: absolute !important;
//     left: 25%;
//     right: 25%;
//   }
// `;

class NavigationBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal(boolean) {
        this.setState({
            showModal: boolean
        })
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Rent Management Systems</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#About">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            <Button variant="dark" onClick={() => this.handleModal(true)}>Login</Button>
                            <Link to='/' className='nav-link'>About us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <LoginModal
                    handleModal={this.handleModal}
                    showModal={this.state.showModal}
                />
            </Navbar>
        )
    }

}

export default NavigationBar;
