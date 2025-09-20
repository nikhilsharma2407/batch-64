import React from 'react'
import { Badge } from 'react-bootstrap'
import { BagPlus, BagDash, Trash } from 'react-bootstrap-icons'

const CartCounter = () => {
    return (
        <section className='d-flex align-items-center'>
            <BagDash size={25} className='text-danger' />
            <Badge pill className='mx-2'>3</Badge>
            <BagPlus size={25} className='text-success' />

            <Trash size={25} className='text-danger ms-auto'></Trash>
        </section>
    )

}

export default CartCounter