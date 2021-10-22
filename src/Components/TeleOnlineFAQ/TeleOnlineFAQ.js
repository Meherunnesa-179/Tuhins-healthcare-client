import React from 'react';
import { Accordion, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import pay from '../../images/mobile-services.png'

const TeleOnlineFAQ = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
             <Container>
                   <Navbar.Brand href="#home" className="fw-bold">Tele Online FAQ</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                       <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ms-auto">
                      <Nav.Link href="/home#home"><i class="fas fa-home fa-1x"></i></Nav.Link>
                      <Nav.Link href="/Careers#link">/ Tele Online FAQ</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
         </Container>
    </Navbar>
    <Container className="my-5">
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
  <h2 className="text-uppercase my-5 text-primary"> <u> FREQUENTLY ASKED QUESTIONS for patients</u></h2>
        <div className="my-3 p-5 border  border-1 border-primary">
        <Accordion defaultActiveKey="0" flush >
  <Accordion.Item eventKey="0">
  <Accordion.Header>Q1. How can I pay teleconsultation fee?</Accordion.Header>
    <Accordion.Body>
    Answer: you can pay online though different methods like:
    <img src={pay} alt="" />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Q2. How can I have the teleconsultation with the doctor of your hospital?</Accordion.Header>
    <Accordion.Body>
    Answer: You can access the link directly by typing ecare.evercarebd.com:8000/in the browser, or you can navigate by clicking the online consultation appointment link mentioned in our official website ecare.evercarebd.com
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Q3. How will I get to know that my appointment request is accepted?</Accordion.Header>
    <Accordion.Body>
    Answer: As per your appointment request, an email and an SMS notification will be sent to you within 24 hours. If not, please call our coordinator at 10678.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Q4. What is the consultation fee for teleconsultation?</Accordion.Header>
    <Accordion.Body>
    Answer: We have been offering the service at a flat rate of BDT 1400 at this moment. Please check with our coordinator for details at 10678.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
  <Accordion.Header>Q5. Do I need to download any app to my smartphone or to my desktop for having teleconsultation?
</Accordion.Header>
    <Accordion.Body>
    Answer: No, you need not download or install any app for teleconsultation. It is a browserbased web application that can be accessed through a link to the site.


    </Accordion.Body>
   
  </Accordion.Item>
</Accordion>
        </div>
  </Container>
  </>
    )
};

export default TeleOnlineFAQ;