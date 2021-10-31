import { useEffect, useState } from 'react';
import useFirebase from './../../hooks/useFirebase.js';
import { Container, Table } from "react-bootstrap";
import './MyOrder.css';


const MyOrder = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);
    // console.log(orders);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        console.log(id);
    };

    return (
        <div>
            <h1 className="text-center mt-5 mb-2">My Current Order : {orders.length} </h1>
            <Container className="mb-5 w-50">
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Client</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Cancellation</th>
                        </tr>
                    </thead>
                    {orders.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.price}</td>
                                <td><button onClick={handleDelete} style={{ backgroundColor: "#C19B77" }} className="delete-btn" >Delete</button></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </Container>
        </div>
    );
};

export default MyOrder;