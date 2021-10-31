import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth.js';
import Service from '../Service/Service.js';
import './Services.css'
import Bounce from "react-reveal/Bounce";


const Services = () => {

    const { services } = useAuth()

    return (
        <div>
            <Container>
                <Bounce left cascade>
                    <h1 className="text-center m-3">Services and Facilities</h1>
                </Bounce>
                <Bounce right cascade>
                    <p className="my-4 mt-2 text-center text-muted fs-5">
                        Exceptional service - endless possibilities
                    </p>
                </Bounce>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;