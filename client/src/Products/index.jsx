import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../UserContextProvider';

const Products = ({ products }) => {
    return <>
        <Container fluid className='pt-3'>
            <Row>
                {products.map((product) => <ProductsCard key={product.id} {...product} />)}
            </Row>
        </Container>
    </>

}

export default Products