import api from "./api";

/*
==============================
Get Profile
==============================
*/

export const getProfile = async () => {

    const response = await api.get("/profile");

    return response.data;

};

/*
==============================
Update Profile
==============================
*/

export const updateProfile = async (data) => {

    const response = await api.put("/profile", data);

    return response.data;

};