import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useGetUserData from './useIsLoggedIn';

const ProtectedRoute = () => {
    const { isLoggedIn, isLoading } = useGetUserData();

    const [navigateToLogin, setNavigateToLogin] = useState(null);

    useEffect(() => {

        if (!isLoading) {
            if (isLoggedIn)
                setNavigateToLogin(false)
            else {
                setNavigateToLogin(true)
            }
        }

    }, [isLoading, isLoggedIn])

    return (
        navigateToLogin === true ? <Navigate to='/login' /> : <Outlet />
    )
}

export default ProtectedRoute