import './PropertyCard.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      this.handlePaybill=this.handlePaybill


     
      // 
      // cardTitle
      // cardText
      // imgLocation

  }
  handlePaybill = ()=>{
    console.log(JSON.stringify(this.props))
    alert("Clicked on "+this.props.idx)

  }

 
  render(){
    return(
     
      <Card className = "col-sm-6 col-md-3">
         
      <div class="embed-responsive">
      <Link to='/aboutus' className='nav-link'>
        <Card.Img className ="embed-responsive-item" variant="top" src= {this.props.imgLocation} alt={this.props.cardTitle} responsive />
        <div className="onlyhover"> hello world  </div>
        
        </Link>
      </div>
      <Card.Body >
        <Card.Title>{this.props.idx}   {this.props.cardTitle}</Card.Title>
        <Card.Text>
          {this.props.cardText} 
        </Card.Text>
        <div className = "col">
          <Button className = "col-12"variant="warning" >Upload Utility Bill</Button>
          <Button className = "col-12"variant="primary" onClick={this.handlePaybill}>Pay Bill</Button>
        </div>
      </Card.Body>
      
    </Card>
 
    );
  }
}


export default PropertyCard;
    
