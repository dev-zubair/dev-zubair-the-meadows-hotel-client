import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from './../../../Assets/mylogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faMobileAlt, } from '@fortawesome/free-solid-svg-icons';
import FB from './../../../Assets/footer/socialFB.png';
import Linkedin from './../../../Assets/footer/sociallinkedin.png';
import YT from './../../../Assets/footer/socialyoutube.png';
import Twitter from './../../../Assets/footer/socialtwitter.png';
import Insta from './../../../Assets/footer/socialInsta.png';
import './Header.css';
import useAuth from './../../hooks/useAuth';


const Header = () => {
    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;
    const { displayName, photoURL, email } = user;

    return (

        <div style={{ backgroundColor: "#c19b77" }}>
            <Container className="top-bar">
                <Row className="text-dark text-center fs-6 p-1 align-items-center fw-bolder">
                    <Col md={3}><FontAwesomeIcon icon={faMapMarkerAlt} /> Tongi, Gazipur, Dhaka</Col>
                    <Col md={3}><FontAwesomeIcon icon={faMobileAlt} /> 24hrs Support: +8801619141476</Col>
                    <Col md={3}><FontAwesomeIcon icon={faClock} /> 24 hrs | 7 days a Week</Col>
                    <Col md={3}>
                        <a href="https://www.facebook.com/mdzubairahmed/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={FB} alt="" /></a>

                        <a href="https://www.linkedin.com/in/devzubair/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Linkedin} alt="" /></a>

                        <a href="https://www.youtube.com/channel/UCYbqD8NRIw7oZOP3i9C8Q1g" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={YT} alt="" /></a>

                        <a href="https://twitter.com/technicalzuba" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Twitter} alt="" /></a>

                        <a href="https://www.instagram.com/zubairhmd84/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Insta} alt="" /></a>
                    </Col>
                </Row>
            </Container>
            <Navbar style={{ backgroundColor: "#1C1C1C" }} expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink s={NavLink} to="/"><img className="w-50" src={headerLogo} alt="" /></NavLink>
                        {/* <NavLink s={NavLink} to="/">The Meadows Hotel</NavLink> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center ">
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/addservice">Add Service</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/manageorder">Manage Order</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/myorder">My Order</Nav.Link>
                            {/* <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/blog">Blog</Nav.Link> */}

                            {/* <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/contact">Contact Us</Nav.Link> */}

                            {!user.email ? (
                                <>
                                    <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/login"><button className="btn-style">Login</button></Nav.Link>

                                    <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/signup"><button className="btn-style">Sign up</button></Nav.Link>
                                </>
                            ) : (

                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "45px",
                                                borderRadius: "50%",
                                            }}
                                            src={photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center p-2 fw-bolder card-style">
                                        <img style={{
                                            width: "50%",
                                            borderRadius: "50%",
                                        }} src={photoURL} alt="" />
                                        <h6 className="mt-3">Welcome Back</h6>
                                        <h6>{displayName}</h6>
                                        <h6 className="m-0 mb-2">{email}</h6>
                                        {/* <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/addservice">Add Service</Nav.Link>
                                        <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/manageorder">Manage Order</Nav.Link>
                                        <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/myorder">My Order</Nav.Link> */}
                                        <button onClick={logOut} className="btn-style">
                                            Sign Out
                                        </button>
                                    </div>
                                </NavDropdown>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;



































































/*
import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from './../../../Assets/footer/main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical, faClock, faHandHoldingMedical, faHospitalUser, faMapMarkerAlt, faMobileAlt, faPaperPlane, faUserMd } from '@fortawesome/free-solid-svg-icons';
import FB from './../../../Assets/footer/socialFB.png';
import Linkedin from './../../../Assets/footer/sociallinkedin.png';
import YT from './../../../Assets/footer/socialyoutube.png';
import Twitter from './../../../Assets/footer/socialtwitter.png';
import Insta from './../../../Assets/footer/socialInsta.png';
import './Header.css';
import useAuth from './../../hooks/useAuth';


const Header = () => {
    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;
    const { displayName, photoURL, email } = user;

    return (

        <div style={{ backgroundColor: "#396CF0" }}>
            <Container className="top-bar">
                <Row className="text-white text-center fs-6 p-1 align-items-center fw-bolder">
                    <Col md={3}><FontAwesomeIcon icon={faMapMarkerAlt} /> Tongi, Gazipur, Dhaka</Col>
                    <Col md={3}><FontAwesomeIcon icon={faMobileAlt} /> Any Question: +8801619141476</Col>
                    <Col md={3}><FontAwesomeIcon icon={faClock} /> Mon - Fri:   9.00am - 10.00pm</Col>
                    <Col md={3}>
                        <a href="https://www.facebook.com/mdzubairahmed/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={FB} alt="" /></a>

                        <a href="https://www.linkedin.com/in/devzubair/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Linkedin} alt="" /></a>

                        <a href="https://www.youtube.com/channel/UCYbqD8NRIw7oZOP3i9C8Q1g" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={YT} alt="" /></a>

                        <a href="https://twitter.com/technicalzuba" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Twitter} alt="" /></a>

                        <a href="https://www.instagram.com/zubairhmd84/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Insta} alt="" /></a>
                    </Col>
                </Row>
            </Container>
            <Navbar style={{ backgroundColor: "lightseagreen" }} expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink s={NavLink} to="/"><img src={headerLogo} alt="" /></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center ">
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/"><FontAwesomeIcon icon={faClinicMedical} /> Home</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/about"><FontAwesomeIcon icon={faHospitalUser} /> About Us</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/services"><FontAwesomeIcon icon={faHandHoldingMedical} /> Services</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/doctors"><FontAwesomeIcon icon={faUserMd} /> Doctors</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/contact"><FontAwesomeIcon icon={faPaperPlane} /> Contact Us</Nav.Link>

                            {!user.email ? (
                                <>
                                    <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/login"><button className="btn-style">Login</button></Nav.Link>

                                    <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/signup"><button className="btn-style">Sign up</button></Nav.Link>
                                </>
                            ) : (
                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "45px",
                                                borderRadius: "50%",
                                            }}
                                            src={photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center p-2 fw-bolder card-style">
                                        <img style={{
                                            width: "50%",
                                            borderRadius: "50%",
                                        }} src={photoURL} alt="" />
                                        <h6 className="mt-3">Welcome Back</h6>
                                        <h6>{displayName}</h6>
                                        <h6 className="m-0 mb-2">{email}</h6>
                                        <button onClick={logOut} className="btn-style">
                                            Sign Out
                                        </button>
                                    </div>
                                </NavDropdown>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;
*/