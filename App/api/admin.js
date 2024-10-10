import { create } from "apisauce";
import authService from "../auth/authService";

const admin = async () => {
    const token = await authService.getToken();
    const prodEnv = true;
    const baseURL = prodEnv ? 'https://salonapp.sterlingbpo.com/api' : 'http://127.0.0.1:8000/api';

    const api = create({
        baseURL: baseURL,
        headers: { 'Authorization': 'Bearer ' + token }
    });
    return api;
};

export default admin;