import { create } from "apisauce";

const authClient = create({
    baseURL: "https://salonapp.sterlingbpo.com/api",
});

export default authClient;