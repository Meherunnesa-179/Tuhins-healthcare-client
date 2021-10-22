import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Col, Container, Nav, Navbar,  Row, Table } from 'react-bootstrap';

const Careers = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                 <Container>
                       <Navbar.Brand href="#home" className="fw-bold">Career</Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="ms-auto">
                          <Nav.Link href="#home"><i class="fas fa-home fa-1x"></i></Nav.Link>
                          <Nav.Link href="/Careers#link">/ Careers</Nav.Link>
                      </Nav>
                   </Navbar.Collapse>
             </Container>
        </Navbar>
        <Container className="my-5">
        <Zoom>
        <Row>
            <Col>
              <div className="bg-dark p-3">
                    <i className="text-white fas fa-user-md fa-3x"></i>
                    <h5 className="text-white">Find a consultant</h5>
                </div>
            </Col>
            <Col>
            <div className="bg-primary p-3">
                    <i className="text-white fas fa-file fa-3x"></i>
                    <h5 className="text-white">Online Report</h5>
            </div>
            </Col>
            <Col>
          <div className="bg-dark p-3">
             <i className="text-white fas fa-calendar-check fa-3x"></i>
            <h5 className="text-white">Make An Appointment</h5>
          </div>
          </Col>
      </Row>
        </Zoom>
        <h4 className="m-3"><u> We Are Hiring</u></h4>
    <Table striped bordered hover className="bordered border-bottom">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Position</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><a href="#"> Register</a></td>
                        <td>Dhaka</td>
                        <td>15th October, 2021</td>
                    </tr>
                <tr>
                    <td>3</td>
                    <td><a href="">Senior Stuff Nurse</a></td>
                    <td>Chattogram</td>
                    <td>15th October, 2021</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><a href="#">Specialist</a></td>
                    <td>Dhaka</td>
                    <td>15th October, 2021</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><a href="">Pharmacist</a></td>
                    <td>Chattogram</td>
                    <td>15th October, 2021</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><a href="#"> Register</a></td>
                    <td>Dhaka</td>
                    <td>15th October, 2021</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><a href="">Specialist</a></td>
                    <td>Chattogram</td>
                    <td>15th October, 2021</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><a href="#"> Register</a></td>
                    <td>Dhaka</td>
                    <td>15th October, 2021</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td><a href="#"> Register</a></td>
                    <td>Dhaka</td>
                    <td>15th October, 2021</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td><a href="#">Specialist</a></td>
                    <td>Chattogram</td>
                    <td>15th October, 2021</td>
                </tr>
                </tbody>
                </Table>
</Container>
        </>
    );
};

export default Careers;