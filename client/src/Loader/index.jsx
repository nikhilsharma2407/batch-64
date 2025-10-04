import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import './styles.scss'
import { UserContext } from '../UserContextProvider';

const Loader = ({ isLoadingProp }) => {
    const { isLoading } = useContext(UserContext);
    console.log("🚀 ~ Loader ~ isLoading:", isLoading)
    return (
        isLoading || isLoadingProp?
            <Spinner className='loader' animation="border" role="status">
            </Spinner> : null
    )
}

export default Loader