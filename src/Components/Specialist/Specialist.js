import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Specialists from '../../Specialists/Specialists';

const Specialist = () => {
  const [specialist , setSpecialist] =  useState([])
  useEffect( () => {
    fetch("./content.json")
    .then(res => res.json())
    .then(data => setSpecialist(data))
  } ,[])
  return (
    <div>
      <Container className="">
      <div className="container">
        {/* <Zoom> */}
        <Navbar bg="light" expand="lg">
                 <Container>
                       <Navbar.Brand href="#home" className="fw-bold">Specialists</Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="ms-auto">
                          <Nav.Link href="/home"><i class="fas fa-home fa-1x"></i></Nav.Link>
                          <Nav.Link href="/specialist">/ Specialists</Nav.Link>
                      </Nav>
                   </Navbar.Collapse>
             </Container>
        </Navbar>
        <Container className="my-5">
        {/* <Zoom> */}
        <Row >
            <Col sm={12} md={6} lg={4}>
              <div className="bg-dark p-3">
                    <i className="text-white fas fa-user-md fa-3x"></i>
                    <h5 className="text-white">Find a consultant</h5>
                </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
            <div className="bg-primary p-3">
                    <i className="text-white fas fa-file fa-3x"></i>
                    <h5 className="text-white">Online Report</h5>
            </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
          <div className="bg-dark p-3">
             <i className="text-white fas fa-calendar-check fa-3x"></i>
            <h5 className="text-white">Make An Appointment</h5>
          </div>
          </Col>
      </Row>
      <h1 className="text-primary my-2 ">Specialists</h1>
        {/* </Zoom> */}
        </Container>
        {/* </Zoom> */}
      <div className=" row row-cols-1 row-cols-md-3 g-4  m-4">
          {
          specialist?.map(specialists => <Specialists
            key = {specialists.id}
            specialists = {specialists}>
            </Specialists>
          )};
          </div>
          </div>
        </Container>
  
     
    </div>
  );
};

export default Specialist;