import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../UserContextProvider';

const Products = () => {
    const {setIsLoading } = useContext(UserContext)
    const [products, setProducts] = useState([]);

    const URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const { data } = await axios.get(URL);
            setIsLoading(false)
            setProducts(data);
        })();
    }, [])


    return <>
        <Container fluid className='pt-3'>
            <Row>
                {products.map((product) => <ProductsCard key={product.id} {...product} />)}
            </Row>
        </Container>
    </>

}

export default Products