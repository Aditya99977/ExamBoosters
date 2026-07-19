import api from "./api";

export const loginUser = async (data) => {
    const response = await api.post("/auth/login", data);
    return response.data;
};

export const registerUser = async (data) => {
    const response = await api.post("/auth/signup", data);
    return response.data;
};

export const verifyEmail = async (token) => {
    const response = await api.get(`/auth/verify-email/${token}`);
    return response.data;
};

export const resendVerificationEmail = async (email) => {
    const response = await api.post("/auth/resend-verification", {
        email,
    });

    return response.data;
};