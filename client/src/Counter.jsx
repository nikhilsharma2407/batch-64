import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIncrementActionCreator, decrementActionCreator, incrementActionCreator } from './reducers/countReducer';

const Counter = () => {
    const state = useSelector(state => state.countReducer);
    // const state = useSelector(({count}) => count);
    const dispatch = useDispatch();
alert(123);
alert('abcd');

console.log('new deployemnt- 213')

    const { count } = state;

    // const [count, setCount] = useState(0);
    const numRef = useRef(null);

    const incrementCount = () => {
        const payload = +(numRef.current?.value) || 1
        dispatch(asyncIncrementActionCreator(payload))
        // setCount(count + value);
    };

    const decrementCount = () => {
        const payload = +(numRef.current?.value) || 1
        dispatch(decrementActionCreator(payload))
        // setCount(count - value)
    };

    return (
        <>
            <h1>Count - {count}</h1>
            <Button style={{ borderRadius: '5rem' }} variant='outline-danger' onClick={decrementCount}>-</Button>
            <input ref={numRef} className='mx-3' placeholder='Enter number' type='number' />
            <Button style={{ borderRadius: '5rem' }} variant='outline-success' onClick={incrementCount}>+</Button>
            <Button style={{ borderRadius: '5rem' }} variant='outline-success' >New Button</Button>
        </>
    )
}

export default Counter