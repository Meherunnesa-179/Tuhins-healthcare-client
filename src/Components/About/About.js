import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/about.jpg';
// import {Roll,Fade} from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import './About.css'

const About = () => {
    return (
        <div>
            <Roll bottom>
            <Container className="my-3  p-3">
                <h1 className="text-primary my-5">The HealthCare Group</h1>
           

             <Container className="m-2 border border-primary p-3 text-start">
                 <Row>
                       <Col xs>
              <p>
            <span className="text-danger  fs-5">  The Tuhin's HealthCare Group</span> believes access to healthcare is a fundamental right and invests in emerging markets to bring private, quality driven healthcare to meet the needs of local people.
                Evercare has responded to a global challenge to ensure well-being at all ages is provided to those living in emerging markets as a pillar to support sustainable economic development. With this the Group is leading the way in transforming the traditional healthcare model through its integrated cross-continents platform, its impact driven model and quality driven hospitals.
              </p>

               <p>
               The healthCare Group operates as an integrated healthcare delivery platform in emerging markets across Africa and South Asia, including India, Pakistan, Bangladesh, Kenya and Nigeria.
                The Group’s portfolio includes 29 hospitals, 16 clinics, 57 diagnostics centres and two brownfield assets. Evercare is proud to be the most diverse healthcare group in the countries it operates in with 10,350 employees working together to develop a systemic healthcare change in emerging markets.
               </p>

               <p>
               HealthCare is wholly owned by the Evercare Health Funds, a US $1bn emerging markets healthcare fund managed by The Rise Funds, the impact investment platform of global alternative asset manager TPG. The Evercare Health Fund is comprised of the world’s leading development finance institutions and other impact investors around the world.
               </p>
</Col>
    <Col xs={{ order: 12 }}>
         <img className="img-fluid"  src={img} alt="" />
         <p className="text-danger"> www.tuhin'sHeathCaregroup.com</p>
        <p className="text-primary">Follow us on social media for our latest news @ Evercaregroup</p>
        <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
         </Col>
  </Row>
</Container>
            </Container>
            </Roll>
        </div>
    );
};

export default About;