import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({service}) => {
    console.log(service.img)
  const { title , img , description , price} = service;
  console.log(title)

    return (
        <div>
            <Card style={{height:"500px"}} className="rounded-3">
    <Card.Img variant="top" style={{height:"200px"}} src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <p>
            {description.slice(0,200)} <br />
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="bg-success text-white">
      <span >Cost : {price}TK </span>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Service;