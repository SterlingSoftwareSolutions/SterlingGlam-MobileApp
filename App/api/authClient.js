import { create } from "apisauce";

const authClient = create({
    baseURL: 'http://127.0.0.1:8000/api',
});

export default authClient;