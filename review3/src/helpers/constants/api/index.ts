import { AxiosRequestConfig }  from "axios"

const API_BASE_URL : string = 'https://swapi.dev/api/'; 

export const AXIOS_CONFIG : AxiosRequestConfig<any> = {
    baseURL: API_BASE_URL,
}

export const API_SPECIES : string = 'species/';