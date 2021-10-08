import './PropertyCard.css'
import React, { Component } from 'react';
import ReactBootstrap, {
  Card,
  Button,
  div
} from "react-bootstrap";
import img1 from "../shared/sample1.svg";


class PropertyCard extends Component{
  constructor(props){
      super(props);
      this.props = props;
      // 
      // cardTitle
      // cardText
      // imgLocation

  }
  render(){
    return(
      <Card className = "col-sm-6 col-md-3">
      <div class="embed-responsive">
        <Card.Img className ="embed-responsive-item" variant="top" src= {this.props.imgLocation} alt={this.props.cardTitle} responsive />
      </div>
      <Card.Body height>
        <Card.Title>{this.props.cardTitle}</Card.Title>
        <Card.Text>
          {this.props.cardText}
        </Card.Text>
        <div className = "col">
          <Button className = "col-12"variant="warning">Upload Utility Bill</Button>
          <Button className = "col-12"variant="primary">Pay Bill</Button>
        </div>
      </Card.Body>
    </Card>
    );
  }
}


export default PropertyCard;
    
