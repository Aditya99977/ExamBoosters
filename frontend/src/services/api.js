import axios from "axios";

export const API_BASE_URL = (
    import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/+$/, "");

export const API_ORIGIN = new URL(
    API_BASE_URL,
    window.location.origin
).origin;

const api = axios.create({

    baseURL: API_BASE_URL,

    timeout: 15000,

    headers: {

        "Content-Type": "application/json"

    }

});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export default api;
