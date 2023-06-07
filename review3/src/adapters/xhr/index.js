import Axios from "axios";
import { AXIOS_CONFIG } from '../../helpers/constants/api';
const returnAxiosInstance = () => {
    return Axios.create(AXIOS_CONFIG);
};
export const get = (url) => {
    const axios = returnAxiosInstance();
    return axios.get(url);
};
export const post = (url, requestData) => {
    const axios = returnAxiosInstance();
    return axios.post(url, requestData);
};
