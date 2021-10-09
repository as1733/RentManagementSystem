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
        cardTitle : "Mumbai- Rendering from the frontend only ",
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
    this.jsonlist= jsonListOfPropeties

      this.state = {propsResponse: [] }
  
      
  }


  componentDidMount() {
    fetch('/api/v1/propertyapi/list')
        .then((data)=>{
          var k=data.json()
          console.log(data)
          return k;

        }).then((e)=>{
          console.log(e)

          this.setState({propsResponse:e.output})
    }).catch((e)=>{
      alert("Backend express server is not respondind please start it by going to 'backendserver/ and running command 'npm start' currently the cards being rendered " +
          "using the static json from rms/src/components/PropertyContainer.js ->variable - jsonListOfPropeties")
      this.setState({propsResponse:this.jsonlist})
    })
  }



  render()
  {
    const tags_to_render = this.state.propsResponse.map((e,idx)=>{
      return(
              <PropertyCard cardText={e.cardText} cardTitle = {e.cardTitle} idx={idx} imgLocation = {e.imgLocation} key={idx}></PropertyCard>
              )
                                                              }
                                                        )

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