import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (token && userData) {

            try {

                setUser({
                    token,
                    ...JSON.parse(userData),
                });

            } catch (error) {

                console.error("Failed to restore user session:", error);

                localStorage.removeItem("token");
                localStorage.removeItem("user");

            }

        }

        setLoading(false);

    }, []);

    /*
    ============================================
    Login
    ============================================
    */

    const login = (token, userData) => {

        localStorage.setItem("token", token);

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        setUser({
            token,
            ...userData,
        });

    };

    /*
    ============================================
    Logout
    ============================================
    */

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);

    };

    /*
    ============================================
    Update User
    ============================================
    */

    const updateUser = (updatedData) => {

        setUser((prev) => {

            const updatedUser = {

                ...prev,

                ...updatedData,

            };

            localStorage.setItem(
                "user",
                JSON.stringify({
                    id: updatedUser.id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    role: updatedUser.role,
                    examTarget: updatedUser.examTarget,
                    profileImage: updatedUser.profileImage,
                })
            );

            return updatedUser;

        });

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                loading,

                login,

                logout,

                updateUser,

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}