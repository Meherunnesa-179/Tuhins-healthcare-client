import React from 'react';
import './Footer.css'
import payment from "./../../images/mobile-services.png";
import footerLogo from "./../../Assests/images/nav-logo.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
        <div className="text-white background justify-content-center">
      <div className="py-4">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <img width="120px" src={footerLogo} alt="" />
              </div>

              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">Chattogram ,Bangladesh</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Official: tuhin.healthcare.org@gmail.com
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">
                    Helpline: 97846347853(Available:10:00AM to 12.00PM)
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={4} >
              <ul className="list-unstyled footer-link mt-5">
                <li>
                  Appointment
                </li>
                <li>
                  HelpLine : +58753624773
                </li>
                <li>
                Ambulance : 017000000000
                </li>
                <li>
                  Master health check : (02)7563457
                </li>
                <li>
                  PABX : (02)65634-5
                </li>
              </ul>
            </Col>
            <Col md={4} >
              <div className="mt-5">
                <img
                  className="img-fluid mt-5"
                  src={payment}
                  alt="payment methods"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Rights Reserved by Tuhin's HealthCare Community <br />
        2021
      </p>
    </div>
        </div>
    );
};

export default Footer;