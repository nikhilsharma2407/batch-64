import React, { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";
import { ApiContext } from "./ApiContextProvider";
import { REQUEST_TYPES, axiosInstance } from "./apiUtils";

const useApi = (url, type = REQUEST_TYPES.GET) => {
  const {
    isLoading,
    message,
    setIsLoading,
    setMessage,
    setSuccess,
    success,
    setUserData,
  } = useContext(UserContext);
  const [response, setResponse] = useState(null);

  const makeRequest = async (payload, updateUserData = true) => {
    try {
      setIsLoading(true);
      setMessage(null);
      const apiData = (await axiosInstance[type](url, payload)).data;
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
      if (error.response?.data?.message) {
        setMessage(error.response?.data?.message);
      } else {
        setMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { makeRequest, response, isLoading };
};

export default useApi;
