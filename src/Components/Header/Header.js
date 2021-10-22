import React from 'react';
import './Header.css'
import logo from '../../Assests/images/nav-logo.jpg'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
 
  const {user , logOut} = useAuth();
    return (
        <div>
            <Navbar className="header" expand="lg">
                <Container>
                 <Navbar.Brand  className="text-white" to="/home">
                        <img className="logo"width="70px" src={logo} alt="Logo" />{" "}
                        <span className="title fw-bold"> Tuhin's HealthCare</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                        <Nav.Link as={NavLink} to="/home" className="text-white">Home</Nav.Link>
                        <Nav.Link as ={NavLink} to="/about" className="text-white">About us</Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/teleOnlineFAQ" className="text-white">Tele Online FAQ</Nav.Link>
                        <Nav.Link as={NavLink} to="/specialist" className="text-white">Specialist</Nav.Link>
                        <Nav.Link as={NavLink} to="/careers" className="text-white">Careers</Nav.Link>
                              {!user?.displayName ?  (
                    <>
                      <Nav.Link as={NavLink} to="/register" className="text-white">
                        Register
                      </Nav.Link>

                      <Nav.Link className="text-white" as={NavLink} to="/login">
                        Log in
                      </Nav.Link>
                    </>
                    ) : (
                    <NavDropdown
                      title={
                        <img
                          style={{
                            width: "45px",
                            borderRadius: "50%",
                          }}
                          src={user?.photoURL}
                          alt=""
                        />
                      }
                    >
                      <div className="text-center">
                        <h6>{user?.displayName}</h6>
                        <p className="m-0 mb-2">{user?.email}</p>
                        <button onClick={logOut} className="btn btn-success">
                          Log Out
                        </button>
                      </div>
                    </NavDropdown>
                  )}
          </Nav>
        </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;