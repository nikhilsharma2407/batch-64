import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
    const [products, setProducts] = useState([]);

    const URL = 'https://fakestoreapi.com/products';

    useEffect(() => {

        (async () => {
            const { data } = await axios.get(URL);
            setProducts(data);
        })();
    }, [])


    return <>
        <Container fluid>
            <Row>
                {products.map((product) => <ProductsCard key={product.id} {...product} />)}
            </Row>
        </Container>
    </>

}

export default Products