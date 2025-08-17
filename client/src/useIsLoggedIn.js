import { useContext } from "react"
import { UserContext } from "./UserContextProvider"

const useIsLoggedIn = () => {
    const {userdata} = useContext(UserContext);

    return !!(userdata?.username);
  
}

export default useIsLoggedIn