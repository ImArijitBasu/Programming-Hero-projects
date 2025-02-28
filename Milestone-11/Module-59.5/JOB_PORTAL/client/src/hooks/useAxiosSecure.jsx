import axios from 'axios';
import React, { useEffect  } from 'react';
import { useNavigate } from "react-router-dom";

import useAuth from './useAuth';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const {signOutUser} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response;
        },error=>{
            console.log('error caught in interceptor');
            if(error.status === 401 || error.status === 403){
                console.log('need to logout the user');
                signOutUser()
                .then(()=>{
                    console.log("logged out user");
                    //! redirect to the login page-----------------------------
                    navigate('signIn')
                })
                .catch(error => console.log(error))
            }

            return Promise.reject(error);
        })
    },[])
    return axiosInstance
};

export default useAxiosSecure;