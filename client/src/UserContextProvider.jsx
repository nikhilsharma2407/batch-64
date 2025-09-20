import { createContext, useState } from "react";

export const UserContext = createContext({
    userdata: null,
    message: null,
    success: null,
    isLoading: null,
    setUserData: null,
    setMessage: null,
    setSuccess: null,
    setIsLoading: null,
});


const UserContextProvider = ({ children }) => {
    const [userdata, setUserData] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [success, setSuccess] = useState(null);

    return <UserContext.Provider value={{
        userdata,
        setUserData,
        message, setMessage, isLoading, setIsLoading, success, setSuccess
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;