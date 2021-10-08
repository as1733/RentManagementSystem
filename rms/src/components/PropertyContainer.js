import React, { Component } from 'react';
import ReactBootstrap, {
  Card,
  Button,
  div
} from "react-bootstrap";
import PropertyCard from './PropertyCard';
import { generatePath } from "react-router";



class PropertyContainer extends Component{
  constructor(props){
    super(props);
    this.props = props;

    const jsonListOfPropeties = 
    [
      
      {
        cardTitle : "Mumbai",
        cardText : "Rent: Rs3000, 3bhk",
        imgLocation : "sample1.svg"
      }
      ,
      {
        cardTitle : "Delhi",
        cardText : "Rent: Rs2000, 2bhk",
        imgLocation : "logo192.png"
      },
      {
        cardTitle : "Mumbai",
        cardText : "Rent: Rs3000, 3bhk",
        imgLocation : "sample1.svg"
      }
      ,
      {
        cardTitle : "Delhi",
        cardText : "Rent: Rs2000, 2bhk",
        imgLocation : "logo192.png"
      },
      {
        cardTitle : "Mumbai",
        cardText : "Rent: Rs3000, 3bhk",
        imgLocation : "sample1.svg"
      }
      ,
      {
        cardTitle : "Delhi",
        cardText : "Rent: Rs2000, 2bhk",
        imgLocation : "logo192.png"
      },
      {
        cardTitle : "Mumbai",
        cardText : "Rent: Rs3000, 3bhk",
        imgLocation : "sample1.svg"
      }
      ,
      {
        cardTitle : "Delhi",
        cardText : "Rent: Rs2000, 2bhk",
        imgLocation : "logo192.png"
      },
      {
        cardTitle : "Mumbai",
        cardText : "Rent: Rs3000, 3bhk",
        imgLocation : "sample1.svg"
      }
      ,
      {
        cardTitle : "Delhi",
        cardText : "Rent: Rs2000, 2bhk",
        imgLocation : "logo192.png"
      }
    ]


      this.state = {propsResponse: jsonListOfPropeties }
  
      
  }
  render()
  {
    const tags_to_render = this.state.propsResponse.map((e)=>{return(<PropertyCard cardText={e.cardText} cardTitle = {e.cardTitle} imgLocation = {e.imgLocation}></PropertyCard>)})

    return(


      <div className = "container">
        <div className="row row-content">
        {tags_to_render}
       
        </div>
      </div>
     

        
    )
      
  }
}
export default PropertyContainer;