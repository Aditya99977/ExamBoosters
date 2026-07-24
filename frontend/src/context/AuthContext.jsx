import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function restoreStoredUser() {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
        return null;
    }

    try {
        return {
            token,
            ...JSON.parse(userData),
        };
    } catch {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return null;
    }
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(restoreStoredUser);

    const login = (token, userData) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));

        setUser({
            token,
            ...userData,
        });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    const updateUser = (updatedData) => {
        setUser((previousUser) => {
            const updatedUser = {
                ...previousUser,
                ...updatedData,
            };

            localStorage.setItem(
                "user",
                JSON.stringify({
                    id: updatedUser.id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    role: updatedUser.role,
                    preferredExam: updatedUser.preferredExam,
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
                loading: false,
                login,
                logout,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}