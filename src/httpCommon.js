import axios from 'axios';
import { URL_API } from './utils/constants';

const user = JSON.parse(localStorage.getItem("user"));

const configAxios = {
    baseURL: URL_API,
    headers: {
        "Content-type": "application/json",
        "Authorization": user && user.accessToken ? "Bearer " + user.accessToken : ""
    }
}

export default axios.create(configAxios);