import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({

    baseURL: import.meta.env.VITE_APP_URL,
    withCredentials: true

})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    // interceptor

    // Response Interceptor
    axiosSecure.interceptors.response.use(
        res => {
            console.log('Response app e asar agei ami thamiye dekhechi ki ache vitore.');
            return res
        },
        async error => {
            console.log("Error from axios interceptor", error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                await logOut();
                navigate('/login')
            };
            return Promise.reject(error)
        }
    );


    // Request Interceptor
    // axiosSecure.interceptors.request

    return axiosSecure;
};

export default useAxiosSecure;