import React from 'react';
import './Service.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Zoom from "react-reveal/Zoom";

const Service = ({ service }) => {

    const { name, rooms, _id, description, img, price } = service;

    return (
        <Zoom>
            <div className="service pb-3">
                <div className="text-center" style={{ color: "#1C1C1C" }}>
                    <img src={img} alt="" />
                    <h2 className="mt-3 fw-bolder">{name}</h2>
                    <p className="fw-bolder">{rooms}</p>
                    <h3 className="fw-bolder">$ {price} / Night</h3>
                    <p>{description}</p>
                </div>
                <div className="text-center mt-3">
                    <Link to={`/services/${_id}`}><button className="btn-style">Book Now</button></Link>
                </div>
            </div>
        </Zoom>

    );
};

export default Service;