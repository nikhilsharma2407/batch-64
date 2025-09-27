import React, { useEffect } from 'react'
import useApi from '../useApi'
import { ENDPOINTS } from '../apiUtils'
import { Card, CardBody, Col, Container, Row, Image, FormCheck, Button, Badge, ProgressBar } from 'react-bootstrap';
import './styles.scss'
import { Plus, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { makeRequest, response } = useApi(ENDPOINTS.CART.GET_CART_ITEMS);
    const { makeRequest: clearCartApi } = useApi(ENDPOINTS.CART.CLEAR_CART);


    useEffect(() => {
        makeRequest(null, false);
    }, []);

    const { totalPrice, totalQuantity } = response || {}



    // const product = {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 47999,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     },
    //     quantity: 2,
    //     discount: 10
    // }

    // const {
    //     id,
    //     title,
    //     price,
    //     description,
    //     category,
    //     image,
    //     quantity,
    //     discount
    // } = product





    return (
        <Container fluid>
            <Row>
                {/* left section */}
                <Col md={9}>
                    <Card className='cart-item'>
                        <CardBody>
                            <h2>Shopping Cart</h2>
                            <hr />

                            {/* repeat this for multiple products */}
                            {response?.items?.map(({
                                id,
                                title,
                                price,
                                description,
                                category,
                                image,
                                quantity,
                                discount = 10
                            }) => {
                                const discountedPrice = parseInt(price * (1 - discount / 100))

                                return <>
                                    <Row>
                                        <Col md={3}>
                                            <Image src={image} fluid />
                                        </Col>

                                        <Col md={6}>
                                            <h5>{title}</h5>
                                            <Badge pill >{category}</Badge>
                                            <section className='info mt-1'>
                                                <section className='text-success mb-1'>In Stock</section>
                                                <section className='text-muted mb-2'>Eligible for FREE shipping</section>
                                            </section>

                                            <FormCheck label='This will be a gift' />

                                            <span className='cart-qty rounded-border mt-3 me-3'>
                                                <span><Trash size={20} /></span>
                                                <span>{quantity}</span>
                                                <span><Plus size={25} /></span>
                                            </span>

                                            <span className='btn-border'>
                                                <Link size='sm'>Delete</Link>
                                            </span>
                                            <span className='btn-border'>
                                                <Link size='sm'>Save for Later</Link>
                                            </span>
                                        </Col>
                                        <Col md={3} className='text-end'>
                                            <Badge pill className='bg-danger mb-2'>{discount}% off</Badge>
                                            <h5>₹{(discountedPrice).toLocaleString('en-IN')}</h5>
                                            <span className='me-1'>M.R.P.:</span>
                                            <span style={{ textDecoration: "line-through" }}>₹{price.toLocaleString('en-IN')}</span>
                                        </Col>
                                    </Row>
                                    <hr />
                                </>
                            })}


                        </CardBody>
                    </Card>
                </Col>

                {/* right section */}
                <Col md={3}>
                    <Card className='mt-5'>
                        <CardBody>
                            <section>
                                <section className='d-flex align-items-center'>
                                    <ProgressBar className='w-100 me-3' variant='success' now={totalPrice} max={499} />
                                    <span>499</span>
                                </section>
                                {totalPrice > 500 && <span className='text-success'>Your order is eligible for FREE Delivery.</span>}

                                {/* <h5>Subtotal ({totalPrice}):  ₹{totalPrice?.toLocaleString('en-IN')}</h5> */}
                                <h5>Subtotal ({totalQuantity}):  ${totalPrice?.toLocaleString('en-IN')}</h5>
                                <FormCheck className='mt-3' label='This order contains a gift' />
                                <Button variant='warning my-2' className='rounded-border w-100'>Proceed to Buy</Button>
                                <Button variant='danger' className='rounded-border w-100'>Clear Cart</Button>
                            </section>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart