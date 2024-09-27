import { create } from "apisauce";

const authClient = create({
    baseURL: "http://10.0.2.2:8000/api",
});

export default authClient;