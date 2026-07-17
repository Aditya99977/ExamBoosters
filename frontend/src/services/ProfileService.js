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

/*
==============================
Upload Profile Image
==============================
*/

export const uploadProfileImage = async (formData) => {

    const response = await api.put(

        "/profile/upload-profile-image",

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data",

            },

        }

    );

    return response.data;

};