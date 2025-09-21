import React, { useReducer, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, Col, FormCheck, FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import '../../ProductsCard/styles.scss'
import { PencilSquare } from 'react-bootstrap-icons'


const EditIcon = ({ onClick }) => <PencilSquare onClick={onClick} className='ms-2' size={20} />

const FIELD_NAMES = {
    TITLE: 'title',
    PRICE: 'price',
    DESCRIPTION: 'description',
}


const reducer = (state, action) => {
    const { type, name, value, product } = action;
    switch (type) {
        case 'UPDATE':
            return { ...state, [name]: value }
        case 'RESET':
            return product
        default:
            return state
    }

};

// const EditField = 

const EditableProduct = () => {
    const { state: { product } } = useLocation();
    const [editField, setEditField] = useState();
    const [state, dispatch] = useReducer(reducer, product);
    const [discount, setDiscount] = useState(0)

    const { id,
        title,
        price,
        description,
        image,
    } = state

    const handleChange = (e) => {
        const { value, name } = e.target
        dispatch({ type: 'UPDATE', name, value })
    }



    return (
        <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
            <Card className='product-card mt-5'>
                <CardImg className='image' src={image}></CardImg>
                <CardBody>
                    <FormGroup>
                        <FormLabel>Product Title</FormLabel>
                        {editField === FIELD_NAMES.TITLE ?
                            <FormControl name={FIELD_NAMES.TITLE} value={title} onChange={handleChange} /> :
                            <section className='d-flex align-items-center'>
                                <FormLabel>{title}</FormLabel>
                                <EditIcon onClick={() => setEditField(FIELD_NAMES.TITLE)} />
                            </section>
                        }
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Product Price</FormLabel>
                        {editField === FIELD_NAMES.PRICE ?
                            <>
                                <FormGroup>
                                    <FormLabel>Price</FormLabel>
                                    <InputGroup>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <FormControl type="number" name={FIELD_NAMES.PRICE} value={price} onChange={handleChange} />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Discount</FormLabel>
                                    <InputGroup>
                                        <InputGroup.Text>%</InputGroup.Text>
                                        <FormControl type='number' name={"discount"} value={discount} onChange={(e) => setDiscount(e.target.value)} />
                                    </InputGroup>
                                </FormGroup>
                            </>

                            :
                            <section className='d-flex align-items-center'>
                                {discount ?
                                    <>
                                        <span className='text-muted me-2' style={{ textDecoration: "line-through" }}>{price}</span>
                                        <span className='fw-bold text-danger me-2'> -{discount}%</span>
                                        <span className='fw-bold text-success me-2'>${(price * (1 - discount / 100)).toFixed(2)}</span>
                                    </>
                                    : <FormLabel>{price}</FormLabel>

                                }
                                <EditIcon onClick={() => setEditField(FIELD_NAMES.PRICE)} />
                            </section>
                        }
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Product Description</FormLabel>
                        {editField === FIELD_NAMES.DESCRIPTION ?
                            <FormControl as="textarea" rows={4} name={FIELD_NAMES.DESCRIPTION} value={description} onChange={handleChange} /> :
                            <>
                                <FormLabel>{title}</FormLabel>
                                <EditIcon onClick={() => setEditField(FIELD_NAMES.DESCRIPTION)} />
                            </>
                        }
                    </FormGroup>
                </CardBody>
                <CardFooter className='d-flex justify-content-between'>
                    <Button onClick={() => { setEditField(null); setDiscount(0); dispatch({ type: 'RESET', product }) }} variant='outline-danger'>Reset</Button>
                    <Button onClick={() => { setEditField(null) }} variant='outline-primary'>Preview</Button>
                    <Button onClick={() => setEditField(null)} variant='outline-success'>Submit</Button>
                </CardFooter>
            </Card>
        </Col>
    )
}

export default EditableProduct