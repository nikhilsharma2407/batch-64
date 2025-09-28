import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useGetUserData from './useIsLoggedIn';

const ProtectedRoute = () => {
    const { isLoggedIn, isLoading } = useGetUserData();

    const [navigateToLogin, setNavigateToLogin] = useState(null);

    useEffect(() => {
        // login api is finished loading
        if (isLoading === false) {
            if (isLoggedIn)
                setNavigateToLogin(false)
            else {
                setNavigateToLogin(true)
            }
        }
    }, [isLoading, isLoggedIn])

    if (navigateToLogin === true) {
        return <Navigate to='/login' />
    }

    else if (navigateToLogin === false) {
        return <Outlet />
    }

    return null;

}

export default ProtectedRoute