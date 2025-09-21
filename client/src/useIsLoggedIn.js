import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const useGetUserData = () => {
  const data = useContext(UserContext);
  const isLoggedIn = !!data.userdata;
  return { isLoggedIn, ...data };
};

export default useGetUserData;
