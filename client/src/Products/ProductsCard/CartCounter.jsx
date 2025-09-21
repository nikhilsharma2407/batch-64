import React from 'react'
import { Badge } from 'react-bootstrap'
import { BagPlus, BagDash, Trash } from 'react-bootstrap-icons'

const CartCounter = ({ disabled, quantity, onIncrement, onDeceremt, onRemove }) => {
    return (
        <section className='d-flex action-btn align-items-center' style={{ filter: disabled ? 'grayScale(1)' : 'none' }}>
            <BagDash disabled={disabled} onClick={onDeceremt} size={25} className='text-danger' />
            <Badge pill className='mx-2'>{quantity}</Badge>
            <BagPlus disabled={disabled} onClick={onIncrement} size={25} className='text-success' />

            <Trash disabled={disabled} onClick={onRemove} size={25} className='text-danger ms-auto'></Trash>
        </section>
    )

}

export default CartCounter