import React, { useContext } from 'react'
import './styles.scss'
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardTitle, Col } from 'react-bootstrap'
import { BagPlusFill, PencilSquare } from 'react-bootstrap-icons'
import { Rating } from 'react-simple-star-rating'
import CartCounter from './CartCounter'
import { UserContext } from '../../UserContextProvider'
import useApi from '../../useApi'
import { ENDPOINTS, REQUEST_TYPES } from '../../apiUtils'
import { useLocation, useNavigate } from 'react-router-dom'

// should be visible only for admin
const EditIcon = ({ onClickHandler }) => <PencilSquare onClick={onClickHandler} className='align-self-end m-2' size={25} />


const ProductsCard = (product) => {
    const { userdata, isLoading } = useContext(UserContext);
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const { makeRequest: makeAddToCartReq } = useApi(ENDPOINTS.CART.ADD, REQUEST_TYPES.POST)
    const { makeRequest: makeRemoveFromCartReq } = useApi(ENDPOINTS.CART.REMOVE, REQUEST_TYPES.POST)
    const { makeRequest: makeIncrementRequest } = useApi(ENDPOINTS.CART.INCREMENT, REQUEST_TYPES.PATCH)
    const { makeRequest: makeDecrementRequest } = useApi(ENDPOINTS.CART.DECREMENT, REQUEST_TYPES.PATCH)

    const cart = userdata?.cart?.items;

    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
    } = product

    const productInfo = cart?.find(p => p.id === id);

    const onIncrement = () => {
        if (isLoading) return
        makeIncrementRequest(product)
    }

    const onDeceremt = () => {
        if (isLoading) return
        makeDecrementRequest(product)
    }

    const onAddToCart = () => {
        if (!userdata) {
            return navigate(`/login`, {
                state: pathname,
                replace: true
            });
        }
        makeAddToCartReq(product);
    }

    const onRemoveFromCart = () => {
        if (isLoading) return
        makeRemoveFromCartReq(product)
    }

    return (
        <Col xl={{ span: 3 }} lg={{ span: 4 }} md={{ span: 5, offset: 0 }}
            sm={{ span: 10, offset: 1 }}>
            <Card className='mb-5 mb-sm-3 product-card w-100'>
                <section className='d-sm-none'>This is only visible on small screen</section>
                <CardHeader className='title'>{title}</CardHeader>
                <EditIcon onClickHandler={() => navigate(`/product/edit/${id}`, {
                    state: { product }
                })} />
                <CardImg src={image} variant='top' className='image p-2' />
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
                    {productInfo ? <CartCounter disabled={isLoading} onIncrement={onIncrement} onRemove={onRemoveFromCart} onDeceremt={onDeceremt} quantity={productInfo.quantity} /> :
                        <Button disabled={isLoading} variant='outline-primary' onClick={onAddToCart}>
                            <section className='d-flex align-items-center'>
                                <BagPlusFill size={25} className='me-2' />
                                Add To Cart
                            </section>
                        </Button>}


                </CardFooter>
            </Card>
        </Col>
    )
}

export default ProductsCard