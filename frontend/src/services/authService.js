import api from "./api";

/*
========================================
Login
========================================
*/

export const loginUser = async (data, isAdmin = false) => {

    const endpoint = isAdmin
        ? "/auth/admin/login"
        : "/auth/login";

    const response = await api.post(endpoint, data);

    return response.data;

};

/*
========================================
Register
========================================
*/

export const registerUser = async (data) => {

    const response = await api.post(
        "/auth/signup",
        data
    );

    return response.data;

};

/*
========================================
Email Verification
========================================
*/

export const verifyEmail = async (token) => {

    const response = await api.get(
        `/auth/verify-email/${token}`
    );

    return response.data;

};

/*
========================================
Resend Verification Email
========================================
*/

export const resendVerificationEmail = async (email) => {

    const response = await api.post(
        "/auth/resend-verification",
        {
            email,
        }
    );

    return response.data;

};