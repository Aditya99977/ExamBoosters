import api from "./api";

export const getPracticeQuestions = async (subject, difficulty) => {

    const response = await api.get("/questions", {

        params: {

            subject,

            difficulty

        }

    });

    return response.data;

};