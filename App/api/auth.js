import authClient from "./authClient";

const login = (email, password) => authClient.post("/login", { email, password});

export default { login, };