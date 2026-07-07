import api from "./api";

/*
========================================
Get Admin Dashboard
========================================
*/

export const getAdminDashboard = async () => {

    const response = await api.get("/admin/dashboard");

    return response.data;

};

/*
========================================
Get All Users
========================================
*/

export const getAllUsers = async () => {

    const response = await api.get("/admin/users");

    return response.data;

};

/*
========================================
Get All Questions
========================================
*/

export const getAllQuestions = async () => {

    const response = await api.get("/admin/questions");

    return response.data;

};

/*
========================================
Update Question
========================================
*/

export const updateQuestion = async (id, questionData) => {

    const response = await api.put(

        `/admin/question/${id}`,

        questionData

    );

    return response.data;

};

/*
========================================
Delete Question
========================================
*/

export const deleteQuestion = async (id) => {

    const response = await api.delete(

        `/admin/question/${id}`

    );

    return response.data;

};

/*
========================================
Add Question
========================================
*/

export const addQuestion = async (questionData) => {

    const response = await api.post(

        "/questions/add",

        questionData

    );

    return response.data;

};

/*
========================================
Upload CSV
========================================
*/

export const uploadCSV = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(

        "/admin/upload/csv",

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

    return response.data;

};