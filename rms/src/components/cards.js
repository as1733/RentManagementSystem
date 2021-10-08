
import {Carousel,div,Col,Card,Image,Container,ListGroup,ListGroupItem} from 'react-bootstrap';
import React  from "react";
class CustomCards extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
    }

    render() {
        return (

            <Card style={{ width: '18rem' ,display:'inline-grid'}}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default CustomCards;
