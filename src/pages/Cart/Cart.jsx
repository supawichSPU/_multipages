import './Cart.css';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

function Cart({ carts, setCarts }) {
    const [showModal, setShowModal] = useState(false);
    const [showCardForm, setShowCardForm] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setShowCardForm(false); // ปิดหน้าใส่ข้อมูลบัตรเมื่อปิด Modal
    };
    const handleShow = () => setShowModal(true);

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        alert('Payment Submitted!');
        handleClose();
    };

    return (
        <div className='cart-contrainer'>
            <div className='cart-items-contrainer'>
                {carts.map((cart) => {
                    return (
                        <Card style={{ width: '18rem' }} key={cart.id}>
                            <Card.Img variant="top" src={cart.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text>
                                    <b>${cart.price.toFixed(2)}</b>
                                </Card.Text>
                                <Button variant="outline-danger" onClick={() => {
                                    setCarts(carts.filter((c) => c.id !== cart.id))
                                }}>
                                    Remove from Carts
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <h4>Items: {carts.length} items - Total Price: ${carts.reduce((prev, cart) => {
                return prev + cart.price;
            }, 0).toFixed(2)}
            </h4>
            <Button className='btn btn-warning btn-lg'
                onClick={handleShow}
                disabled={carts.length === 0} //Disable checkout button if no item in cart
            >
                <span className='bi bi-cart'>
                    Check out
                </span>
            </Button>

            {/* Modal for Payment Method */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Method</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Select Payment Method</h5>
                    <Button variant="primary" className="m-2" onClick={() => {
                        handleClose()
                        setShowCardForm(true)
                    }}>
                        Credit Card
                    </Button>
                    <Button variant="secondary" className="m-2" onClick={() => {
                        handleClose()
                        setShowCardForm(true)
                    }}>
                        Debit Card
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Credit/Debit Card Payment */}
            <Modal show={showCardForm} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Card Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handlePaymentSubmit}>
                        <Form.Group className="mb-3" controlId="cardName">
                            <Form.Label>Cardholder Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cardNumber">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                required
                                maxLength="19"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expiryDate">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="MM/YY"
                                required
                                maxLength="5"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cvv">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="123"
                                required
                                maxLength="3"
                            />
                        </Form.Group>

                        <Button variant="success" type="submit" className="w-100">
                            Submit Payment
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Cart;