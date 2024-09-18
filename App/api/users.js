import authClient from "./authClient";

const register = (email, first_name, phone_number, password, password_confirmation, role) => authClient.post("/register", { email, first_name, phone_number, password, password_confirmation, role });

export default { register, };