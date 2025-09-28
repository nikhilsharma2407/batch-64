import React, { useEffect } from 'react'
import useApi from '../useApi'
import { ENDPOINTS } from '../apiUtils'
import { Card, CardBody, Col, Container, Row, Image, FormCheck, Badge } from 'react-bootstrap';
import { Plus, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import './styles.scss'

const Success = () => {
    const { makeRequest, response } = useApi(ENDPOINTS.STRIPE.CHECKOUT_SESSION);
    console.log("🚀 ~ Success ~ response:", response)

    const totalPrice = response?.data?.amount
    const totalQuantity = response?.data?.totalQuantity || 8

    useEffect(() => {
        makeRequest(null, false);
    }, [])

    return (
        <Container fluid>
            <Row>
                {/* left section */}
                <Col md={9}>
                    <Card className='cart-item'>
                        <CardBody>
                            <h2>Order Details</h2>
                            <hr />

                            {/* repeat this for multiple products */}
                            {response?.data?.items?.map(({
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

                <Col md={3}>
                    <Card className='mt-5'>
                        <CardBody>
                            <section>
                                {/* <h5>Subtotal ({totalPrice}):  ₹{totalPrice?.toLocaleString('en-IN')}</h5> */}
                                <h5>Subtotal ({totalQuantity}):  ${totalPrice?.toLocaleString('en-IN')}</h5>
                            </section>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Success