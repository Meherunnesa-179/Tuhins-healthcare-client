import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {NavLink, useParams} from "react-router-dom"
import useContent from '../Hooks/useContent';

const Details = () => {
    const {id} = useParams();
    const [specialist] = useContent();
    const matchedSpecialist= specialist.find((specialists) => specialists.id === Number(id));
    
    console.log(matchedSpecialist?.id)
    return (
        <div>
             <div className="my-4">
      {matchedSpecialist?.name ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img style={{height:"300px"}} className="img-fluid" src={matchedSpecialist?.image} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{matchedSpecialist.name}</h2>
              <h6>{matchedSpecialist.degree}</h6>
              <h6>{matchedSpecialist.position}</h6>
              <h6 className="text-primary">{matchedSpecialist.time}</h6>
              <h6 className="text-primary">Visiting-fee{matchedSpecialist.visitingFee}</h6>
              <p>{matchedSpecialist.about}</p>
              <NavLink to="/home" className="ms-5">Get Appointment</NavLink>
              <Row>
                <Col className="text-center">
                
                </Col>
                <Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Course Found</h1>
        </div>
      )}
    </div>
  </div>
    );
};

export default Details;