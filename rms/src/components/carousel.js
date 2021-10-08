import React, {Component} from 'react';
import styled from 'styled-components';
import {Carousel,Row,Container,Col} from 'react-bootstrap';

class Carosul extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (



        <Col sm={12} className="d-none d-lg-block">

                        <Carousel className="h-25" interval={1000} pause={"hover"}>
                            <Carousel.Item >

                                <img
                                    className="h-50 w-100"
                                    src="./sample1.jpg"
                                    alt="First Image"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p className= ".d-none .d-lg-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" h-50 w-100"
                                    src="./sample2.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p className= ".d-none .d-lg-block" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="h-50 w-100"
                                    src="./sample3.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p className= ".d-none .d-lg-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
        </Col>


        )
    }

}

export default  Carosul;

