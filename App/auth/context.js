import React, { createContext, useState, useEffect } from "react";
import authService from "./authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Fetch user from AsyncStorage when the app starts
    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await authService.getUser();
            setUser(storedUser);
        };
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
