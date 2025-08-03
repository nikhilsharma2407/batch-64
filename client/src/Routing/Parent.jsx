import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Child1 = () => {
    return (
        <div>Child1</div>
    )
}


export const Child2 = () => {
    return (
        <div>Child2</div>
    )
}

export const Child3 = () => {
    return (
        <div>Child3</div>
    )
}


// /parent
const Parent = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Parent</h1>
            {/* Relative routes - do not have / */}
            <Link to='child-1'>Link to child-1</Link><br />
            <Link to='child-2'>Link to child-2</Link><br />
            <Link to='child-3'>Link to child-3</Link><br />
            {/* absolute routes */}
            <Button variant='outline-primary' onClick={() => navigate('/products')}>Products</Button>
            {/* <Link to='/products'>Link to Products</Link><br /> */}
            <Outlet />
        </>
    )
}

export default Parent