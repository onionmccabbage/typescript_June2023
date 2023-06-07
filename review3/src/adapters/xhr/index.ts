import Axios from "axios";
import { AXIOS_CONFIG } from '../../helpers/constants/api';

const returnAxiosInstance = () => {
    return Axios.create(AXIOS_CONFIG);
}

export const get = (url : string) => {
    const axios = returnAxiosInstance();

    return axios.get(url);
}

export const post = (url : string, requestData : Object) => {
    const axios = returnAxiosInstance();

    return axios.post(url, requestData);
}