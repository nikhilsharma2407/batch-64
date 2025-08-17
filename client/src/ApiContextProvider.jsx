import { createContext, useState } from "react";

export const ApiContext = createContext({
    message: null,
    setMessage: null,
    success: null,
    setSuccess: null,
    isLoading: null,
    setIsLoading: null,
});


const ApiContextProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [success, setSuccess] = useState(null);



    return <ApiContext.Provider value={{
        message, setMessage, isLoading, setIsLoading, success, setSuccess
    }}>
        {children}
    </ApiContext.Provider>
}

export default ApiContextProvider;