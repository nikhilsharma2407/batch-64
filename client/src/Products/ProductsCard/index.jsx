import React from 'react'
import './styles.scss'
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardTitle, Col } from 'react-bootstrap'
import { BagPlusFill } from 'react-bootstrap-icons'
import { Rating } from 'react-simple-star-rating'

const ProductsCard = (product) => {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
    } = product


    return (
        <Col xl={{ span: 3 }} lg={{ span: 4 }} md={{ span: 5, offset: 0 }}
            sm={{ span: 10, offset: 1 }}>
            <Card className='mb-3'>
                <CardHeader className='title'>{title}</CardHeader>
                <CardImg src={image} variant='top' className='image' />
                <CardBody>
                    <section className='content'>
                        <section className='product-text'>${price}</section>
                        <section className='product-text desc'>{description}</section>
                    </section>
                    <section className='d-flex align-items-end'>
                        <Rating readonly initialValue={rating.rate} allowFraction size={20} />
                        <Badge pill className='ms-2'>{rating.count}</Badge>
                    </section>
                </CardBody>
                <CardFooter>
                    <Button variant='outline-primary'>
                        <section className='d-flex align-items-center'>
                            <BagPlusFill size={25} className='me-2' />
                            Add To Cart
                        </section>
                    </Button>

                </CardFooter>
            </Card>
        </Col>
    )
}

export default ProductsCard