import React, { useRef } from 'react';
import { Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";


const ServiceDetails = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();

    const { id } = useParams()
    const { services, allContexts } = useAuth()
    const { user } = allContexts;
    const { displayName, email } = user;

    const selected = services.find(service => service._id === (id));


    const handleBookNow = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        selected.name = name;
        selected.email = email;
        selected.address = address;
        selected.phone = phone;
        delete selected._id;
        console.log(selected);
        // console.log('button working');
        fetch(`http://localhost:5000/addOrder`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(selected),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        e.preventDefault()
    }

    return (
        <div>
            <Container className="mt-5 mb-5 text-center">
                <h1 className="mb-5">Welcome to my hotel</h1>
                <Row >
                    <Col md={6} sm={12}>
                        <img className="img-fluid" src={selected.img} alt="" />

                    </Col>
                    <Col md={6} sm={12}>
                        <Form onSubmit={handleBookNow}>
                            <Row>
                                <div>
                                    <h1>{selected.name}</h1>
                                    <h1>{selected.rooms}</h1>
                                    <p>{selected.description}</p>

                                </div>
                                <Col className="text-start">
                                    <Form.Label htmlFor="name" visuallyHidden>
                                        Your Name
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                        </InputGroup.Text>
                                        <FormControl ref={nameRef} value={displayName} required type="text" autoComplete="current-text" id="name" placeholder="Enter your name" /></InputGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-start">
                                    <Form.Label htmlFor="email" visuallyHidden>
                                        Your Email Address
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                        </InputGroup.Text>
                                        <FormControl ref={emailRef} value={email} required readonly type="email" autoComplete="current-email" id="email" placeholder="Enter your email address"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-start">
                                    <Form.Label htmlFor="name" visuallyHidden>
                                        Your Address
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                                        </InputGroup.Text>
                                        <FormControl ref={addressRef} required type="text" autoComplete="current-text" id="name" placeholder="Enter your address" /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-start">
                                    <Form.Label htmlFor="name" visuallyHidden>
                                        Your Phone Number
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                        </InputGroup.Text>
                                        <FormControl ref={phoneRef} required type="tel" autoComplete="current-text" id="name" placeholder="Enter your phone number" /></InputGroup>
                                </Col>
                            </Row>


                            <button type="submit" className="mt-2 w-100 btn-style">
                                Book Now!
                            </button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ServiceDetails;