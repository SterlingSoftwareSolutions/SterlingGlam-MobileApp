import { create } from "apisauce";
import authService from "../auth/authService";

const admin = async () => {
    const token = await authService.getToken();
    const prodEnv = false;
    const baseURL = prodEnv ? 'https://saloon.sterlingbpo.com.au/api' : 'http://10.0.2.2:8000/api';

    const api = create({
        baseURL: baseURL,
        headers: { 'Authorization': 'Bearer ' + token }
    });
    return api;
};

export default admin;