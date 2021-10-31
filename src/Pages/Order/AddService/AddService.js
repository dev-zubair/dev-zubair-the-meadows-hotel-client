import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';

const AddService = () => {
    const nameRef = useRef();
    const roomRef = useRef();
    const priceRef = useRef();
    const desRef = useRef();

    const handleAddService = e => {
        const name = nameRef.current.value;
        const rooms = roomRef.current.value;
        const price = roomRef.current.value;
        const description = desRef.current.value;
        const newService = { name, rooms, price, description };

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thank you! Your Service have been added successfully')
                    // console.log(data);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Container className="text-center mt-5 mb-5 pt-5 pb-5" style={{ backgroundColor: "#C19B77" }}>
                <h1 className="fw-bolder">Add A Service</h1>
                <div className="p-3">
                    <form onSubmit={handleAddService}>
                        <input className="me-3 mt-3" type="text" ref={nameRef} placeholder="Service Name" />
                        <input className="me-3 mt-3" type="number" ref={roomRef} placeholder="Total Person" />
                        <input className="me-3 mt-3" type="number" ref={priceRef} placeholder="Price" />
                        <input className="me-3 mt-3" type="text" ref={desRef} placeholder="Add Description" />
                        <input className="me-3 mt-3 fw-bolder" style={{ backgroundColor: "#1C1C1C", color: "#C19B77", border: "#1C1C1C", padding: "5px 30px" }} type="submit" value="Add A Service" />
                    </form>
                </div>
            </Container >
        </div >
    );
};

export default AddService;