import React from 'react';
import { Card} from "react-bootstrap";
import { NavLink } from 'react-router-dom';


const Specialists = ({specialists}) => {
    const{id , name , position ,  image }= specialists ;
    console.log(name.slice(0,6))
    return (
        <div>
 <Card style={{height:"400px"}} className="rounded-3">
    <Card.Img variant="top" style={{height:"200px"}} src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p>
            {position}
            <p>
            <i class="fas fa-star-half-alt"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="fas fa-star-half-alt"></i>
            </p>
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="bg-primary">
      <NavLink className="text-decoration-none text-white" to={ `/specialist/${id}`}> view details </NavLink>
    </Card.Footer>
  </Card>
    </div>
    );
};

export default Specialists;