import React, { useContext } from "react";
import { UserContext } from "./UserContextProvider";
import { ApiContext } from "./ApiContextProvider";
import axios from "axios";

const useApi = (url, type) => {
  const { setUserData } = useContext(UserContext);
  const { isLoading, message, setIsLoading, setMessage, setSuccess, success } =
    useContext(ApiContext);
  const [response, setResponse] = useState(null);

  const makeRequest = async (payload, updateUserData = false) => {
    try {
      setIsLoading(true);
      setMessage(null);
      const apiData = (await axios[type](url, payload)).data;
      const { message, data, success } = apiData;
      setSuccess(success);
      setMessage(message);
      if (updateUserData) {
        setUserData(data);
      } else {
        setResponse(data);
      }
    } catch (error) {
      setSuccess(false);
      if (error?.message) {
        setMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { makeRequest, response, isLoading };
};

export default useApi;
